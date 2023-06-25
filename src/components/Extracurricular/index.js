import portfolioData from "../../assets/data";
import "./index.css";

function Extracurricular() {
  const extracurriculars = portfolioData.extracurriculars;

  return (
    <>
      <h2 className="resume-subhead">Extracurricular activities</h2>
      <section className="resume-section" id="extracurricular">
        {extracurriculars.map((extra, i) => (
          <article key={i} className="row">
            <p className="year">{extra.year}</p>
            <div className="text-wrapper">
              <div className="left-text">
                <h3>{extra.event}</h3>
                <p className="details">{extra.location}</p>
              </div>

              <div className="right-text">
                <p>· {extra.role}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Extracurricular;
