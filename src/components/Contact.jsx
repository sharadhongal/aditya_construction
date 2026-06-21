// import { useState } from "react";
// import "../styles/Contact.css";

// const INITIAL_FORM = {
//   name: "",
//   phone: "",
//   email: "",
//   city: "",
//   service: "",
//   message: "",
// };

// const SOCIAL_LINKS = [
//   { icon: "bi-facebook", label: "Facebook", href: "https://facebook.com" },
//   { icon: "bi-instagram", label: "Instagram", href: "https://instagram.com" },
//   { icon: "bi-youtube", label: "YouTube", href: "https://youtube.com" },
//   {
//     icon: "bi-whatsapp",
//     label: "WhatsApp",
//     href: "https://wa.me/919513190176",
//   },
// ];

// /* Simple validators */
// const validate = (form) => {
//   const errs = {};
//   if (!form.name.trim()) errs.name = "Full name is required";
//   if (!form.phone.trim()) errs.phone = "Phone number is required";
//   else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
//     errs.phone = "Enter a valid 10-digit Indian mobile number";
//   if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//     errs.email = "Enter a valid email address";
//   if (!form.city.trim()) errs.city = "City is required";
//   if (!form.message.trim()) errs.message = "Please write a brief message";
//   return errs;
// };

// export default function Contact() {
//   const [form, setForm] = useState(INITIAL_FORM);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//     if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate(form);
//     if (Object.keys(errs).length) {
//       setErrors(errs);
//       return;
//     }
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 1500);
//   };

//   return (
//     <section className="contact-section section-padding" id="contact">
//       <div className="container" style={{ maxWidth: "1280px" }}>
//         {/* Header */}
//         <div className="row justify-content-center mb-5" data-aos="fade-up">
//           <div className="col-lg-7 text-center contact-header">
//             <span className="section-label">Get In Touch</span>
//             <h2 className="section-title">
//               Let's Build Something <span>Great Together</span>
//             </h2>
//             <div className="gold-divider mx-auto mt-3 mb-3" />
//             <p className="section-subtitle mx-auto">
//               Fill in the form and our team will reach out within 2 hours with a
//               free consultation and site visit offer.
//             </p>
//           </div>
//         </div>

//         <div className="row g-4 align-items-start">
//           {/* Left — Info */}
//           <div className="col-12 col-lg-5" data-aos="fade-right">
//             <div className="contact-info-card">
//               <h3>Contact Information</h3>
//               <p>
//                 We'd love to hear about your project. Reach out via any channel
//                 below.
//               </p>

//               <div className="contact-detail d-flex">
//                 <div className="contact-detail-icon flex-shrink-0">
//                   <i className="bi bi-geo-alt-fill" aria-hidden="true" />
//                 </div>
//                 <div>
//                   <span className="contact-detail-label">Our Office</span>
//                   <div className="contact-detail-value">
//                     #24, 3rd Cross, BTM Layout 2nd Stage,
//                     <br />
//                     Bagalkot – 560076, Karnataka, India
//                   </div>
//                 </div>
//               </div>

//               <div className="contact-detail d-flex">
//                 <div className="contact-detail-icon flex-shrink-0">
//                   <i className="bi bi-telephone-fill" aria-hidden="true" />
//                 </div>
//                 <div>
//                   <span className="contact-detail-label">Phone / WhatsApp</span>
//                   <div className="contact-detail-value">
//                     <a href="tel:+919513190176">+91 9019646774</a>
//                   </div>
//                 </div>
//               </div>

//               <div className="contact-detail d-flex">
//                 <div className="contact-detail-icon flex-shrink-0">
//                   <i className="bi bi-envelope-fill" aria-hidden="true" />
//                 </div>
//                 <div>
//                   <span className="contact-detail-label">Email Us</span>
//                   <div className="contact-detail-value">
//                     <a href="mailto:info@adityabuilders.in">
//                       info@adityabuilders.in
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="contact-detail d-flex">
//                 <div className="contact-detail-icon flex-shrink-0">
//                   <i className="bi bi-clock-fill" aria-hidden="true" />
//                 </div>
//                 <div>
//                   <span className="contact-detail-label">Working Hours</span>
//                   <div className="contact-detail-value">
//                     Mon – Sat: 9:00 AM – 7:00 PM
//                     <br />
//                     Sunday: By Appointment Only
//                   </div>
//                 </div>
//               </div>

//               <div className="contact-divider" />

//               <div className="contact-social-title">Follow Us</div>
//               <div className="social-icons d-flex">
//                 {SOCIAL_LINKS.map((s) => (
//                   <a
//                     key={s.label}
//                     href={s.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="social-icon"
//                     aria-label={s.label}
//                   >
//                     <i className={`bi ${s.icon}`} aria-hidden="true" />
//                   </a>
//                 ))}
//               </div>

//               {/* Map Placeholder */}
//               <div className="map-placeholder d-flex">
//                 <i
//                   className="bi bi-map-fill"
//                   style={{ fontSize: "2rem" }}
//                   aria-hidden="true"
//                 />
//                 <p>BTM Layout, Bagalkot</p>
//                 <a
//                   href="https://maps.google.com/?q=BTM+Layout+Bagalkot"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   View on Google Maps →
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right — Form */}
//           <div className="col-12 col-lg-7" data-aos="fade-left">
//             <div className="contact-form-card">
//               {submitted ? (
//                 <div className="form-success">
//                   <div className="success-icon">
//                     <i className="bi bi-check-lg" aria-hidden="true" />
//                   </div>
//                   <h4>Message Received!</h4>
//                   <p>
//                     Thank you for reaching out. Our team will contact you within
//                     <strong> 2 hours</strong> to schedule your free
//                     consultation.
//                   </p>
//                   <button
//                     className="btn-navy mt-4"
//                     onClick={() => {
//                       setSubmitted(false);
//                       setForm(INITIAL_FORM);
//                     }}
//                   >
//                     Send Another Message
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <h3>Request a Free Quote</h3>
//                   <p>
//                     Fill in your details and we'll get back to you promptly.
//                   </p>

//                   <form onSubmit={handleSubmit} noValidate>
//                     <div className="row form-row">
//                       <div className="col-12 col-sm-6 form-group">
//                         <label className="form-label">
//                           Full Name <span>*</span>
//                         </label>
//                         <input
//                           className={`form-input ${errors.name ? "error" : ""}`}
//                           name="name"
//                           value={form.name}
//                           onChange={handleChange}
//                           placeholder="e.g. Ramesh Kumar"
//                         />
//                         {errors.name && (
//                           <span className="form-error-msg">{errors.name}</span>
//                         )}
//                       </div>

//                       <div className="col-12 col-sm-6 form-group">
//                         <label className="form-label">
//                           Phone Number <span>*</span>
//                         </label>
//                         <input
//                           className={`form-input ${errors.phone ? "error" : ""}`}
//                           name="phone"
//                           value={form.phone}
//                           onChange={handleChange}
//                           placeholder="10-digit mobile"
//                           type="tel"
//                         />
//                         {errors.phone && (
//                           <span className="form-error-msg">{errors.phone}</span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="row form-row">
//                       <div className="col-12 col-sm-6 form-group">
//                         <label className="form-label">Email Address</label>
//                         <input
//                           className={`form-input ${errors.email ? "error" : ""}`}
//                           name="email"
//                           value={form.email}
//                           onChange={handleChange}
//                           placeholder="your@email.com"
//                           type="email"
//                         />
//                         {errors.email && (
//                           <span className="form-error-msg">{errors.email}</span>
//                         )}
//                       </div>

//                       <div className="col-12 col-sm-6 form-group">
//                         <label className="form-label">
//                           City <span>*</span>
//                         </label>
//                         <input
//                           className={`form-input ${errors.city ? "error" : ""}`}
//                           name="city"
//                           value={form.city}
//                           onChange={handleChange}
//                           placeholder="e.g. Bagalkot"
//                         />
//                         {errors.city && (
//                           <span className="form-error-msg">{errors.city}</span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">
//                         Service Interested In
//                       </label>
//                       <select
//                         className="form-select"
//                         name="service"
//                         value={form.service}
//                         onChange={handleChange}
//                       >
//                         <option value="">— Select a Service —</option>
//                         <option value="anti-termite">
//                           Anti-Termite Solutions
//                         </option>
//                         <option value="waterproofing">
//                           Waterproofing for Slabs
//                         </option>
//                         <option value="residential">
//                           Residential Construction
//                         </option>
//                         <option value="renovation">
//                           Renovation & Remodeling
//                         </option>
//                         <option value="interior">
//                           Interior Design & Finishing
//                         </option>
//                         <option value="turnkey">Turnkey Construction</option>
//                         <option value="architectural">
//                           Architectural Planning
//                         </option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">
//                         Your Message <span>*</span>
//                       </label>
//                       <textarea
//                         className={`form-textarea ${errors.message ? "error" : ""}`}
//                         name="message"
//                         value={form.message}
//                         onChange={handleChange}
//                         placeholder="Tell us about your project — size, location, budget, timeline..."
//                       />
//                       {errors.message && (
//                         <span className="form-error-msg">{errors.message}</span>
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       className="btn-gold form-submit-btn d-flex"
//                       disabled={loading}
//                     >
//                       {loading ? (
//                         <span>Sending...</span>
//                       ) : (
//                         <>
//                           <span>Submit Request</span>
//                           <i className="bi bi-send-fill" aria-hidden="true" />
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
  { icon: "bi-facebook", label: "Facebook", href: "https://facebook.com" },
  { icon: "bi-instagram", label: "Instagram", href: "https://instagram.com" },
  { icon: "bi-youtube", label: "YouTube", href: "https://youtube.com" },
  {
    icon: "bi-whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919513190176",
  },
];

// Google Apps Script Web App URL (deployed from the linked Google Sheet)
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby9mGDIj2SkN5QQ9zF7sG1GWZYcb0ViQkpSEkY9s9RT6_x2X2Pqt3f8xnc516tC9TjJ/exec";

// WhatsApp number to redirect to after a successful submission
const WHATSAPP_NUMBER = "919513190176";

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

// Builds a friendly WhatsApp pre-filled message from the form data
const buildWhatsappMessage = (form) => {
  const lines = [
    "Hello Aditya Builders, I just submitted an enquiry on your website.",
    "",
    `*Name:* ${form.name}`,
    `*Phone:* ${form.phone}`,
  ];
  if (form.email) lines.push(`*Email:* ${form.email}`);
  lines.push(`*City:* ${form.city}`);
  if (form.service) lines.push(`*Service:* ${form.service}`);
  lines.push(`*Message:* ${form.message}`);
  return lines.join("\n");
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setSubmitError("");

    try {
      // Apps Script web apps don't return proper CORS headers, so we use
      // "no-cors" mode. This means we can't read the response body/status,
      // but the request still reaches the script and the row still gets
      // appended to the sheet. We treat "fetch didn't throw" as success.
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });

      setSubmitted(true);

      // Redirect to WhatsApp with a pre-filled message after a short delay
      // so the success message is visible before the app/tab switch happens.
      const waMessage = encodeURIComponent(buildWhatsappMessage(form));
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 1200);
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitError(
        "Something went wrong while sending your details. Please try again or contact us directly on WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-lg-7 text-center contact-header">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's Build Something <span>Great Together</span>
            </h2>
            <div className="gold-divider mx-auto mt-3 mb-3" />
            <p className="section-subtitle mx-auto">
              Fill in the form and our team will reach out within 2 hours with a
              free consultation and site visit offer.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          {/* Left — Info */}
          <div className="col-12 col-lg-5" data-aos="fade-right">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>
                We'd love to hear about your project. Reach out via any channel
                below.
              </p>

              <div className="contact-detail d-flex">
                <div className="contact-detail-icon flex-shrink-0">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-detail-label">Our Office</span>
                  <div className="contact-detail-value">
                    #24, 3rd Cross, BTM Layout 2nd Stage,
                    <br />
                    Bagalkot – 560076, Karnataka, India
                  </div>
                </div>
              </div>

              <div className="contact-detail d-flex">
                <div className="contact-detail-icon flex-shrink-0">
                  <i className="bi bi-telephone-fill" aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-detail-label">Phone / WhatsApp</span>
                  <div className="contact-detail-value">
                    <a href="tel:+919513190176">+91 9513190176</a>
                  </div>
                </div>
              </div>

              <div className="contact-detail d-flex">
                <div className="contact-detail-icon flex-shrink-0">
                  <i className="bi bi-envelope-fill" aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-detail-label">Email Us</span>
                  <div className="contact-detail-value">
                    <a href="mailto:info@adityabuilders.in">
                      info@adityabuilders.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-detail d-flex">
                <div className="contact-detail-icon flex-shrink-0">
                  <i className="bi bi-clock-fill" aria-hidden="true" />
                </div>
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
              <div className="social-icons d-flex">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={s.label}
                  >
                    <i className={`bi ${s.icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder d-flex">
                <i
                  className="bi bi-map-fill"
                  style={{ fontSize: "2rem" }}
                  aria-hidden="true"
                />
                <p>BTM Layout, Bagalkot</p>
                <a
                  href="https://maps.google.com/?q=BTM+Layout+Bagalkot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="col-12 col-lg-7" data-aos="fade-left">
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <i className="bi bi-check-lg" aria-hidden="true" />
                  </div>
                  <h4>Message Received!</h4>
                  <p>
                    Thank you for reaching out. We're opening WhatsApp so you
                    can chat with us directly — if it doesn't open
                    automatically, tap the button below.
                  </p>
                  <a
                    className="btn-navy mt-4 d-inline-block"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      buildWhatsappMessage(form),
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Continue on WhatsApp
                  </a>
                  <div>
                    <button
                      className="btn-navy mt-3"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL_FORM);
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3>Request a Free Quote</h3>
                  <p>
                    Fill in your details and we'll get back to you promptly.
                  </p>

                  {submitError && (
                    <div className="form-error-banner" role="alert">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row form-row">
                      <div className="col-12 col-sm-6 form-group">
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

                      <div className="col-12 col-sm-6 form-group">
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

                    <div className="row form-row">
                      <div className="col-12 col-sm-6 form-group">
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

                      <div className="col-12 col-sm-6 form-group">
                        <label className="form-label">
                          City <span>*</span>
                        </label>
                        <input
                          className={`form-input ${errors.city ? "error" : ""}`}
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          placeholder="e.g. Bagalkot"
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
                      className="btn-gold form-submit-btn d-flex"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <i className="bi bi-send-fill" aria-hidden="true" />
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
