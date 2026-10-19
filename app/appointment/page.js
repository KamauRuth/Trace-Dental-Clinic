'use client';

import Link from 'next/link';
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  contact: '',
  date: '',
  service: '',
};

const services = [
  'Root Canal Treatment',
  'Teeth Whitening',
  'Teeth Extraction',
  'Teeth Replacement',
  'Gum Treatment',
  'Paediatric Dentistry',
  'Teeth Scaling and Polishing',
  'Teeth Cleaning & Polishing',
  'Dental Braces',
  'Oral Hygiene',
  'Live Advisory',
  'Consultation',
];

export default function AppointmentPage() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = [
      'Hello Trace Dental Clinic, I would like to book an appointment.',
      '',
      `Full name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone number: ${form.contact}`,
      `Preferred date: ${form.date}`,
      `Dental service: ${form.service}`,
    ].join('\n');

    window.location.href = `https://wa.me/254795512428?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <main className="page-shell appointment-page">
      <div className="container">
        <header className="appointment-header">
          <Link href="/" className="appointment-back" aria-label="Return to home page">← Back home</Link>
          <div className="appointment-header-copy">
            <p className="section-eyebrow">Appointment booking</p>
            <h1>Schedule your dental visit</h1>
            <p>
              Fill in your details and our team will review your request and get back to you shortly.
            </p>
          </div>
        </header>

        <div className="appointment-grid">
          <form className="form-card appointment-form" onSubmit={handleSubmit}>
            <div className="appointment-form-heading">
              <span>1</span>
              <div>
                <h2>Appointment details</h2>
                <p>Tell us how we can help you.</p>
              </div>
            </div>
            <div className="form-stack">
              <label className="field-label">
                Full name
                <input className="input" type="text" name="name" placeholder="Enter your full name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
              </label>
              <div className="appointment-field-row">
                <label className="field-label">
                  Email address
                  <input className="input" type="email" name="email" placeholder="you@example.com" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                </label>
                <label className="field-label">
                  Phone number
                  <input className="input" type="tel" name="contact" placeholder="e.g. 0795 512 428" required value={form.contact} onChange={(event) => setForm({ ...form, contact: event.target.value })} />
                </label>
              </div>
              <div className="appointment-field-row">
                <label className="field-label">
                  Preferred date
                  <input className="input" type="date" name="date" required value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
                </label>
                <label className="field-label">
                  Dental service
                  <select className="input" name="service" required value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="button-row">
                <button className="button" type="submit">Book appointment</button>
                <Link href="/" className="button-secondary">Back home</Link>
              </div>
            </div>
          </form>

          <aside className="notice-card appointment-notice">
            <div className="success-mark" aria-hidden="true">✓</div>
            <p className="appointment-step">Step 2</p>
            <h3>What happens next?</h3>
            <p>
              Your details will open in WhatsApp as a pre-filled message. Review and send it to our team to request your appointment.
            </p>
            <div className="appointment-contact">
              <span>Need help booking?</span>
              <a href="tel:+254795512428">Call +254 795 512 428</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
