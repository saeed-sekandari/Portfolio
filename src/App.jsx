import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import profilePhoto from "./assets/profile-photo.png";

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

const roles = [
  "a CS student!",
  "a full-stack developer!",
  "a soccer fan!",
  "a chess player!",
  "a problem solver!",
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const restartAnimation = () => {
      setRoleIndex(0);
    };

    window.addEventListener("pageshow", restartAnimation);

    return () => {
      window.removeEventListener("pageshow", restartAnimation);
    };
  }, []);

  useEffect(() => {
    if (roleIndex === roles.length - 1) {
      return;
    }

    const timer = setTimeout(() => {
      setRoleIndex((currentIndex) => currentIndex + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [roleIndex]);

  return (
    <div className="portfolio">
      <Navbar />

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

          <a href="/Saeed-Resume-Internships.pdf" target="_blank">
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