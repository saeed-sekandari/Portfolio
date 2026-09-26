import "../styles/Hero.css";

import { useEffect, useState } from "react";
import profilePhoto from "../assets/profile-photo.png";

const roles = [
  "a CS student!",
  "a full-stack developer!",
  "a soccer fan!",
  "a chess player!",
  "a problem solver!",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Start the introduction animation from the beginning.
  useEffect(() => {
    const restartAnimation = () => {
      setRoleIndex(0);
    };

    window.addEventListener("pageshow", restartAnimation);

    return () => {
      window.removeEventListener("pageshow", restartAnimation);
    };
  }, []);

  // Show each introduction role for three seconds.
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
    <header className="intro" id="home">
      {/* Main introduction */}
      <h1 className="intro-line intro-reveal">
        Hi there, I’m Saeed 👋
      </h1>

      {/* The text changes every three seconds. */}
      <p className="intro-title intro-line" key={roleIndex}>
        And I’m {roles[roleIndex]}
      </p>

      <p className="intro-description">
        I am a Computer Science student at California State University,
        Northridge, passionate about software engineering, problem-solving,
        and building useful applications.
      </p>

      {/* Main links for visitors */}
      <div className="intro-buttons">
        <a href="#projects">View Projects</a>

        <a
          href="/Saeed-Resume-Internships.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Profile image */}
      <img
        className="profile-photo"
        src={profilePhoto}
        alt="Professional portrait of Saeed Sekandari"
      />
    </header>
  );
}

export default Hero;