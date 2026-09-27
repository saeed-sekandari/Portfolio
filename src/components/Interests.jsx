import "../styles/Interests.css";

const interests = [
  {
    icon: "⚽",
    title: "Soccer",
    detail: "Real Madrid fan",
  },
  {
    icon: "♟",
    title: "Chess",
    detail: "Chess.com · 1100 rating",
  },
  {
    icon: "💻",
    title: "Building Projects",
    detail: "Learning by creating",
  },
  {
    icon: "🏋️",
    title: "Fitness",
    detail: "Gym · 5 days a week",
  },
  {
    icon: "📺",
    title: "TV Shows",
    detail: "Breaking Bad · Game of Thrones",
  },
];

function Interests() {
  return (
    <section id="interests">
      <h2>Interests</h2>

      {/* Show each interest as a simple card. */}
      <div className="interests-grid">
        {interests.map((interest) => (
          <article className="interest-card" key={interest.title}>
            <div className="interest-icon">{interest.icon}</div>

            <h3>{interest.title}</h3>

            <p>{interest.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Interests;