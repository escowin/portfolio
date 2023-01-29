import './index.css';

function Experience() {
  const experience = [
    {
      company: "Vvh financial",
      role: "Site developer",
      year: "2022",
      duration: "3 months",
      location: "Dallas, TX",
      code: "javascript node express handlebars bcrypt sequelize mysql css",
      description: [
        "Constructed a secure MVC app with protected REST API, session management, and encryption.",
        "Created ORM queries to safeguard SQL database from direct manipulation.",
        "Implemented Handlebars helpers to display employee & client views conditionally.",
      ],
      url: "https://github.com/escowin/vvh-financial",
    },
    {
      company: "2U | edX boot camps",
      role: "Instructional specialist",
      year: "2022",
      duration: "present",
      location: "Houston, TX",
      code: "Rice University Coding Boot Camp Teacher's Assistant",
      description: [
        "Completed administrative and grading tasks on behalf of the instructor.",
        "Assisted students with coursework during office hours.",
        "Recorded and uploaded Zoom classes to LMS.",
      ],
      url: "https://2u.com/",
    },
    {
      company: "Escowin art",
      role: "Site developer",
      year: "2018",
      duration: "present",
      location: "Austin, TX",
      code: "react css adobe\u2009cc corel\u2009painter",
      description: [
        "Established a sole proprietorship to sell art in Austin. The website serves as my portfolio and business card.",
        "Enhanced website performance by using React.js to develop a SPA.",
        "Constructed a database to enable e-commerce functionality through Stripe transactions.",
      ],
      url: "https://escowinart.com",
    },
    {
      company: "Blue strawberry",
      role: "React developer & graphic novelist",
      year: "2017",
      duration: "5 years",
      location: "Austin, TX",
      code: "react css adobe\u2009suite corel\u2009painter",
      description: [
        "Wrote and illustrated a dialogue-less hero's journey narrative.",
        "Drew the artwork using Corel Painter and formatted the files with Adobe Suite.",
        "Constructed site with React.js to facilitate data scaling and performance optimization.",
      ],
      url: "https://escowin.github.io/bluestrawberry/",
    },
    // {
    //     company: "",
    //     role: "",
    //     year: "",
    //     duration: "",
    //     location: "",
    //     code: "",
    //     description: [
    //         "",
    //         "",
    //     ]
    // },
  ];

  return (
    <>
      <h2 className="resume-subhead">Professional experience</h2>
      <section className="resume-section" id="experience">
        {experience.map((exp, i) => (
          <article className="row" key={exp.company}>
            <div>
              <p>{exp.year}</p>
              <p className="exp">{exp.duration}</p>
            </div>
            <div className="text-wrapper">
              <div className="left-text">
                <p className="position">{exp.role}</p>
                <p className="details">{exp.code}</p>
                <ul className="role details">
                  {exp.description.map((desc, i) => (
                    <li key={`${exp.company}${i}`}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="right-text">
                <p className="link" onClick={() => window.open(exp.url, "_blank")}>
                  {exp.company}
                </p>
                <p className="details display-lg display-print">{exp.location}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Experience;
