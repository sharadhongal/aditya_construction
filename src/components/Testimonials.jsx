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
  <div className="star-rating d-flex gap-1 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <i key={i} className="bi bi-star-fill text-gold" />
    ))}
  </div>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total, paused]);

  const prev = () => {
    setPaused(true);
    setCurrent((c) => (c - 1 + total) % total);
  };
  const next = () => {
    setPaused(true);
    setCurrent((c) => (c + 1) % total);
  };
  const goTo = (i) => {
    setPaused(true);
    setCurrent(i);
  };

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div
          className="text-center mb-5 position-relative z-1"
          data-aos="fade-up"
        >
          <span className="section-label">
            <i className="bi bi-chat-heart-fill me-1" />
            Client Stories
          </span>
          <h2 className="section-title text-white mt-2">
            What Our <span>Homeowners Say</span>
          </h2>
          <div className="gold-divider mx-auto my-3" />
          <p
            className="section-subtitle mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Over 500 families have trusted us to build and protect their homes.
            Here are some of their stories.
          </p>
        </div>

        {/* Slider */}
        <div
          className="testimonials-slider position-relative z-1"
          data-aos="fade-up"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
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
                {/* Quote + Stars */}
                <div className="quote-mark">"</div>
                <Stars count={t.rating} />

                <p className="testimonial-text">{t.text}</p>

                {/* Author */}
                <div className="testimonial-author pt-3 mt-auto">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="author-name d-flex align-items-center gap-1">
                      {t.name}
                      <i
                        className="bi bi-patch-check-fill text-gold"
                        style={{ fontSize: "0.8rem" }}
                      />
                    </div>
                    <div className="author-location">
                      <i className="bi bi-geo-alt-fill" />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          <button className="slider-btn" onClick={prev} aria-label="Previous">
            <i className="bi bi-chevron-left" />
          </button>

          <div className="slider-dots d-flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button className="slider-btn" onClick={next} aria-label="Next">
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
