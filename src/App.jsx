import "./App.css";
import "./styles/Global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio">
      {/* Main navigation */}
      <Navbar />

      {/* Introduction section */}
      <Hero />

      <main>
        {/* Main portfolio sections */}
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Interests />
        <Contact />
      </main>

      {/* Bottom of the page */}
      <Footer />
    </div>
  );
}

export default App;