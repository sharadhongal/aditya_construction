import "../styles/Footer.css";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Anti-Termite Solutions", href: "#services" },
  { label: "Slab Waterproofing", href: "#services" },
  { label: "Home Construction", href: "#services" },
  { label: "Interior Design", href: "#services" },
  { label: "Renovation & Remodeling", href: "#services" },
  { label: "Vastu Consultation", href: "#services" },
  { label: "Turnkey Projects", href: "#services" },
];

const SOCIAL_LINKS = [
  { icon: "📘", href: "https://facebook.com", label: "Facebook" },
  { icon: "📸", href: "https://instagram.com", label: "Instagram" },
  { icon: "▶️", href: "https://youtube.com", label: "YouTube" },
  { icon: "💬", href: "https://wa.me/919876543210", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div className="footer-grid">
              {/* Brand Column */}
              <div className="footer-brand footer-col">
                <a href="#home" className="footer-logo">
                  <div className="logo-icon">🏗</div>
                  <div>
                    <div className="logo-name">Aditya Builders</div>
                    <span className="logo-tag">Group · Est. 2005</span>
                  </div>
                </a>
                <p className="footer-tagline">
                  Bagalkot's most trusted home builders since 2005. Specialising
                  in anti-termite solutions, slab waterproofing, and complete
                  turnkey construction. Building dreams, one home at a time.
                </p>
                <div className="footer-social">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-col">
                <h4>Our Services</h4>
                <ul className="footer-links">
                  {SERVICE_LINKS.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="footer-col">
                <h4>Contact Us</h4>

                <div className="footer-contact-item">
                  <div className="fc-icon">📍</div>
                  <div className="fc-text">
                    #24, 3rd Cross, BTM Layout 2nd Stage,
                    <br />
                    Bagalkot – 560076, Karnataka
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="fc-icon">📞</div>
                  <div className="fc-text">
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="fc-icon">✉️</div>
                  <div className="fc-text">
                    <a href="mailto:info@adityabuilders.in">
                      info@adityabuilders.in
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="fc-icon">⏰</div>
                  <div className="fc-text">Mon – Sat: 9:00 AM – 7:00 PM</div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="btn-gold"
                  style={{
                    marginTop: "1.25rem",
                    fontSize: "0.78rem",
                    padding: "0.65rem 1.2rem",
                  }}
                >
                  <span>Get Free Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div className="footer-bottom-inner">
              <p>
                © 2025 <span>Aditya Builders Group</span>. All Rights Reserved.
                | Crafted with ❤️ in Bagalkot
              </p>
              <div className="footer-bottom-links">
                <a href="#home">Privacy Policy</a>
                <a href="#home">Terms of Service</a>
                <a href="#home">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Aditya%20Builders%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
