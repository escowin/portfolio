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
        "Built a secure MVC application with authguarded Rest API, session management, and password encryption.",
        "Wrote ORM queries to protected the SQL database from direct manipulation.",
        "Used Handlebars helpers to conditionally render employee & client views.",
        // "Writing great copy for a financial planner.",
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
        "Carrying out administrative and grading tasks on behalf of the instructor.",
        "Assisting students struggling with coursework during office hours.",
        "Recording and uploading Zoom classes to Canvas.",
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
        "Set up sole proprietorship to sell art here in Austin. Site serves as my portfolio and business card.",
        "Improved site performance using React to build a SPA.",
        "Building a database to enable e-commerce functionality via Stripe transactions.",
      ],
      url: "https://escowinart.com",
    },
    {
      company: "Blue strawberry",
      role: "Graphic novelist",
      year: "2017",
      duration: "5 years",
      location: "Austin, TX",
      code: "react css adobe\u2009suite corel\u2009painter",
      description: [
        "Wrote and illustrated a dialogue-less hero's journey narrative.",
        "Used Corel Painter to draw the artwork, and Adobe Suite for file formatting.",
        "Built site with CSS and React.js, passing props through components to display data dynamically.",
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
      <section className="section" id="experience">
        {experience.map((exp, i) => (
          <article className="row" key={exp.company}>
            <div>
              <p className="year">{exp.year}</p>
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
                <p onClick={() => window.open(exp.url, "_blank")}>
                  {exp.company}
                </p>
                <p className="details">{exp.location}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Experience;
