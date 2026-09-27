import "../styles/Experience.css";

import {
  FaGears,
  FaPeopleGroup,
  FaShieldHalved,
} from "react-icons/fa6";

// These are the jobs shown in the Experience section.
const experiences = [
  {
    icon: <FaShieldHalved />,
    title: "Security Officer",
    company: "Secure Net Alliance",
    location: "Woodland Hills, CA",
    date: "June 2025 – August 2026",
    description:
      "Managed visitor access, maintained digital logs, monitored property, and responded to security situations.",
    skills: ["Access Management", "Communication", "Responsibility"],
  },
  {
    icon: <FaPeopleGroup />,
    title: "Client Service Monitor",
    company: "Hope of the Valley Rescue Mission",
    location: "Reseda, CA",
    date: "January 2024 – November 2024",
    description:
      "Supported clients in a shelter environment, communicated with individuals in crisis, and worked with a team to maintain a safe environment.",
    skills: ["Client Support", "Conflict Resolution", "Teamwork"],
  },
  {
    icon: <FaGears />,
    title: "Machine Assembler",
    company: "ResMed",
    location: "Chatsworth, CA",
    date: "March 2023 – September 2023",
    description:
      "Assembled medical devices while following technical procedures and maintaining quality standards.",
    skills: ["Attention to Detail", "Quality Control", "Consistency"],
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      {/* Display each job as its own card. */}
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            {/* Show a different icon for each type of job. */}
            <div className="experience-icon">{experience.icon}</div>

            <div className="experience-content">
              {/* Keep the job title and date together. */}
              <div className="experience-heading">
                <div>
                  <h3>{experience.title}</h3>

                  <p className="experience-company">
                    {experience.company} · {experience.location}
                  </p>
                </div>

                <span className="experience-date">{experience.date}</span>
              </div>

              {/* Briefly explain the main responsibilities. */}
              <p className="experience-description">
                {experience.description}
              </p>

              {/* Show the main skills used in this position. */}
              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;