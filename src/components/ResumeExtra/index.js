import "./index.css";

function Extracurricular() {
  const extracurriculars = [
    {
      year: 2023,
      role: "3rd place, mens masters aa-c single",
      event: "The heart of texas regatta",
      location: "Austin, TX",
    },
    {
      year: 2022,
      role: "ACE tutor",
      event: "Austin can academy",
      location: "Austin, TX",
    },
    // {
    //   year: 2021,
    //   role: "Creative action teaching artist",
    //   event: "Hart elementary",
    //   location: "Austin, TX",
    // },
    // {
    //   year: 2017,
    //   role: "Cucamonga peak, mt baldy, mt wilson, san bernardino peak, san jacinto, san gorgonio",
    //   event: "Socal six-pack of peaks challenge",
    //   location: "Tranverse ranges, CA",
    // },
    {
      year: 2012,
      role: "Finer things club founder",
      event: "California state university, fullerton",
      location: "Fullerton, CA",
    },
    {
      year: 2010,
      role: "World passport instructor",
      event: "The ministry of education of taiwan",
      location: "聖功女子高級中學",
    },
    {
      year: 2009,
      role: "Teach and learn in korea scholar",
      event:
        "The ministry of education of the republic of korea",
      location: "남상초등학교",
    },
  ];

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
