import './index.css';

function Education() {
  const education = [
    {
      year: 2022,
      level: "Professional education",
      degree: "Certificate of completion",
      major: "full-stack web development",
      school: "The university of texas at austin",
      location: "Austin, TX",
      id: "uta",
    },
    {
      year: 2015,
      level: "Undergraduate",
      degree: "Bachelor of fine arts",
      major: "illustration, screenwriting",
      school: "California state university, fullerton",
      location: "Fullerton, CA",
      id: "csuf",
    },
    {
      year: 2011,
      level: "Undergraduate",
      degree: "Associate of arts",
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
                <p className='degree'>{edu.level}<span className="display-md display-print">, {edu.degree}</span></p>
                <p className="details display-md display-print">{edu.major}</p>
              </div>
              <div className="right-text">
                <p>{edu.school}</p>
                <p className="details display-md display-print">{edu.location}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Education;
