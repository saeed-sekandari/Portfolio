import "../styles/Education.css";

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        {/* Current university */}
        <article className="education-item">
          <div className="education-date">
            2025–Present
            <span>Expected Dec 2027</span>
          </div>

          <div className="education-marker">✦</div>

          <div className="education-details">
            <p className="education-school">
              California State University, Northridge
            </p>

            <h3>Bachelor of Science in Computer Science</h3>

            <p className="education-minor">Minor in Mathematics</p>

            <h4>Relevant Coursework</h4>

            <div className="coursework-list">
              <span>Object-Oriented Programming</span>
              <span>Data Structures &amp; Algorithms</span>
              <span>Database Systems</span>
              <span>Software Engineering</span>
              <span>Operating Systems</span>
            </div>
          </div>
        </article>

        {/* Previous college */}
        <article className="education-item">
          <div className="education-date">
            2023–2025
            <span>Completed</span>
          </div>

          <div className="education-marker">✦</div>

          <div className="education-details">
            <p className="education-school">
              Los Angeles Pierce College
            </p>

            <h3>Coursework in Computer Science and General Education</h3>

            <p className="education-minor">
              Transferred to California State University, Northridge
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;