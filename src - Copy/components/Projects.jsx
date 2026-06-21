import { useState } from "react";
import "../styles/Projects.css";

const FILTERS = ["All", "Villas", "Apartments", "Commercial", "Renovation"];

const PROJECTS = [
  {
    id: 1,
    name: "Greenwood Villa",
    location: "Whitefield, Bagalkot",
    category: "Villas",
    badge: "New",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  },
  {
    id: 2,
    name: "Skyline Residences",
    location: "Sarjapur Road, Bagalkot",
    category: "Apartments",
    badge: "Sold Out",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
  },
  {
    id: 3,
    name: "Heritage Manor",
    location: "Jayanagar, Bagalkot",
    category: "Villas",
    badge: "Featured",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80",
  },
  {
    id: 4,
    name: "Corporate Park One",
    location: "Electronic City, Bagalkot",
    category: "Commercial",
    badge: "Completed",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
  },
  {
    id: 5,
    name: "Classic Home Revival",
    location: "Koramangala, Bagalkot",
    category: "Renovation",
    badge: "Before/After",
    img: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=700&q=80",
  },
  {
    id: 6,
    name: "Sunrise Heights",
    location: "Hennur Road, Bagalkot",
    category: "Apartments",
    badge: "Ongoing",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=700&q=80",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section section-padding" id="projects">
      <div
        className="container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div className="projects-header" data-aos="fade-up">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">
            Projects That <span>Speak for Themselves</span>
          </h2>
          <div
            className="gold-divider"
            style={{ margin: "1rem auto 1.25rem" }}
          />
          <p className="section-subtitle">
            Every project in our portfolio is a story of a family's dream coming
            true. Browse our completed work across Bagalkot.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" data-aos="fade-up">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 80}`}
            >
              <span className="project-badge">{project.badge}</span>
              <img src={project.img} alt={project.name} loading="lazy" />
              <div className="project-overlay">
                <span className="project-category">{project.category}</span>
                <div className="project-name">{project.name}</div>
                <div className="project-location">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
