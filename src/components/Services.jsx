import "../styles/Services.css";

const SERVICES = [
  {
    icon: "bi-shield-check",
    title: "Anti-Termite Solutions",
    desc: "India's most trusted pre & post-construction anti-termite treatments. WHO-approved chemicals with a 10-year warranty protect your foundation, wooden fixtures, and structure from damage.",
    tags: ["Pre-Construction", "Post-Construction", "10-Yr Warranty"],
    accent: "orange",
  },
  {
    icon: "bi-droplet-half",
    title: "Waterproofing for Slabs",
    desc: "Crystalline and membrane waterproofing for rooftop slabs, basements, bathrooms, and external walls. Prevents seepage, dampness, and structural degradation — backed by certifications.",
    tags: ["Slab Proofing", "Basement", "Terrace", "External Walls"],
    accent: "navy",
  },
  {
    icon: "bi-house-door",
    title: "Residential Construction",
    desc: "End-to-end home construction from foundation to finishing. Civil, electrical, plumbing, and interiors — all under one roof for a truly stress-free build experience.",
    tags: ["Turnkey", "Foundation to Finish"],
    accent: "orange",
  },
  {
    icon: "bi-building",
    title: "Real Estate Business",
    desc: "Premium residential and commercial plots, apartments, and investment properties across Bagalkot. We guide you from site selection through documentation to possession.",
    tags: ["Plots", "Apartments", "Investment"],
    accent: "navy",
  },
];

export default function Services() {
  return (
    <section className="services-section section-padding" id="services">
      {/* Top accent line */}
      <div className="services-topline" />

      <div className="container" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-lg-7 text-center">
            <span className="section-label d-inline-block mb-2">
              Our Expertise
            </span>
            <h2 className="section-title mb-0">
              What We <span>Build & Protect</span>
            </h2>
            <div className="gold-divider mx-auto mt-3 mb-3" />
            <p className="section-subtitle mx-auto">
              From the ground up — specialising in anti-termite protection and
              waterproofing, with complete construction and real estate services
              for your dream home.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="col-12 col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
            >
              <div className={`svc-card svc-card--${svc.accent} h-100`}>
                {/* Icon */}
                <div className="svc-icon-wrap mb-4">
                  <i className={`bi ${svc.icon}`} aria-hidden="true" />
                </div>

                {/* Number label */}
                <span className="svc-number">0{i + 1}</span>

                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>

                {/* Tags */}
                {svc.tags && (
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {svc.tags.map((t) => (
                      <span key={t} className="svc-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <a href="#contact" className="svc-link mt-auto">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>

                {/* Hover background shape */}
                <div className="svc-hover-shape" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="svc-cta-strip d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 mt-5 px-4 py-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="d-flex align-items-center gap-3">
            <i
              className="bi bi-patch-check-fill svc-strip-icon"
              aria-hidden="true"
            />
            <div>
              <p className="svc-strip-heading mb-0">Not sure what you need?</p>
              <p className="svc-strip-sub mb-0">
                Talk to our experts — free consultation, no obligations.
              </p>
            </div>
          </div>
          <a href="#contact" className="btn-gold flex-shrink-0">
            <span>Get Free Consultation</span>
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
