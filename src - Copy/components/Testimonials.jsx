import { useState, useEffect } from "react";
import "../styles/Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Aditya Builders exceeded every expectation. Their anti-termite treatment was thorough and the team explained every step. 2 years on and not a single issue. The slab waterproofing they did for our terrace is absolutely perfect — even the Bagalkot monsoons don't bother us!",
    name: "Ramesh & Priya Nair",
    location: "Whitefield, Bagalkot",
    rating: 5,
  },
  {
    id: 2,
    text: "We were nervous about a full home renovation but Aditya's team made it so seamless. Transparent billing, no hidden costs, and they completed 2 weeks ahead of schedule. The Vastu consultation was a bonus that my parents absolutely loved.",
    name: "Suresh Krishnamurthy",
    location: "Jayanagar, Bagalkot",
    rating: 5,
  },
  {
    id: 3,
    text: "The waterproofing solution they provided for our basement is outstanding. We had persistent seepage issues for 3 years that nobody could fix. Aditya's team identified the root cause and resolved it completely in just 4 days. Highly recommended!",
    name: "Deepa Venkatesh",
    location: "Koramangala, Bagalkot",
    rating: 5,
  },
  {
    id: 4,
    text: "Built our dream villa from scratch with Aditya Builders. From architectural planning to interior finishing — the quality is exceptional. Their engineers are on-site every single day. Worth every rupee. We couldn't be happier with our new home.",
    name: "Vikram & Ananya Shetty",
    location: "Sarjapur, Bagalkot",
    rating: 5,
  },
  {
    id: 5,
    text: "The post-construction support is what truly sets them apart. Six months after moving in, we had a minor plumbing issue. They sent a team the very next morning at no charge. That's the kind of after-sales service you rarely find in this industry.",
    name: "Mohammed Irfan",
    location: "Electronic City, Bagalkot",
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className="star-rating">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div
        className="container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div className="testimonials-header" data-aos="fade-up">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">
            What Our <span>Homeowners Say</span>
          </h2>
          <div
            className="gold-divider"
            style={{ margin: "1rem auto 1.25rem" }}
          />
          <p className="section-subtitle">
            Over 500 families have trusted us to build and protect their homes.
            Here are some of their stories.
          </p>
        </div>

        {/* Slider */}
        <div className="testimonials-slider" data-aos="fade-up">
          <div
            className="testimonials-track"
            style={{
              transform: `translateX(calc(-${current * (100 / 3 + 1.5)}%))`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-card ${i === current ? "active-center" : ""}`}
              >
                <div className="quote-mark">"</div>
                <Stars count={t.rating} />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-location">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} aria-label="Previous">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="slider-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button className="slider-btn" onClick={next} aria-label="Next">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
