import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

export async function POST(request) {
  try {
    const { name, contact } = await request.json();

    if (!name || !contact) {
      return NextResponse.json(
        { result: 'error', message: 'Name and contact are required.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from('callback_requests').insert({
      name,
      contact,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ result: 'success', message: 'Callback request saved.' }, { status: 201 });
  } catch (error) {
    console.error('Callback request failed:', error);
    return NextResponse.json(
      { result: 'error', message: error.message || 'Unable to save callback request.' },
      { status: 500 }
    );
  }
}
