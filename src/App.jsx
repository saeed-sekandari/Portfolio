import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="intro">
        <p className="intro-label">Hello, I'm</p>

        <h1>Saeed Sekandari</h1>

        <p className="intro-title">
          Computer Science Student & Software Developer
        </p>

        <p className="intro-description">
          I am a Computer Science student at California State University,
          Northridge, passionate about software engineering, problem-solving,
          and building useful applications.
        </p>

        <div className="intro-buttons">
          <a href="#projects">View Projects</a>
          <a href="/Saeed-Resume-Internships.pdf" target="_blank">
            Resume
          </a>
        </div>
      </header>

      <main>
        <section id="skills">
          <h2>Technical Skills</h2>
          <p>Java, JavaScript, React, Spring Boot, SQL, HTML, and CSS.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <article>
            <h3>CinemaCart</h3>
            <p>Full-Stack Movie Ticket Booking Application</p>
          </article>

          <article>
            <h3>Project Placeholder</h3>
            <p>Another software engineering project will be added here.</p>
          </article>
        </section>

        <section id="education">
          <h2>Education</h2>
          <p>Education information will be added here.</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p>Experience information will be added here.</p>
        </section>

        <section id="interests">
          <h2>Interests</h2>
          <p>
            Watching soccer, playing chess, watching TV shows, building things,
            and working out.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 Saeed Sekandari</p>
      </footer>
    </div>
  );
}

export default App;