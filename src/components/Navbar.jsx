import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpeg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar-ab ${scrolled ? "scrolled" : ""}`}>
        {/* Bootstrap container centres content & adds horizontal padding */}
        <div className="container" style={{ maxWidth: "1280px" }}>
          {/* Bootstrap d-flex + align-items-center replaces the old flex container */}
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* ── Logo ── */}
            <a href="#home" className="navbar-logo" onClick={closeMenu}>
              <img src={logo} alt="Aditya Builders Logo" className="logo-img" />
              <div className="logo-text">
                <span className="logo-name">Aditya Builders</span>
                <span className="logo-tag">Group · Est. 2005</span>
              </div>
            </a>

            {/* ── Desktop Nav Links (hidden below lg) ── */}
            <ul className="nav-links d-none d-lg-flex mb-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className="nav-cta">
                  Get Free Quote
                </a>
              </li>
            </ul>

            {/* ── Hamburger (visible below lg) ── */}
            <button
              className={`hamburger d-lg-none ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-screen Menu ── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta-mobile" onClick={closeMenu}>
          Get Free Quote
        </a>
      </div>
    </>
  );
}
