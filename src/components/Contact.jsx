import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      {/* A short invitation for visitors to connect. */}
      <p className="contact-description">
        I’m always open to connecting, discussing software engineering, and
        learning about new opportunities.
      </p>

      {/* These links take visitors to my professional profiles. */}
      <div className="contact-links">
        <a
          href="https://github.com/saeed-sekandari"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/saeed-sekandari"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;