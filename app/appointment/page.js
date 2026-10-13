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
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || result.result !== 'success') {
        throw new Error(result.message || 'Failed to create appointment.');
      }

      setStatus('success');
      setMessage('Thank you. Your appointment has been submitted successfully.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Unexpected error while submitting the form.');
    }
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
                <button className="button" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Book appointment'}
                </button>
                <Link href="/" className="button-secondary">Back home</Link>
              </div>
            </div>
          </form>

          <aside className="notice-card appointment-notice">
            <div className="success-mark" aria-hidden="true">✓</div>
            <p className="appointment-step">Step 2</p>
            <h3>What happens next?</h3>
            <p>
              After submission, our team will review your request and confirm your appointment.
            </p>
            <div className="appointment-contact">
              <span>Need help booking?</span>
              <a href="tel:+254795512428">Call +254 795 512 428</a>
            </div>
            {message ? (
              <div className={`alert ${status === 'success' ? 'alert-success' : 'alert-error'}`} style={{ marginTop: '1rem' }}>
                {message}
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </main>
  );
}
