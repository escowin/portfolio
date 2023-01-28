import './index.css';

function Extracurricular() {
  const extracurriculars = [
    {
      year: 2023,
      role: "Texas rowing club athelete",
      details: "Mens novice single, mens masters-b straight pair",
      event: "The heart of texas regatta",
      location: "Austin, TX",
      id: "trc",
    },
    {
      year: 2022,
      role: "ACE Tutor",
      details: "U.S. history tutor, art club head, weightlifting coach",
      event: "Austin can academy",
      location: "Austin, TX",
      id: "ace",
    },
    {
      year: 2021,
      role: "Creative action teaching artist",
      details: "Extracurricular art instructor",
      event: "Hart elementary",
      location: "Austin, TX",
      id: "ca",
    },
    {
      year: 2017,
      role: "Mountaineer",
      details:
        "Cucamonga peak, mt baldy, mt wilson, san bernardino peak, san jacinto, san gorgonio",
      event: "Socal six-pack of peaks",
      location: "Southern California",
      id: "socal",
    },
    {
      year: 2012,
      role: "Finer things club founder",
      details: "President, cultural executor",
      event: "California state university, fullerton",
      location: "Fullerton, CA",
      id: "finerthings",
    },
    {
      year: 2010,
      role: "World passport instructor",
      details: "English as a foreign language instructor",
      event: "The ministry of education of taiwan",
      location: "聖功女子高級中學",
      id: "wpp",
    },
    {
      year: 2009,
      role: "Teach and learn in korea scholar",
      details: "English as a second language instructor",
      event: "The ministry of education, science & technology, republic of korea",
      location: "남상초등학교",
      id: "talk",
    },
  ];

  return (
    <>
      <h2 className="resume-subhead">Extracurricular activities</h2>
      <section className="resume-section" id="extracurricular">
        {extracurriculars.map((extra) => (
          <article key={extra.id} className="row">
            <p className="year">{extra.year}</p>
            <div className="text-wrapper">
              <div className="left-text">
                <p>{extra.role}</p>
                <p className="details">{extra.details}</p>
              </div>
              <div className="right-text">
                <p>{extra.event}</p>
                <p className="details">{extra.location}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Extracurricular;
