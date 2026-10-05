import Link from 'next/link';

const services = [
  {
    icon: '🦷',
    title: 'Root Canal Treatment',
    text: 'A procedure to remove infected pulp from inside the tooth, relieving pain and saving the natural tooth.',
  },
  {
    icon: '✨',
    title: 'Teeth Whitening',
    text: 'A cosmetic treatment that brightens and removes stains from your teeth for a whiter smile.',
  },
  {
    icon: '🪥',
    title: 'Teeth Extraction',
    text: 'The removal of severely damaged or decayed teeth to maintain overall oral health.',
  },
  {
    icon: '🦷',
    title: 'Teeth Replacement',
    text: 'Restores missing teeth using dentures, bridges, or implants for improved function and appearance.',
  },
  {
    icon: '💙',
    title: 'Gum Treatment',
    text: 'Helps manage gum diseases like gingivitis and periodontitis to ensure healthy gums.',
  },
  {
    icon: '👶',
    title: 'Paediatric Dentistry',
    text: 'Specialized dental care focused on the unique needs of children and young patients.',
  },
  {
    icon: '✨',
    title: 'Teeth Cleaning & Polishing',
    text: 'A dental procedure that removes plaque, tartar, and stains from teeth, leaving them clean, smooth, and shiny.',
  },
  {
    icon: '🦷',
    title: 'Dental Braces',
    text: 'Orthodontic devices used to align and straighten teeth for a healthier bite and better smile.',
  },
  {
    icon: '🪥',
    title: 'Oral Hygiene',
    text: 'Preventive care that includes regular cleaning, brushing, and dental checkups to maintain a healthy mouth.',
  },
  {
    icon: '💬',
    title: 'Live Advisory',
    text: 'Real-time consultation with dental professionals to answer questions and guide treatment.',
  },
];

const blogs = [
  {
    title: 'Revitalize Your Smile with Teeth Scaling',
    text: 'Keep your smile bright and healthy by removing plaque and stains with professional scaling and polishing.',
    image: '/assets/images/blog-2.jpg',
  },
  {
    title: 'Mastering Daily Oral Hygiene',
    text: 'Simple habits like brushing, flossing, and regular check-ups can help you maintain a beautiful, healthy smile.',
    image: '/assets/images/blog-1.jpg',
  },
  {
    title: 'Achieve a Confident Smile with Braces',
    text: 'Explore modern orthodontic options to straighten teeth, improve oral health, and boost your self-esteem.',
    image: '/assets/images/blog-3.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="brand" aria-label="Trace Dental Clinic home">
            <img className="brand-logo" src="/assets/images/tracelogo.png" alt="Trace Dental Clinic logo" />
            <span className="brand-copy brand-copy-desktop">
              <span className="brand-title">Trace Dental Clinic</span>
              <span className="brand-slogan">Gentle care for brighter smiles.</span>
            </span>
          </Link>

          <div className="header-actions">
            <nav className="site-nav" aria-label="Primary">
              <Link href="#services">Services</Link>
              <Link href="#about">About</Link>
              <Link href="/blogs">Blog</Link>
              <Link href="#footer">Contact</Link>
            </nav>

            <Link href="/appointment" className="nav-cta header-book">Book appointment</Link>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-brand-block">
                <img className="hero-brand-logo" src="/assets/images/tracelogo.png" alt="Trace Dental Clinic" />
                <div className="hero-brand-copy">
                  <span className="hero-brand-title">Trace Dental Clinic</span>
                  <span className="hero-brand-slogan">Gentle care for brighter smiles.</span>
                </div>
              </div>

              <p className="section-eyebrow hero-eyebrow">Toronto dentist worth smiling about</p>
              <h1 className="hero-title">
                Welcome to modern, calming dentistry designed for your family.
              </h1>
              <p className="hero-lead">
                Trace Dental Clinic offers preventive dentistry, restorative treatment, and comfortable visits for the whole family.
              </p>
              <div className="hero-badges hero-actions-mobile">
                <Link href="/appointment" className="badge badge-action">Book appointment</Link>
                <Link href="tel:+254795512428" className="badge badge-action">Phone</Link>
                <Link href="#footer" className="badge badge-action">Directions</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <p className="section-eyebrow">Our services</p>
            <h2 className="section-title">What we provide</h2>
            <p className="section-copy">
              Our clinic services are designed to support healthy teeth, healthy gums, and a confident smile.
            </p>

            <div className="section-grid service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="cta-band">
              <div className="cta-band-inner">
                <div>
                  <p className="section-eyebrow" style={{ color: '#d9f6f4' }}>Book your dental visit</p>
                  <h2>We are open and welcoming patients.</h2>
                  <p>Use the appointment page to send your request and our team will confirm your visit as soon as possible.</p>
                </div>
                <Link href="/appointment" className="button">Book appointment</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <figure className="about-figure">
              <img src="/assets/images/about.jpg" alt="Trace Dental Clinic about" />
            </figure>

            <div className="about-copy">
              <p className="section-eyebrow">About us</p>
              <h2 className="section-title">We care for your dental health</h2>
              <div className="copy-stack">
                <p>
                  Located at Kiambaa, Kiambu County, Trace Dental Clinic offers preventive, restorative, and family-focused dental services.
                </p>
                <p>
                  Our care is centered on comfort, clear communication, and treatment that supports healthy smiles at every stage of life.
                </p>
              </div>
              <div className="button-row" style={{ marginTop: '1.5rem' }}>
                <Link href="/blogs" className="button-secondary">Read the blog</Link>
                <Link href="/appointment" className="button" aria-label="Book an appointment now">Book now</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-eyebrow">Blog</p>
            <h2 className="section-title">Latest dental tips and news</h2>
            <div className="section-grid blog-grid">
              {blogs.map((blog) => (
                <article className="blog-card" key={blog.title}>
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-card-content">
                    <h2>{blog.title}</h2>
                    <p>{blog.text}</p>
                    <Link href="/blogs">Read more</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div className="footer-card">
              <div className="brand" style={{ marginBottom: '0.75rem' }}>
                <img className="brand-logo brand-logo-footer" src="/assets/images/tracelogo.png" alt="Trace Dental Clinic logo" />
                <span className="brand-copy">Trace Dental Clinic</span>
              </div>
              <p>Kiambaa Stage, Kiambu County</p>
              <p>+254795512428</p>
              <p>tracemedicalcentre@gmail.com</p>
            </div>
            <div className="footer-card">
              <h3>Other links</h3>
              <div className="footer-links">
                <Link href="#services">Services</Link>
                <Link href="#about">About us</Link>
                <Link href="/blogs">Blog</Link>
                <Link href="/appointment">Appointment</Link>
              </div>
            </div>
            <div className="footer-card">
              <h3>Opening hours</h3>
              <p>Monday - Saturday</p>
              <p>8:00am - 5:00pm</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Trace Dental Clinic</span>
          </div>
        </div>
      </footer>
    </>
  );
}
