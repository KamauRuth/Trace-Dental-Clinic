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
    <main className="page-shell">
      <div className="container">
        <div className="page-heading">
          <p className="section-eyebrow">Appointment booking</p>
          <h1 className="section-title">Schedule your dental visit</h1>
          <p className="section-copy">
            Fill in your details and our team will review your request and get back to you shortly.
          </p>
        </div>

        <div className="section-grid" style={{ gridTemplateColumns: '1.05fr 0.95fr' }}>
          <form className="form-card" onSubmit={handleSubmit}>
            <h2 style={{ marginTop: 0 }}>Appointment details</h2>
            <div className="form-stack">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
              <input
                className="input"
                type="text"
                name="contact"
                placeholder="Your contact"
                required
                value={form.contact}
                onChange={(event) => setForm({ ...form, contact: event.target.value })}
              />
              <input
                className="input"
                type="date"
                name="date"
                required
                value={form.date}
                onChange={(event) => setForm({ ...form, date: event.target.value })}
              />
              <select
                className="input"
                name="service"
                required
                value={form.service}
                onChange={(event) => setForm({ ...form, service: event.target.value })}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <div className="button-row">
                <button className="button" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Book appointment'}
                </button>
                <Link href="/" className="button-secondary">Back home</Link>
              </div>
            </div>
          </form>

          <aside className="notice-card">
            <div className="success-mark">+</div>
            <h3 style={{ marginTop: 0 }}>What happens next</h3>
            <p>
              After submission, our team will review your request and confirm your appointment.
            </p>
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
