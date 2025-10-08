import portfolioData from "../../assets/data";
import "./index.css";

function Education() {
  const education = portfolioData.education;

  return (
    <>
      <h2 className="heading heading--secondary">Education</h2>
      <section className="grid" id="education">
        {education.map((edu) => (
          <article key={edu.id} className="row">
            <p className="year text text--muted">{edu.year}</p>
            <div className="text-wrapper">
              <div className="school-details">
                <h3 className="heading heading--tertiary">{edu.school}</h3>
                <p className="details text text--sm display-md display-print">
                  {edu.location}
                </p>
              </div>
              <div className="education-details">
                <p className="degree text">
                  · {edu.level}
                  <span className="text text--sm display-md display-print">
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