import "../styles/WhyUs.css";

const WHY_ITEMS = [
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden charges. You get a detailed, itemised estimate upfront — so you can plan with complete confidence and zero financial surprises.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    desc: "We respect your timeline. Our project management system tracks every milestone and we commit to handover deadlines with a written agreement.",
  },
  {
    icon: "🏆",
    title: "Premium Quality Materials",
    desc: "Only ISI-certified cement, TMT steel, and branded fittings go into your home. We believe quality materials are a long-term investment, not an expense.",
  },
  {
    icon: "👷",
    title: "Certified Engineers & Architects",
    desc: "Every project is supervised by licensed Civil Engineers and RERA-approved Architects — not just contractors. Your home is in expert hands.",
  },
  {
    icon: "🔍",
    title: "Post-Construction Support",
    desc: "Our relationship doesn't end at handover. We provide 1-year free maintenance and a 5-year structural warranty for all projects we build.",
  },
  {
    icon: "✏️",
    title: "Fully Customised Designs",
    desc: "Your home, your way. We design around your lifestyle, family needs, and aesthetic preferences — from compact 2BHK apartments to sprawling villas.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-section section-padding" id="why-us">
      <div className="why-grid-deco" />
      <div
        className="container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div className="why-header" data-aos="fade-up">
          <span className="section-label">Why Aditya Builders</span>
          <h2 className="section-title">
            The <span>Difference</span> We Deliver
          </h2>
          <div
            className="gold-divider"
            style={{ margin: "1rem auto 1.25rem" }}
          />
          <p className="section-subtitle">
            We don't just build structures — we build trust. Here's why
            thousands of families in Bagalkot choose Aditya Builders Group for
            their most important investment.
          </p>
        </div>

        {/* Cards */}
        <div className="why-grid">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="why-card"
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
            >
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
