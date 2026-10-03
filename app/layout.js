import './globals.css';

export const metadata = {
  title: 'Trace Dental Clinic | Gentle dental care',
  description: 'Trace Dental Clinic offers family-friendly dental care, appointments, and oral health guidance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
