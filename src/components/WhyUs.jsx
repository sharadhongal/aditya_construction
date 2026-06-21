import "../styles/WhyUs.css";

const WHY_ITEMS = [
  {
    icon: "bi-currency-rupee",
    title: "Transparent Pricing",
    desc: "No hidden charges. You get a detailed, itemised estimate upfront — so you can plan with complete confidence and zero financial surprises.",
    stat: "0 Hidden Costs",
  },
  {
    icon: "bi-clock-history",
    title: "On-Time Delivery",
    desc: "We respect your timeline. Our project management system tracks every milestone and we commit to handover deadlines with a written agreement.",
    stat: "100% On Schedule",
  },
  {
    icon: "bi-award",
    title: "Premium Quality Materials",
    desc: "Only ISI-certified cement, TMT steel, and branded fittings go into your home. Quality materials are a long-term investment, not an expense.",
    stat: "ISI Certified Only",
  },
  {
    icon: "bi-person-badge",
    title: "Certified Engineers",
    desc: "Every project is supervised by licensed Civil Engineers and RERA-approved Architects — not just contractors. Your home is in expert hands.",
    stat: "RERA Approved",
  },
  {
    icon: "bi-tools",
    title: "Post-Construction Support",
    desc: "Our relationship doesn't end at handover. We provide 1-year free maintenance and a 5-year structural warranty for all projects we build.",
    stat: "5-Yr Warranty",
  },
  {
    icon: "bi-pencil-square",
    title: "Fully Customised Designs",
    desc: "Your home, your way. We design around your lifestyle, family needs, and preferences — from compact 2BHK apartments to sprawling villas.",
    stat: "100% Custom",
  },
];

export default function WhyUs() {
  return (
    <section className="why-section section-padding" id="why-us">
      {/* Decorative layers */}
      <div className="why-grid-deco" aria-hidden="true" />
      <div className="why-glow-left" aria-hidden="true" />
      <div className="why-glow-right" aria-hidden="true" />

      <div
        className="container position-relative"
        style={{ maxWidth: "1280px", zIndex: 1 }}
      >
        {/* Header */}
        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-lg-7 text-center">
            <span className="section-label why-label">Why Aditya Builders</span>
            <h2 className="section-title text-white mb-0">
              The <span>Difference</span> We Deliver
            </h2>
            <div className="gold-divider mx-auto mt-3 mb-3" />
            <p className="why-subtitle">
              We don't just build structures — we build trust. Here's why
              thousands of families in Bagalkot choose Aditya Builders Group for
              their most important investment.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="col-12 col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 90}`}
            >
              <div className="why-card h-100">
                {/* Top row: icon + stat badge */}
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <div className="why-icon-wrap">
                    <i className={`bi ${item.icon}`} aria-hidden="true" />
                  </div>
                  <span className="why-stat-badge">{item.stat}</span>
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc mb-0">{item.desc}</p>

                {/* Bottom accent line (revealed on hover via CSS) */}
                <div className="why-card-line" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="why-trust-bar row g-0 mt-5 text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {[
            { icon: "bi-houses", value: "500+", label: "Homes Completed" },
            { icon: "bi-people", value: "18+", label: "Years of Trust" },
            {
              icon: "bi-patch-check",
              value: "100%",
              label: "Client Satisfaction",
            },
            {
              icon: "bi-geo-alt",
              value: "Bagalkot",
              label: "Based & Trusted Locally",
            },
          ].map((t, i) => (
            <div
              key={t.label}
              className={`col-6 col-md-3 why-trust-item ${i < 3 ? "why-trust-divider" : ""}`}
            >
              <i className={`bi ${t.icon} why-trust-icon`} aria-hidden="true" />
              <p className="why-trust-value mb-0">{t.value}</p>
              <p className="why-trust-label mb-0">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
