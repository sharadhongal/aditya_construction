import "../styles/Services.css";

const SERVICES = [
  {
    icon: "🛡️",
    title: "Anti-Termite Solutions",
    desc: "India's most trusted pre & post-construction anti-termite treatments. We use WHO-approved chemicals with 10-year warranty to protect your foundation, wooden fixtures, and entire structure from termite damage.",
    tags: ["Pre-Construction", "Post-Construction", "10-Yr Warranty"],
    featured: true,
  },
  {
    icon: "💧",
    title: "Waterproofing for Slabs",
    desc: "Specialised crystalline and membrane waterproofing for rooftop slabs, basements, bathrooms, and external walls. Prevents seepage, dampness, and structural degradation — backed by material certifications.",
    tags: ["Slab Proofing", "Basement", "Terrace", "External Walls"],
    featured: true,
  },
  {
    icon: "🏠",
    title: "Residential Home Construction",
    desc: "End-to-end home construction from foundation to finishing. We manage every aspect — civil, electrical, plumbing, and interiors — under one roof for a stress-free build experience.",
    featured: true,
  },
  {
    icon: "🎨",
    title: "Real Estate Buisiness",
    desc: "Bespoke interiors that reflect your personality. From modular kitchens to premium false ceilings, we bring your vision to life with quality materials and timeless aesthetics.",
    featured: true,
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div
        className="container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div className="services-header" data-aos="fade-up">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title">
            What We <span>Build & Protect</span>
          </h2>
          <div
            className="gold-divider"
            style={{ margin: "1rem auto 1.25rem" }}
          />
          <p className="section-subtitle">
            From the ground up — specialising in anti-termite protection and
            waterproofing, with complete construction and interior services for
            your dream home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`service-card ${svc.featured ? "featured" : ""}`}
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
            >
              <div className="service-icon-wrap">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              {svc.tags && (
                <div className="service-tags">
                  {svc.tags.map((t) => (
                    <span key={t} className="service-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <a href="#contact" className="service-link">
                Learn More <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
