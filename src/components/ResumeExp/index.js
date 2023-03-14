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
          code: "fullstack web development",
          description: [
            "Alleviated instructor's workload by grading student projects and handling technical tasks.",
            "Assisted students with coursework during office hours.",
            "Used GitLab, Zoom, Canvas, and Slack to ensure seamless delivery of course material.",
          ],
        },
        {
          title: "central grader",
          year: 2023,
          code: "fullstack web development",
          description: [
            "Ensured academic integrity by checking for plagiarism in submitted assignments, promoting fair evaluation practices.",
            "Upheld Company & University grading standards while providing constructive timely feedback to students.",
          ],
        },
        {
          title: "learning assistant",
          year: 2023,
          code: "fullstack web development",
          description: [
            "Assisted students with troubleshooting Full Stack Flex assignments guiding towards independent problem-solving",
            "Collaborated with coworkers to optimize the student learning experience and provide consistent feedback",
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
        {
          title: "graphic novelist",
          year: 2020,
          code: "adobe\u2009cc corel\u2009painter",
          description: [
            "Created, wrote, and illustrated a graphic novel entitled 'Blue Strawberry'.",
            "Utilized Corel Painter to produce the artwork and bring the story to life.",
            "Utilized Adobe Creative Cloud to format files, establish page layouts, and optimize color modes for print and digital",
          ],
        },
        {
          title: "site developer",
          year: 2021,
          code: "mern",
          description: [
            "Established a sole proprietorship in Austin specializing in fine art sales.",
            "Developed and launched a website using React to serve as a digital business card.",
            "Expanded website functionality by incorporating the full MERN stack, enabling e-commerce capabilities.",
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
