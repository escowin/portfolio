import portfolioData from "../../assets/data";
import "./index.css";

function Experience() {
  const experience = portfolioData.experience;

  function duration(startYear, endYear) {
    let current = new Date().getFullYear();
    const present = endYear - startYear;

    if (endYear === 0) {
      // duration value determines which template literal is returned
      const duration = current - startYear;
      return duration > 1 ? `${duration} years` : `1 year`;
    }

    return present <= 1 ? `1 year` : `${present} years`;
  }

  return (
    <>
      <h2 className="heading heading--secondary">Professional experience</h2>
      <section className="grid" id="experience">
        {experience.map((exp, i) => (
          // company row
          <article key={i} className="company-wrapper">
            <div className="company-details">
              <h3 className="company heading heading--tertiary">
                <span
                  className="link link--hover"
                  onClick={() => window.open(exp.url, "_blank")}
                >
                  {exp.company}
                </span>
                <code className="text text--sm">{exp.code}</code>
              </h3>

              <p className="details location text text--sm display-md display-print">
                {exp.location}
              </p>
              <p className="duration text text--muted">
                {duration(exp.roles[0].year, exp.endYear)}
              </p>
            </div>

            {/* positions row */}
            <div className="positions">
              {/* spread operator allows .reverse() to work */}
              {[...exp.roles].reverse().map((role, j) => (
                <div key={j} className="position">
                  <p className="year text text--muted">{role.year}</p>
                  <p className="title text">· {role.title}</p>
                  <ul className="description">
                    {role.description.map((sentence, k) => (
                      <li key={k} className="text text--sm">{sentence}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Experience;
