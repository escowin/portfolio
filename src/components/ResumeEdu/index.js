import portfolioData from "../../assets/data";
import "./index.css";

function Education() {
  const education = portfolioData.education;

  return (
    <>
      <h2 className="resume-subhead">Education</h2>
      <section className="resume-section" id="education">
        {education.map((edu) => (
          <article key={edu.id} className="row">
            <p className="year">{edu.year}</p>
            <div className="text-wrapper">
              <div className="school-details">
                <h3>{edu.school}</h3>
                <p className="details display-md display-print">
                  {edu.location}
                </p>
              </div>
              <div className="education-details">
                <p className="degree">
                  · {edu.level}
                  <span className="display-md display-print">
                    , {edu.major}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Education;
