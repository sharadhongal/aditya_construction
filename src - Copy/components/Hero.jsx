import { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";

const STATS = [
  { number: 500, suffix: "+", label: "Homes Built" },
  { number: 18, suffix: "+", label: "Years Experience" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
  { number: 50, suffix: "+", label: "Expert Team" },
];

/* Animated counter hook */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ number, suffix, label, animate }) {
  const count = useCounter(number, 1800, animate);
  return (
    <div className="stat-card">
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateStats(true);
      },
      { threshold: 0.4 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-shape-1" />
      <div className="hero-shape-2" />

      <div
        className="container position-relative"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          zIndex: 2,
        }}
      >
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            Trusted Builders · Bagalkot, Karnataka
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Aditya <span className="gold-word">Builders Group,</span>
            <br />
            Building With Trust,Quality,Vastu
          </h1>

          <p className="hero-subtitle">
            <strong>Trusted Home Builders Experts Since 2005</strong> —
            Specialising in Anti-Termite Solutions, Waterproofing, and Turnkey
            Construction across Bagalkot.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#projects" className="btn-gold">
              <span>Explore Our Work</span>
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
            <a href="#contact" className="btn-outline">
              <span>Contact Us Today</span>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" ref={statsRef}>
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} animate={animateStats} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
