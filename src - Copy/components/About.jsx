// import "../styles/About.css";

// const FEATURES = [
//   "ISO Certified Construction",
//   "Vastu-Compliant Designs",
//   "Transparent Cost Estimates",
//   "Licensed & Insured Team",
//   "Eco-Friendly Materials",
//   "5-Year Build Warranty",
// ];

// export default function About() {
//   return (
//     <section className="about-section section-padding" id="about">
//       <div
//         className="container"
//         style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
//       >
//         <div className="row align-items-center g-5">
//           {/* Image Column */}
//           <div className="col-lg-5" data-aos="fade-right">
//             <div className="about-image-wrapper">
//               <img
//                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
//                 alt="Aditya Builders construction team"
//                 className="about-img-main"
//                 loading="lazy"
//               />
//               <div className="about-accent-card">
//                 <div className="ac-number">18+</div>
//                 <div className="ac-label">Years of Excellence</div>
//               </div>
//               <div className="about-deco-square" />
//             </div>
//           </div>

//           {/* Content Column */}
//           <div className="col-lg-7" data-aos="fade-left">
//             <div className="about-content">
//               <span className="section-label">Who We Are</span>
//               <h2 className="section-title">
//                 Bagalkot's Most <span>Trusted</span> Home Builders
//               </h2>
//               <div className="gold-divider" />

//               <p>
//                 Since 2005, <strong>Aditya Builders Group</strong> has been
//                 transforming dreams into livable masterpieces across Bagalkot
//                 and Karnataka. We are more than just a construction company — we
//                 are your partners in creating a home that stands the test of
//                 time.
//               </p>
//               <p>
//                 Our speciality lies in <strong>anti-termite protection</strong>{" "}
//                 and advanced
//                 <strong>
//                   {" "}
//                   waterproofing solutions for slabs and foundations
//                 </strong>{" "}
//                 — the two most critical yet often overlooked aspects of
//                 home-building. We use globally certified products and proven
//                 techniques to ensure your home remains damage-free for decades.
//               </p>

//               {/* Feature Checklist */}
//               <div className="about-features">
//                 {FEATURES.map((feat) => (
//                   <div key={feat} className="about-feat-item">
//                     <div className="feat-icon">✓</div>
//                     <span>{feat}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Founder Quote */}
//               <div className="founder-note">
//                 <p>
//                   "Our commitment is simple — every home we build should be as
//                   strong 20 years from now as the day we hand over the keys.
//                   That's the Aditya promise."
//                 </p>
//                 <div className="founder-info">
//                   <div className="founder-avatar">A</div>
//                   <div className="founder-details">
//                     <strong>Aditya Kumar</strong>
//                     <span>Founder & Chief Engineer, Aditya Builders Group</span>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: "2rem" }}>
//                 <a href="#contact" className="btn-gold">
//                   <span>Get a Free Consultation</span>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import "../styles/About.css";

const FEATURES = [
  "ISO Certified Construction",
  "Vastu-Compliant Designs",
  "Transparent Cost Estimates",
  "Licensed & Insured Team",
  "Eco-Friendly Materials",
  "5-Year Build Warranty",
];

export default function About() {
  return (
    <section className="about-section py-5 overflow-hidden" id="about">
      <div className="container" style={{ maxWidth: "1280px" }}>
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Aditya Builders construction team"
                className="about-img-main w-100"
              />

              <div className="about-accent-card shadow">
                <div className="ac-number">18+</div>
                <div className="ac-label">Years of Excellence</div>
              </div>

              <div className="about-deco-square"></div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7" data-aos="fade-left">
            <span className="section-label">Who We Are</span>

            <h2 className="section-title">
              Bagalkot's Most <span>Trusted</span> Home Builders
            </h2>

            <div className="gold-divider"></div>

            <p className="mb-4">
              Since 2005, <strong>Aditya Builders Group</strong> has been
              transforming dreams into livable masterpieces across Bagalkot and
              Karnataka.
            </p>

            <p className="mb-4">
              Our speciality lies in
              <strong> anti-termite protection </strong>
              and advanced
              <strong>
                {" "}
                waterproofing solutions for slabs and foundations
              </strong>
              .
            </p>

            {/* Features */}
            <div className="row gy-3 mb-4">
              {FEATURES.map((feat) => (
                <div key={feat} className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="feat-icon">✓</div>

                    <span className="fw-medium">{feat}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Note */}

            <div className="founder-note shadow-sm">
              <p className="fst-italic mb-3">
                "Our commitment is simple — every home we build should be as
                strong 20 years from now as the day we hand over the keys."
              </p>

              <div className="d-flex align-items-center gap-3">
                <div className="founder-avatar">A</div>

                <div>
                  <strong className="d-block">Aditya Kumar</strong>

                  <small>Founder & Chief Engineer, Aditya Builders Group</small>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a href="#contact" className="btn btn-orange">
                Get a Free Consultation
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
