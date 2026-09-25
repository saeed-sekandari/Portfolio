import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="site-nav">
      <a className="site-brand" href="#home">
        Saeed Sekandari
      </a>

      <div className="site-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/saeed-sekandari"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/saeed-sekandari"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default Navbar;