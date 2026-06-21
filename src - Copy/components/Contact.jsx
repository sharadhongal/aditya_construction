import { useState } from "react";
import "../styles/Contact.css";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  message: "",
};

const SOCIAL_LINKS = [
  { icon: "📘", label: "Facebook", href: "https://facebook.com" },
  { icon: "📸", label: "Instagram", href: "https://instagram.com" },
  { icon: "▶️", label: "YouTube", href: "https://youtube.com" },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/919876543210" },
];

/* Simple validators */
const validate = (form) => {
  const errs = {};
  if (!form.name.trim()) errs.name = "Full name is required";
  if (!form.phone.trim()) errs.phone = "Phone number is required";
  else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
    errs.phone = "Enter a valid 10-digit Indian mobile number";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = "Enter a valid email address";
  if (!form.city.trim()) errs.city = "City is required";
  if (!form.message.trim()) errs.message = "Please write a brief message";
  return errs;
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div
        className="container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div className="contact-header" data-aos="fade-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span>Great Together</span>
          </h2>
          <div
            className="gold-divider"
            style={{ margin: "1rem auto 1.25rem" }}
          />
          <p className="section-subtitle">
            Fill in the form and our team will reach out within 2 hours with a
            free consultation and site visit offer.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div data-aos="fade-right">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>
                We'd love to hear about your project. Reach out via any channel
                below.
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <span className="contact-detail-label">Our Office</span>
                  <div className="contact-detail-value">
                    #24, 3rd Cross, BTM Layout 2nd Stage,
                    <br />
                    Bengaluru – 560076, Karnataka, India
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <span className="contact-detail-label">Phone / WhatsApp</span>
                  <div className="contact-detail-value">
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">✉️</div>
                <div>
                  <span className="contact-detail-label">Email Us</span>
                  <div className="contact-detail-value">
                    <a href="mailto:info@adityabuilders.in">
                      info@adityabuilders.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">⏰</div>
                <div>
                  <span className="contact-detail-label">Working Hours</span>
                  <div className="contact-detail-value">
                    Mon – Sat: 9:00 AM – 7:00 PM
                    <br />
                    Sunday: By Appointment Only
                  </div>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-social-title">Follow Us</div>
              <div className="social-icons">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <span style={{ fontSize: "2rem" }}>🗺️</span>
                <p>BTM Layout, Bengaluru</p>
                <a
                  href="https://maps.google.com/?q=BTM+Layout+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div data-aos="fade-left">
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h4>Message Received!</h4>
                  <p>
                    Thank you for reaching out. Our team will contact you within
                    <strong> 2 hours</strong> to schedule your free
                    consultation.
                  </p>
                  <button
                    className="btn-navy"
                    style={{ marginTop: "1.5rem" }}
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3>Request a Free Quote</h3>
                  <p>
                    Fill in your details and we'll get back to you promptly.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Full Name <span>*</span>
                        </label>
                        <input
                          className={`form-input ${errors.name ? "error" : ""}`}
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                        />
                        {errors.name && (
                          <span className="form-error-msg">{errors.name}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Phone Number <span>*</span>
                        </label>
                        <input
                          className={`form-input ${errors.phone ? "error" : ""}`}
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile"
                          type="tel"
                        />
                        {errors.phone && (
                          <span className="form-error-msg">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                          className={`form-input ${errors.email ? "error" : ""}`}
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          type="email"
                        />
                        {errors.email && (
                          <span className="form-error-msg">{errors.email}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          City <span>*</span>
                        </label>
                        <input
                          className={`form-input ${errors.city ? "error" : ""}`}
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          placeholder="e.g. Bengaluru"
                        />
                        {errors.city && (
                          <span className="form-error-msg">{errors.city}</span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Service Interested In
                      </label>
                      <select
                        className="form-select"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">— Select a Service —</option>
                        <option value="anti-termite">
                          Anti-Termite Solutions
                        </option>
                        <option value="waterproofing">
                          Waterproofing for Slabs
                        </option>
                        <option value="residential">
                          Residential Construction
                        </option>
                        <option value="renovation">
                          Renovation & Remodeling
                        </option>
                        <option value="interior">
                          Interior Design & Finishing
                        </option>
                        <option value="turnkey">Turnkey Construction</option>
                        <option value="architectural">
                          Architectural Planning
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Your Message <span>*</span>
                      </label>
                      <textarea
                        className={`form-textarea ${errors.message ? "error" : ""}`}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project — size, location, budget, timeline..."
                      />
                      {errors.message && (
                        <span className="form-error-msg">{errors.message}</span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn-gold form-submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
