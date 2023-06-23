const portfolioData = {
  education: [
    {
      year: 2022,
      level: "Professional education",
      major: "full-stack web development",
      school: "The university of texas at austin",
      location: "Austin, TX",
      id: "uta",
    },
    {
      year: 2015,
      level: "Undergraduate",
      major: "illustration",
      school: "California state university, fullerton",
      location: "Fullerton, CA",
      id: "csuf",
    },
    // {
    //   year: 2011,
    //   level: "Undergraduate",
    //   major: "fine arts",
    //   school: "Orange coast college",
    //   location: "Costa Mesa, CA",
    //   id: "occ",
    // },
  ],
  experience: [
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
  ],
  extracurriculars: [
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
    // {
    //   year: 2012,
    //   role: "Finer things club founder",
    //   event: "California state university, fullerton",
    //   location: "Fullerton, CA",
    // },
    // {
    //   year: 2010,
    //   role: "World passport instructor",
    //   event: "The ministry of education of taiwan",
    //   location: "聖功女子高級中學",
    // },
    // {
    //   year: 2009,
    //   role: "Teach and learn in korea scholar",
    //   event:
    //     "The ministry of education of the republic of korea",
    //   location: "남상초등학교",
    // },
  ],
  skillset: {
    languages: ["javascript", "graphql", "sql", "css", "html", "ruby"],
    libraries: {
      css: ["bootstrap"],
      js: [
        "bcrypt",
        // "day",
        // "handlebars",
        // "inquirer",
        "jquery",
        "redux",
        // "sequelize",
        // "mongoose",
        "webpack",
      ],
    },
    frameworks: {
      js: ["node", "express", "jest", "react"],
      ruby: ["rails"],
    },
    databases: ["jawsdb", "mysql", "mongodb", "postgresql", "sqlite"],
    paradigms: [
      "mvc",
      "oop",
      "orm",
      "odm",
      "pwa",
      "rwd",
      "spa",
      "tdd",
      "nosql",
    ],
    tools: [
      "api",
      "git",
      // "jwt",
      "npm",
      "heroku",
      "insomnia",
      "apollo\u2009graphql",
      // "wordpress",
    ],
  },
};

export default portfolioData;
