import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import profilePhoto from "./assets/profile-photo.png";

import cinemaCartHomepage from "./assets/cinemacart/cinemacart-homepage.png";
import cinemaCartNowShowing from "./assets/cinemacart/cinemacart-now-showing.png";
import cinemaCartMovieDetails from "./assets/cinemacart/cinemacart-movie-details.png";
import cinemaCartShowtime from "./assets/cinemacart/cinemacart-showtime-selection.png";
import cinemaCartConfirmation from "./assets/cinemacart/cinemacart-booking-confirmation.png";

import portfolioDesktop from "./assets/portfolio/portfolio-desktop.png";

import { FaDatabase } from "react-icons/fa6";

import {
  SiApachemaven,
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

// These phrases appear in the introduction.
const roles = [
  "a CS student!",
  "a full-stack developer!",
  "a soccer fan!",
  "a chess player!",
  "a problem solver!",
];

// These images are used in the CinemaCart gallery.
const cinemaCartImages = [
  {
    src: cinemaCartHomepage,
    alt: "CinemaCart homepage",
    label: "Homepage",
  },
  {
    src: cinemaCartNowShowing,
    alt: "CinemaCart Now Showing page",
    label: "Now Showing",
  },
  {
    src: cinemaCartMovieDetails,
    alt: "CinemaCart movie details page",
    label: "Movie Details",
  },
  {
    src: cinemaCartShowtime,
    alt: "CinemaCart showtime selection page",
    label: "Showtime Selection",
  },
  {
    src: cinemaCartConfirmation,
    alt: "CinemaCart booking confirmation page",
    label: "Booking Confirmation",
  },
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedProjectImage, setSelectedProjectImage] = useState(0);

  // Restart the introduction when the page loads again.
  useEffect(() => {
    const restartAnimation = () => {
      setRoleIndex(0);
    };

    window.addEventListener("pageshow", restartAnimation);

    return () => {
      window.removeEventListener("pageshow", restartAnimation);
    };
  }, []);

  // Change the introduction phrase every three seconds.
  useEffect(() => {
    if (roleIndex === roles.length - 1) {
      return;
    }

    const timer = setTimeout(() => {
      setRoleIndex((currentIndex) => currentIndex + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [roleIndex]);

  // Show the previous CinemaCart image.
  const showPreviousImage = () => {
    setSelectedProjectImage((currentIndex) =>
      currentIndex === 0
        ? cinemaCartImages.length - 1
        : currentIndex - 1
    );
  };

  // Show the next CinemaCart image.
  const showNextImage = () => {
    setSelectedProjectImage(
      (currentIndex) => (currentIndex + 1) % cinemaCartImages.length
    );
  };

  return (
    <div className="portfolio">
      <Navbar />

      {/* Introduction */}
      <header className="intro" id="home">
        <h1 className="intro-line intro-reveal">
          Hi there, I’m Saeed 👋
        </h1>

        <p className="intro-title intro-line" key={roleIndex}>
          And I’m {roles[roleIndex]}
        </p>

        <p className="intro-description">
          I am a Computer Science student at California State University,
          Northridge, passionate about software engineering, problem-solving,
          and building useful applications.
        </p>

        <div className="intro-buttons">
          <a href="#projects">View Projects</a>

          <a href="/Saeed-Resume.pdf" target="_blank">
            Resume
          </a>
        </div>

        <img
          className="profile-photo"
          src={profilePhoto}
          alt="Professional portrait of Saeed Sekandari"
        />
      </header>

      <main>
        {/* About section */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            I was born and raised in Afghanistan. In August 2021, when the
            Taliban took over, it felt like the future I had imagined
            disappeared overnight. It was probably the worst day of my life,
            and I felt like I had lost everything I had been hoping and
            working toward, especially my future. One month later, I was
            fortunate to have the opportunity to move to the United States and
            begin a new chapter in my life.
          </p>

          <p>
            Starting over was challenging. I had to adjust to a new country, a
            new culture, and a new way of life. There were many moments when I
            felt uncertain, but I kept moving forward. Every challenge taught
            me to be more patient, independent, and determined. Today, I’m
            building a new life for myself while studying at CSUN. I’m grateful
            for the opportunities I have now, and I try to make the most of
            them every day.
          </p>

          <p>
            In the future, I want to build a meaningful career, create a stable
            life, and make my family proud. I know I still have a long way to
            go, but I’m proud of where I started and how far I’ve come.
          </p>
        </section>

        {/* Technical Skills */}
        <section id="skills">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Languages</h3>

              <div className="skill-items">
                <span>
                  <SiOpenjdk className="skill-logo java-logo" />
                  Java
                </span>

                <span>
                  <SiJavascript className="skill-logo javascript-logo" />
                  JavaScript
                </span>

                <span>
                  <FaDatabase className="skill-logo sql-logo" />
                  SQL
                </span>

                <span>
                  <SiHtml5 className="skill-logo html-logo" />
                  HTML
                </span>

                <span>
                  <SiCss className="skill-logo css-logo" />
                  CSS
                </span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Frameworks</h3>

              <div className="skill-items">
                <span>
                  <SiSpringboot className="skill-logo spring-logo" />
                  Spring Boot
                </span>

                <span>
                  <SiReact className="skill-logo react-logo" />
                  React
                </span>

                <span>
                  <SiNodedotjs className="skill-logo node-logo" />
                  Node.js
                </span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Databases</h3>

              <div className="skill-items">
                <span>
                  <SiMysql className="skill-logo mysql-logo" />
                  MySQL
                </span>

                <span>
                  <SiPostgresql className="skill-logo postgres-logo" />
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>

              <div className="skill-items">
                <span>
                  <SiGit className="skill-logo git-logo" />
                  Git
                </span>

                <span>
                  <SiGithub className="skill-logo github-logo" />
                  GitHub
                </span>

                <span>
                  <SiApachemaven className="skill-logo maven-logo" />
                  Maven
                </span>

                <span>
                  <SiFirebase className="skill-logo firebase-logo" />
                  Firebase
                </span>

                <span>
                  <VscVscode className="skill-logo vscode-logo" />
                  Visual Studio Code
                </span>

                <span>
                  <SiIntellijidea className="skill-logo idea-logo" />
                  IntelliJ IDEA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>

          <article className="project-card">
            {/* CinemaCart screenshot gallery */}
            <div className="project-gallery">
              <div className="main-project-image">
                <button
                  className="gallery-arrow gallery-arrow-left"
                  onClick={showPreviousImage}
                  aria-label="Show previous screenshot"
                >
                  ←
                </button>

                <img
                  src={cinemaCartImages[selectedProjectImage].src}
                  alt={cinemaCartImages[selectedProjectImage].alt}
                />

                <button
                  className="gallery-arrow gallery-arrow-right"
                  onClick={showNextImage}
                  aria-label="Show next screenshot"
                >
                  →
                </button>
              </div>

              <div className="project-thumbnails">
                {cinemaCartImages.map((image, index) => (
                  <button
                    key={image.src}
                    className={`project-thumbnail ${
                      selectedProjectImage === index
                        ? "active-thumbnail"
                        : ""
                    }`}
                    onClick={() => setSelectedProjectImage(index)}
                    aria-label={`Show ${image.label} screenshot`}
                  >
                    <img src={image.src} alt={image.alt} />
                  </button>
                ))}
              </div>

              <p className="image-label">
                {cinemaCartImages[selectedProjectImage].label}
              </p>
            </div>

            {/* CinemaCart information */}
            <div className="project-content">
              <h3>CinemaCart</h3>

              <div className="project-technologies">
                <span>Java</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>Maven</span>
              </div>

              <h4>Overview</h4>

              <p className="project-description">
                CinemaCart is a full-stack movie ticket booking application
                developed by a four-person team for COMP 380 at CSUN. The
                application guides users through the complete movie-booking
                process, from browsing and searching for movies to viewing
                details and trailers, selecting showtimes and seats, managing a
                shopping cart, and confirming ticket bookings.
              </p>

              <h4>My Contribution</h4>

              <p className="project-contribution">
                I primarily contributed to the backend development. I
                implemented the movie data structure and search functionality,
                including filtering by title and genre. I also developed the
                shopping cart and seat-selection logic, added input validation,
                and connected backend features with the frontend.
              </p>

              <a
                href="https://github.com/saeed-sekandari/CinemaCart"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View on GitHub →
              </a>
            </div>
          </article>
          
          {/* Portfolio Website project */}
          <article className="portfolio-project-card">
            <div className="device-showcase">
              <div className="desktop-monitor">
                <div className="monitor-screen">
                  <img
                    src={portfolioDesktop}
                    alt="Saeed Sekandari portfolio website"
                  />
                </div>
              </div>

              <div className="monitor-stand"></div>
              <div className="monitor-base"></div>
            </div>

            <div className="project-content">
              <h3>Portfolio Website</h3>

              <div className="project-technologies">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Vite</span>
                <span>React Icons</span>
              </div>

              <p className="project-description">
                I built this personal portfolio website to introduce myself, share my
                background and technical skills, and showcase the software projects I
                have worked on as I continue growing as a software engineer.
              </p>

              <a
                href="https://github.com/saeed-sekandari/Portfolio"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>
          <p>Education information will be added here.</p>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2>Experience</h2>
          <p>Experience information will be added here.</p>
        </section>

        {/* Interests */}
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