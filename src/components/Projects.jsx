import "../styles/Projects.css";

import { useState } from "react";
import "../App.css";

// CinemaCart screenshots
import cinemaCartHome from "../assets/cinemacart/cinemacart-homepage.png";
import cinemaCartNowShowing from "../assets/cinemacart/cinemacart-now-showing.png";
import cinemaCartDetails from "../assets/cinemacart/cinemacart-movie-details.png";
import cinemaCartShowtime from "../assets/cinemacart/cinemacart-showtime-selection.png";
import cinemaCartConfirmation from "../assets/cinemacart/cinemacart-booking-confirmation.png";

// Portfolio screenshot
import portfolioDesktop from "../assets/portfolio/portfolio-desktop.png";

function Projects() {
  const cinemaCartImages = [
    {
      src: cinemaCartHome,
      alt: "CinemaCart homepage",
    },
    {
      src: cinemaCartNowShowing,
      alt: "CinemaCart now showing page",
    },
    {
      src: cinemaCartDetails,
      alt: "CinemaCart movie details page",
    },
    {
      src: cinemaCartShowtime,
      alt: "CinemaCart showtime and seat selection",
    },
    {
      src: cinemaCartConfirmation,
      alt: "CinemaCart booking confirmation",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  // Move through the CinemaCart screenshots
  const showPreviousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? cinemaCartImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setSelectedImage((current) =>
      current === cinemaCartImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* CinemaCart project */}
      <article className="project-card cinema-cart-project-card">
        <div className="project-gallery">
          <div className="gallery-main">
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={showPreviousImage}
              aria-label="Show previous CinemaCart screenshot"
            >
              ←
            </button>

            <div className="gallery-frame">
              <img
                src={cinemaCartImages[selectedImage].src}
                alt={cinemaCartImages[selectedImage].alt}
              />
            </div>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={showNextImage}
              aria-label="Show next CinemaCart screenshot"
            >
              →
            </button>
          </div>

          <div className="gallery-thumbnails">
            {cinemaCartImages.map((image, index) => (
              <button
                type="button"
                className={`gallery-thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                key={image.src}
                onClick={() => setSelectedImage(index)}
                aria-label={`Show screenshot ${index + 1}`}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>

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

          <p className="project-description">
            CinemaCart is a full-stack movie ticket booking application
            developed by a four-person team for COMP 380 at CSUN. The
            application guides users through the complete movie-booking
            process, from browsing and searching for movies to viewing details
            and trailers, selecting showtimes and seats, managing a shopping
            cart, and confirming ticket bookings.
          </p>

          <p className="project-description">
            I primarily contributed to the backend development. I implemented
            the movie data structure and search functionality, including
            filtering by title and genre. I also developed the shopping cart
            and seat-selection logic, added input validation, and connected
            backend features with the frontend.
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
            I built this personal portfolio website to introduce myself, share
            my background and technical skills, and showcase the software
            projects I have worked on as I continue growing as a software
            engineer.
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
  );
}

export default Projects;