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
          title: "teacher's assistant, rice university",
          year: 2022,
          code: "fullstack web development, slack, zoom, canvas",
          description: [
            "Completed administrative and grading tasks on behalf of the instructor.",
            "Assisted students with coursework during office hours.",
          ],
        },
        {
          title: "central grader",
          year: 2023,
          code: "fullstack web development, slack, bootcampspot",
          description: [
            "Efficiently graded student applications while delivering personalized feedback to support individual student growth.",
          ],
        },
        {
          title: "learning assistant",
          year: 2023,
          code: "fullstack web development, slack, zoom",
          description: [
            "Troubleshot and guided students in real time with application development whenever they encountered errors.",
            "Provided timely feedback that guided students towards solutions without directly giving them the answers, fostering critical thinking skills",
          ],
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
            "Developed a secure mvc app with protected rest api, session management, and encryption.",
            // "Utilized sequelize orm to safeguard mysql database from direct user manipulation.",
            // "Utilized handlebars to conditionally render employee & client views.",
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
        {
          title: "graphic novelist",
          year: 2020,
          code: "adobe\u2009cc corel\u2009painter",
          description: [
            "Wrote, illustrated, and published 'blue strawberry' graphic novel.",
            // "Utilized corel painter to draw the artwork.",
            // "Utilized adobe cc to format files and optimize color modes.",
          ],
        },
        {
          title: "site developer",
          year: 2021,
          code: "mongodb express react node",
          description: [
            "Established a sole proprietorship in austin specializing in fine art sales.",
            "Developed website using react to serve as a digital business card.",
            // "Utilized mern stack to enable e-commerce site capabilities.",
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
                {duration(exp.roles[0].year, exp.endYear)}
              </p>
            </div>

            {/* positions row */}
            <div className="positions">
              {exp.roles.reverse().map((role, j) => (
                <div key={j} className="position">
                  <p className="year">{role.year}</p>
                  <p className="title">
                    · {role.title} <code>{role.code}</code>
                  </p>
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
