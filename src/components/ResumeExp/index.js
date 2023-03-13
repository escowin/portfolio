import "./index.css";

function Experience() {
  const experience = [
    {
      company: "2U | edX boot camps",
      location: "Austin, TX",
      url: "https://2u.com/",
      endYear: 0,
      roles: [
        {
          title: "teacher's assistant",
          year: 2022,
          code: "fullstack web development",
          description: [
            "Assisted students with coursework during office hours.",
            "Recorded and uploaded Zoom classes to LMS.",
          ],
        },
        {
          title: "central grader",
          year: 2023,
          code: "fullstack web development",
          description: ["stuff"],
        },
        {
          title: "learning assistant",
          year: 2023,
          code: "fullstack web development",
          description: ["other stuff"],
        },
      ],
    },
    {
      company: "Vvh financial",
      location: "Dallas, TX",
      url: "https://github.com/escowin/vvh-financial",
      endYear: 2022,
      roles: [
        {
          title: "site developer",
          code: "node fullstack",
          year: 2022,
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
      location: "Austin, TX",
      url: "https://escowinart.com",
      endYear: 0,
      roles: [
        // {
        //   title: "artist",
        //   year: 2020,
        //   description: [
        //     "Established sole proprietorship to sell fine art in Austin.",
        //   ],
        // },
        {
          title: "graphic novelist",
          year: 2020,
          code: "adobe\u2009cc corel\u2009painter",
          description: [
            "Authored & published psychological noir 'blue strawberry'.",
          ],
        },
        {
          title: "site developer",
          year: 2021,
          code: "mern",
          description: [
            "Built website with React.js to serve as a business card",
            "Incorporated MERN stack to facilitate e-commerce",
          ],
        },
      ],
    },
  ];

  function duration(startYear, endYear) {
    let current = new Date().getFullYear();
    const present = endYear - startYear;

    if (endYear === 0) {
      const duration = current - startYear;
      if (duration > 1) {
        return `${duration} years`;
      }
      return `1 year`;
    }

    if (present <= 1) {
      return `1 year`;
    }

    return `${present} years`;
  }

  return (
    <>
      <h2 className="resume-subhead">Professional experience</h2>
      <section className="resume-section" id="experience">
        {experience.map((exp, i) => (
          // company row
          <article key={i} className="company-wrapper">
            <div className="company-details">
              <h3
                className="link company"
                onClick={() => window.open(exp.url, "_blank")}
              >
                {exp.company}
              </h3>
              
              <p className="details location display-md display-print">
                {exp.location}
              </p>
              <p className="duration">
                {duration(exp.roles[exp.roles.length - 1].year, exp.endYear)}
              </p>
            </div>

            {/* positions row */}
            <div className="positions">
              {exp.roles.reverse().map((role, j) => (
                <div key={j} className="position">
                  <p className="year">{role.year}</p>
                  <p className="title">· {role.title} <code>{role.code}</code></p>
                  <ul className="description">
                    {role.description.map((sentence, k) => (
                      <li key={k}>{sentence}</li>
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
