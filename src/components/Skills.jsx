import "../styles/Skills.css";

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

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      {/* Main skill categories */}
      <div className="skills-grid">
        {/* Programming languages */}
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

        {/* Frameworks I have studied and used */}
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

        {/* Database technologies */}
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

        {/* Development tools */}
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
  );
}

export default Skills;