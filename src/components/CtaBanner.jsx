import "../styles/CtaBanner.css";

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="cta">
      <div className="cta-banner-bg" />
      <div className="cta-deco-left" />
      <div className="cta-deco-right" />

      <div className="cta-inner" data-aos="zoom-in">
        <div className="cta-eyebrow">Free Site Visit — No Obligation</div>

        <h2 className="cta-title">
          Ready to Build Your <span>Dream Home?</span>
        </h2>

        <p className="cta-subtext">
          Contact us today for a{" "}
          <strong style={{ color: "var(--gold-light)" }}>
            FREE site visit and consultation
          </strong>
          . Our expert team will assess your project, answer all your questions,
          and give you a transparent estimate — completely free, completely
          hassle-free.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="btn-gold">
            <span>Book a Free Consultation</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="tel:+919513190176" className="btn-outline">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>Call Us Now</span>
          </a>
        </div>

        {/* Info Row */}
        <div className="cta-info-row">
          <div className="cta-info-item">
            <div className="cta-info-icon">📍</div>
            <span>
              <strong>Bagalkot</strong>, Karnataka
            </span>
          </div>
          <div className="cta-info-item">
            <div className="cta-info-icon">⏰</div>
            <span>
              <strong>Mon–Sat</strong> 9am – 7pm
            </span>
          </div>
          <div className="cta-info-item">
            <div className="cta-info-icon">⚡</div>
            <span>
              Response within <strong>2 Hours</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
