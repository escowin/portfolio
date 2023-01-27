function Education() {
  const education = [
    {
      year: 2022,
      degree: "Coding bootcamp, Certificate of completion",
      major: "full-stack web development",
      school: "University of texas at austin",
      location: "Austin, TX",
      id: "uta",
    },
    {
      year: 2015,
      degree: "Undergraduate, Bachelor of fine arts",
      major: "illustration, screenwriting",
      school: "California state university, fullerton",
      location: "Fullerton, CA",
      id: "csuf",
    },
    {
      year: 2011,
      degree: "Undergraduate, Associate of arts",
      major: "fine arts",
      school: "Orange coast college",
      location: "Costa Mesa, CA",
      id: "occ",
    },
  ];

  return (
    <>
      <h2 className="resume-subhead">Education</h2>
      <section className="resume-section" id="education">
        {education.map((edu) => (
          <article key={edu.id} className="row">
            <p>{edu.year}</p>
            <div className="text-wrapper">
              <div className="left-text">
                <p>{edu.degree}</p>
                <p className="details">{edu.major}</p>
              </div>
              <div className="right-text">
                <p>{edu.school}</p>
                <p className="details">{edu.location}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Education;
