import "../styles/Footer.css";
import logo from "../assets/logo.jpeg";
import handralsLogo from "../assets/handrals.jpeg";

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
  { icon: "bi-facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "bi-instagram", href: "https://instagram.com", label: "Instagram" },
  { icon: "bi-youtube", href: "https://youtube.com", label: "YouTube" },
  {
    icon: "bi-whatsapp",
    href: "https://wa.me/919513190176",
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container" style={{ maxWidth: "1280px" }}>
            <div className="row g-4 footer-grid">
              {/* Brand Column */}
              <div className="col-12 col-md-6 col-lg-5 footer-col footer-brand">
                <a href="#home" className="footer-logo d-flex">
                  <div className="logo-icon">
                    <img src={logo} alt="Aditya Builders Group Logo" />
                  </div>
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
                <div className="footer-social d-flex">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      <i className={`bi ${s.icon}`} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-6 col-md-3 col-lg-2 footer-col">
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
              <div className="col-6 col-md-3 col-lg-2 footer-col">
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
              <div className="col-12 col-md-12 col-lg-3 footer-col">
                <h4>Contact Us</h4>

                <div className="footer-contact-item d-flex">
                  <div className="fc-icon flex-shrink-0">
                    <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  </div>
                  <div className="fc-text">
                    #24, 3rd Cross, BTM Layout 2nd Stage,
                    <br />
                    Bagalkot – 560076, Karnataka
                  </div>
                </div>

                <div className="footer-contact-item d-flex">
                  <div className="fc-icon flex-shrink-0">
                    <i className="bi bi-telephone-fill" aria-hidden="true" />
                  </div>
                  <div className="fc-text">
                    <a href="tel:+919513190176">+91 9513190176</a>
                  </div>
                </div>

                <div className="footer-contact-item d-flex">
                  <div className="fc-icon flex-shrink-0">
                    <i className="bi bi-envelope-fill" aria-hidden="true" />
                  </div>
                  <div className="fc-text">
                    <a href="mailto:info@adityabuilders.in">
                      info@adityabuilders.in
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item d-flex">
                  <div className="fc-icon flex-shrink-0">
                    <i className="bi bi-clock-fill" aria-hidden="true" />
                  </div>
                  <div className="fc-text">Mon – Sat: 9:00 AM – 7:00 PM</div>
                </div>

                {/* CTA */}
                <a href="#contact" className="btn-gold footer-cta-btn">
                  <span>Get Free Quote</span>
                </a>
              </div>
              <div className="footer-poweredby">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="powered-by-link"
                >
                  <span className="powered-by-text">Powered by</span>
                  <span className="powered-by-logo-wrap">
                    <img
                      src={handralsLogo}
                      alt="Handrals - AI Powered Digital Solutions"
                      className="powered-by-logo"
                    />
                  </span>
                  <span className="powered-by-name">Handrals</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container" style={{ maxWidth: "1280px" }}>
            <div className="footer-bottom-inner d-flex flex-wrap">
              <p>
                © 2025 <span>Aditya Builders Group</span>. All Rights Reserved.
                | Crafted with{" "}
                <i className="bi bi-heart-fill" aria-hidden="true" /> in
                Bagalkot
              </p>
              <div className="footer-bottom-links d-flex">
                <a href="#home">Privacy Policy</a>
                <a href="#home">Terms of Service</a>
                <a href="#home">Sitemap</a>
              </div>
            </div>

            {/* Powered by Handrals */}
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919513190176?text=Hi%20Aditya%20Builders%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true" />
      </a>
    </>
  );
}
