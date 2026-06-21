// import { useState, useEffect } from 'react';
// import '../styles/Navbar.css';

// const NAV_LINKS = [
//   { label: 'Home', href: '#home' },
//   { label: 'About Us', href: '#about' },
//   { label: 'Services', href: '#services' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Why Us', href: '#why-us' },
//   { label: 'Testimonials', href: '#testimonials' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : '';
//   }, [menuOpen]);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       <nav className={`navbar-ab ${scrolled ? 'scrolled' : ''}`}>
//         <div className="container">
//           {/* Logo */}
//           <a href="#home" className="navbar-logo" onClick={closeMenu}>
//             <div className="logo-icon">🏗</div>
//             <div className="logo-text">
//               <span className="logo-name">Aditya Builders</span>
//               <span className="logo-tag">Group · Est. 2005</span>
//             </div>
//           </a>

//           {/* Desktop Nav Links */}
//           <ul className="nav-links">
//             {NAV_LINKS.map((link) => (
//               <li key={link.href}>
//                 <a href={link.href}>{link.label}</a>
//               </li>
//             ))}
//             <li>
//               <a href="#contact" className="nav-cta">Get Free Quote</a>
//             </li>
//           </ul>

//           {/* Hamburger */}
//           <button
//             className={`hamburger ${menuOpen ? 'open' : ''}`}
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//         {NAV_LINKS.map((link) => (
//           <a key={link.href} href={link.href} onClick={closeMenu}>
//             {link.label}
//           </a>
//         ))}
//         <a href="#contact" className="nav-cta-mobile" onClick={closeMenu}>
//           Get Free Quote
//         </a>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpeg"; // 👈 add your logo path

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
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
        <div className="container">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="Aditya Builders Logo" className="logo-img" />

            <div className="logo-text">
              <span className="logo-name">Aditya Builders</span>
              <span className="logo-tag">Group · Est. 2005</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
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

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
