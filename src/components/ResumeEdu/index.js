import "./index.css";

function Education() {
  const education = [
    {
      year: 2022,
      level: "Professional education",
      major: "full-stack web development",
      school: "The university of texas at austin",
      location: "Austin, TX",
      id: "uta",
    },
    {
      year: 2015,
      level: "Undergraduate",
      major: "illustration",
      school: "California state university, fullerton",
      location: "Fullerton, CA",
      id: "csuf",
    },
    // {
    //   year: 2011,
    //   level: "Undergraduate",
    //   major: "fine arts",
    //   school: "Orange coast college",
    //   location: "Costa Mesa, CA",
    //   id: "occ",
    // },
  ];

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
