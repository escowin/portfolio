import "./index.css";

function Experience() {
  const experience = [
    {
      company: "2U | edX boot camps",
      code: "fullstack web development",
      duration: "present",
      location: "Austin, TX",
      url: "https://2u.com/",
      roles: [
        {
          title: "Instructional specialist",
          year: "2022",
          description: [
            "Completed administrative and grading tasks on behalf of the instructor at Rice University.",
            "Assisted students with coursework during office hours.",
            "Recorded and uploaded Zoom classes to LMS.",
          ],
        },
        {
          title: "Learning assistant",
          year: "2023",
          description: [""],
        },
        {
          title: "Central grader",
          year: "2023",
          description: [""],
        },
      ],
    },
    {
      company: "Vvh financial",
      code: "javascript node express handlebars bcrypt sequelize mysql css",
      location: "Dallas, TX",
      duration: "3 months",
      url: "https://github.com/escowin/vvh-financial",
      roles: [
        {
          title: "Site developer",
          year: "2022",
          description: [
            "Constructed a secure MVC app with protected REST API, session management, and encryption.",
            "Created ORM queries to safeguard SQL database from direct manipulation.",
            "Implemented Handlebars helpers to display employee & client views conditionally.",
          ],
        },
      ],
    },
    {
      company: "Escowin art",
      duration: "present",
      location: "Austin, TX",
      url: "https://escowinart.com",
      code: "react css adobe\u2009cc corel\u2009painter",
      roles: [
        {
          title: "Artist",
          year: "2012",
          description: [""],
        },
        {
          title: "Site developer",
          year: "2020",
          description: [
            "Established a sole proprietorship to sell art in Austin. The website serves as my portfolio and business card.",
            "Enhanced website performance by using React.js to develop a SPA.",
            "Constructed a database to enable e-commerce functionality through Stripe transactions.",
          ],
        },
      ],
    },
    {
      company: "Blue strawberry",
      duration: "5 years",
      location: "Austin, TX",
      url: "https://escowin.github.io/bluestrawberry/",
      code: "react css adobe\u2009suite corel\u2009painter",
      roles: [
        {
          title: "React developer, graphic novelist",
          year: "2017",
          description: [
            "Wrote and illustrated a dialogue-less hero's journey narrative.",
            "Drew the artwork with Corel Painter and formatted the files with Adobe Suite.",
            "Constructed site with React.js to facilitate data scaling and performance optimization.",
          ],
        },
      ],
    },
  ];

  console.log(
    experience.map((exp, i) => {
      return exp.roles.map((role, j) => {
        console.log(role.year);
      });
    })
  );

  return (
    <>
      <h2 className="resume-subhead">Professional experience</h2>
      <section className="resume-section" id="experience">
        {experience.map((exp, i) => (
          <>
            <article key={i}>
              {/* year & position box */}
              <div>
                <p></p>
                <p className="exp"></p>
              </div>
              <div className="text-wrapper">
                <div className="left-text">
                  {/* <p className="positions"></p>
                  <p className="details"></p>
                  <ul className="role details">
                    {exp.description.map((desc, i) => (
                      <li key={`${exp.company}${i}`}>{desc}</li>
                    ))}
                  </ul> */}
                </div>
                <div className="right-text">
                  <p
                    className="link"
                    onClick={() => window.open("/", "_blank")}
                  >
                    {exp.company}
                  </p>
                  <p className="details display-lg display-print">
                    {exp.location}
                  </p>
                </div>
              </div>
            </article>
          </>
        ))}
      </section>
    </>
  );
}

export default Experience;
