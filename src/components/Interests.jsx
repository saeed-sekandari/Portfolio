import "../styles/Interests.css";

// These interests show a little more about me.
const interests = [
  {
    icon: "⚽",
    title: "Soccer",
    description: "I enjoy watching soccer and following different teams.",
  },
  {
    icon: "♟",
    title: "Chess",
    description:
      "I like chess because it helps me think ahead and solve problems.",
  },
  {
    icon: "💻",
    title: "Building Projects",
    description:
      "I enjoy creating applications and learning new technologies.",
  },
  {
    icon: "🏋️",
    title: "Fitness",
    description:
      "Working out helps me stay healthy, focused, and disciplined.",
  },
  {
    icon: "📺",
    title: "TV Shows",
    description: "I enjoy watching TV shows during my free time.",
  },
];

function Interests() {
  return (
    <section id="interests">
      <h2>Interests</h2>

      {/* Display each interest as a small card. */}
      <div className="interests-grid">
        {interests.map((interest) => (
          <article className="interest-card" key={interest.title}>
            {/* Each card has a simple visual icon. */}
            <div className="interest-icon">{interest.icon}</div>

            <h3>{interest.title}</h3>

            <p>{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Interests;