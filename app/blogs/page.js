import Link from 'next/link';

const articles = [
  {
    category: 'Preventive care',
    readTime: '4 min read',
    title: 'Revitalize Your Smile with Teeth Scaling',
    image: '/assets/images/blog-2.jpg',
    highlight: 'A brighter smile starts with regular cleanings and professional polish.',
    paragraphs: [
      'A bright, healthy smile can make all the difference in your confidence and overall well-being. One of the best ways to maintain a radiant smile is through regular teeth scaling and polishing.',
      'During a teeth scaling and polishing procedure, your dentist or hygienist will use specialized tools to gently remove plaque and tartar from your teeth, both above and below the gum line. This helps prevent gum disease and reduces the risk of tooth decay.',
    ],
  },
  {
    category: 'Daily routine',
    readTime: '3 min read',
    title: 'Mastering Daily Oral Hygiene',
    image: '/assets/images/blog-1.jpg',
    highlight: 'Small habits keep bigger dental problems away.',
    paragraphs: [
      'A healthy smile is not just a matter of aesthetics; it is also a reflection of good oral hygiene practices. By taking care of your teeth and gums, you can prevent tooth decay, gum disease, bad breath, and tooth loss.',
      'Developing good oral hygiene habits is easier than you think. Brush at least twice a day, floss once a day, and keep up with regular dental check-ups to catch issues early on.',
    ],
  },
  {
    category: 'Orthodontics',
    readTime: '5 min read',
    title: 'Achieve a Confident Smile with Braces',
    image: '/assets/images/blog-3.jpg',
    highlight: 'Straight teeth are healthier, easier to clean, and easier to love.',
    paragraphs: [
      'Are you tired of feeling self-conscious about your smile? Our orthodontic practice offers reliable braces options to help you achieve the smile of your dreams.',
      'Straight teeth are easier to clean and maintain, reducing the risk of tooth decay and gum disease while also boosting confidence.',
    ],
  },
];

export default function BlogsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="blog-page-hero blog-hero-grid">
          <div className="blog-hero-copy">
            <p className="section-eyebrow blog-eyebrow">Clinic blog</p>
            <h1>Trace Dental Clinic blogs</h1>
            <p>
              Practical oral health advice, treatment explainers, and simple habits that support a healthy smile.
            </p>
            <div className="button-row blog-actions">
              <Link href="/appointment" className="button">Book appointment</Link>
              <Link href="/" className="button-secondary">Back home</Link>
            </div>
          </div>

          <div className="blog-hero-panel">
            <div className="blog-hero-stat">
              <span>Fresh reading</span>
              <strong>3</strong>
            </div>
            <div className="blog-hero-stat">
              <span>Focus</span>
              <strong>Healthy habits</strong>
            </div>
            <div className="blog-hero-note">
              Keep up with simple, practical advice that supports better smiles at home and at the clinic.
            </div>
          </div>
        </div>

        <section className="featured-story">
          <div className="featured-story-copy">
            <p className="section-eyebrow">Featured read</p>
            <h2 className="section-title">A cleaner smile begins with consistent care</h2>
            <p className="section-copy">
              Choose one of the articles below to learn how preventive care, routine hygiene, and orthodontics work together to keep your smile bright.
            </p>
          </div>
        </section>

        <div className="blog-article-grid">
          {articles.map((article) => (
            <article key={article.title} className="blog-card blog-article">
              <div className="blog-card-meta-row">
                <span className="blog-chip">{article.category}</span>
                <span className="blog-read-time">{article.readTime}</span>
              </div>
              <div className="section-grid blog-article-grid-inner">
                <figure className="blog-figure">
                  <img src={article.image} alt={article.title} />
                </figure>
                <div className="blog-page-copy">
                  <h2>{article.title}</h2>
                  <p className="blog-highlight">{article.highlight}</p>
                  {article.paragraphs.map((paragraph) => (
                    <p key={paragraph} style={{ marginBottom: '0.95rem' }}>{paragraph}</p>
                  ))}
                  <div className="button-row" style={{ marginTop: '1rem' }}>
                    <Link href="/appointment" className="button-secondary">Book a visit</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="blog-footer-cta">
          <div>
            <p className="section-eyebrow" style={{ color: '#d8fbff' }}>Need a treatment plan?</p>
            <h2>Bring your questions to the clinic and get clear next steps.</h2>
          </div>
          <Link href="/appointment" className="button">Book appointment</Link>
        </section>
      </div>
    </main>
  );
}
