import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(request) {
  try {
    const { name, email, contact, date, service } = await request.json();

    if (!name || !email || !contact || !date || !service) {
      return NextResponse.json(
        { result: 'error', message: 'All appointment fields are required.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from('appointments').insert({
      name,
      email,
      contact,
      appointment_date: date,
      service,
    });

    if (error) {
      throw error;
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'Trace Dental Clinic <onboarding@resend.dev>',
          to: email,
          subject: 'Appointment Confirmation',
          text: `Hello ${name},\n\nYour appointment for ${service} has been successfully created for ${date}.\n\nThank you!`,
        });
      } catch (emailError) {
        console.error('Appointment email failed:', emailError);
      }
    }

    return NextResponse.json(
      { result: 'success', message: 'Appointment created successfully.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Appointment request failed:', error);
    return NextResponse.json(
      { result: 'error', message: error.message || 'Unable to create appointment.' },
      { status: 500 }
    );
  }
}
