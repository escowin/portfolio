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
      code: "gitlab slack zoom canvas fullstack-flex",
      roles: [
        {
          title: "teacher's assistant, rice university",
          year: 2022,
          description: [
            "Completed administrative and grading tasks on behalf of the instructor.",
            "Assisted students with coursework during office hours.",
          ],
        },
        {
          title: "central grader",
          year: 2023,
          description: [
            "Efficiently graded student software application assignments in a timely manner while delivering in-depth personalized feedback to support individual growth.",
          ],
        },
        {
          title: "learning assistant",
          year: 2023,
          description: [
            "Troubleshot and guided students in real time with application development whenever they encountered errors.",
            "Provided timely feedback that guided students towards solutions without directly giving them the answers, fostering critical thinking skills.",
          ],
        },
      ],
    },
    {
      company: "Vvh financial",
      location: "Dallas, TX",
      url: "https://github.com/escowin/vvh-financial",
      endYear: 2022,
      code: "express node bcrypt sequelize mysql handlebars",
      roles: [
        {
          title: "app developer",
          year: 2022,
          description: [
            "Engineered a robust mvc application for an estate planning firm, incorporating advanced security measures such as protected rest api, session management, and encryption to ensure data confidentiality and integrity.",
          ],
        },
      ],
    },
    {
      company: "Escowin art",
      location: "Austin, TX",
      url: "https://escowinart.com",
      endYear: 0,
      code: "react adobeꞏcc corelꞏpainter",
      roles: [
        {
          title: "graphic novelist",
          year: 2020,
          description: [
            "Authored, illustrated, and self-published the visually captivating  'blue strawberry'.",
          ],
        },
        {
          title: "site developer",
          year: 2021,
          description: [
            "Founded and operated a sole proprietorship in austin, focusing on the sale of fine art.",
            "Designed and developed a professional website utilizing React, serving as an interactive digital business card.",
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
    languages: [
      "javascript",
      "graphql",
      "sql",
      "handlebars",
      "html",
      "css",
      "ruby",
    ],
    libraries: {
      css: ["bootstrap"],
      js: [
        "jquery",
        "mongoose",
        "sequelize",
        "redux",
        "bcrypt",
        "webpack",
        // "day",
        // "inquirer",
      ],
    },
    frameworks: {
      js: ["express", "node", "react", "jest"],
      ruby: ["rails"],
    },
    databases: ["mongodb", "mysql", "postgresql", "sqlite", "jawsdb"],
    paradigms: [
      "mvc",
      "oop",
      "orm",
      // "odm",
      "pwa",
      "rwd",
      "spa",
      "tdd",
      "nosql",
    ],
    tools: [
      "api",
      "git",
      "jwt",
      "npm",
      "heroku",
      "insomnia",
      "apollo\u2009sandbox",
      // "wordpress",
    ],
  },
  applications: {
    Frontend: [
      {
        name: "Escowin art",
        id: "escowinart",
        repo: "https://github.com/escowin/escowinart",
        liveUrl: "https://escowinart.com/",
        languages: "js css",
        dialects: "react",
        highlight: true,
        collaboration: false,
      },
      {
        name: "Old portfolio",
        id: "css-portfolio",
        repo: "https://github.com/escowin/professional-portfolio",
        liveUrl: "https://escowin.github.io/professional-portfolio",
        languages: "js css html",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Password generator",
        id: "password-generator",
        repo: "https://github.com/escowin/password-generator",
        liveUrl: "https://escowin.github.io/password-generator/",
        languages: "js css html",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Coding quiz",
        id: "coding-quiz",
        repo: "https://github.com/escowin/coding-quiz",
        liveUrl: "https://escowin.github.io/coding-quiz/",
        languages: "js css html",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Weather dashboard",
        id: "weather-dashboard",
        repo: "https://github.com/escowin/weather-dashboard",
        liveUrl: "https://escowin.github.io/weather-dashboard/",
        languages: "js css html",
        dialects: "jquery moment",
        database: "api",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Day planner",
        id: "day-planner",
        repo: "https://github.com/escowin/day-planner",
        liveUrl: "https://escowin.github.io/day-planner/",
        languages: "js css html",
        dialects: "bootstrap jquery moment",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Bluestrawberry",
        id: "bluestrawberry",
        repo: "https://github.com/escowin/bluestrawberry",
        liveUrl: "https://escowin.github.io/bluestrawberry",
        languages: "js css",
        dialects: "react",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Helios",
        id: "helios",
        repo: "https://github.com/escowin/helios",
        liveUrl: "https://escowin.github.io/helios",
        languages: "js css html api",
        dialects: "jquery moment",
        database: "api",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Raven home",
        id: "raven-home",
        repo: "https://github.com/escowin/RavenclawG-2",
        liveUrl: "https://escowin.github.io/RavenclawG-2/",
        languages: "js css html",
        dialects: "jquery skeleton",
        database: "api",
        highlight: false,
        collaboration: true,
      },
    ],
    Backend: [
      {
        name: "Team profile generator",
        id: "team-profile-generator",
        repo: "https://github.com/escowin/team-profile-generator",
        liveUrl: null,
        languages: "js css",
        dialects: "node inquirer jest",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Portfolio generator",
        id: "portfolio-generator",
        repo: "https://github.com/escowin/portfolio-generator",
        liveUrl: null,
        languages: "js css",
        dialects: "node inquirer",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Readme generator",
        id: "readme-generator",
        repo: "https://github.com/escowin/readme-generator",
        liveUrl: null,
        languages: "js",
        dialects: "node inquirer",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Employee tracker",
        id: "employee-tracker",
        repo: "https://github.com/escowin/employee-tracker",
        liveUrl: null,
        languages: "js sql",
        dialects: "node express inquirer",
        database: "mysql",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Fantastic umbrella",
        id: "fantastic-umbrella",
        repo: "https://github.com/escowin/fantastic-umbrella",
        liveUrl: null,
        languages: "js",
        dialects: "node express sequelize",
        database: "mysql",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Social network api",
        id: "social-network",
        repo: "https://github.com/escowin/social-network",
        liveUrl: null,
        languages: "js",
        dialects: "node express mongoose",
        database: "mongodb",
        highlight: true,
        collaboration: false,
      },
      {
        name: "Meal prep",
        id: "meal-prep",
        repo: "https://github.com/escowin/meal-prep",
        liveUrl: null,
        languages: "js css",
        dialects: "node inquirer",
        highlight: false,
        collaboration: false,
      },
    ],
    Fullstack: [
      {
        name: "Note taker",
        id: "note-taker",
        repo: "https://github.com/escowin/note-taker",
        liveUrl: null,
        languages: "js css html",
        dialects: "node express bootstrap",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Fitness logbook",
        id: "fitness-logbook",
        repo: "https://github.com/escowin/fitness-logbook",
        liveUrl: null,
        languages: "js css sql",
        dialects: "node express sequelize handlebars",
        database: "mysql",
        highlight: false,
        collaboration: false,
      },
      {
        name: "VVH Financial",
        id: "vvh-financial",
        repo: "https://github.com/escowin/vvh-financial",
        liveUrl: null,
        languages: "js css handlebars",
        dialects: "node express sequelize bcrypt",
        database: "mysql",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Smart home",
        id: "smart-home",
        repo: "https://github.com/escowin/smart-home",
        liveUrl: "https://young-earth-27956.herokuapp.com/",
        languages: "js css",
        dialects: "express react node bcrypt",
        database: "mongodb",
        highlight: false,
        collaboration: true,
      },
      {
        name: "Auction house",
        id: "auction-house",
        repo: "https://github.com/escowin/auction-house",
        liveUrl: "https://stormy-fjord-57144.herokuapp.com/",
        languages: "js css handlebars",
        dialects: "express node sequelize bcrypt",
        database: "mysql",
        highlight: false,
        collaboration: true,
      },
      {
        name: "Address book",
        id: "address-book",
        repo: "https://github.com/escowin/address-book-escobar-edwin",
        liveUrl: null,
        languages: "ruby sql",
        dialects: "rails bootstrap",
        database: "postgresql",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Job tracker",
        id: "job-tracker",
        repo: "https://github.com/escowin/job-tracker",
        liveUrl: null,
        languages: "graphql js css",
        dialects: "mongoose express react node jwt bcrypt",
        database: "mongodb",
        highlight: true,
        collaboration: false,
      },
    ],
  },
  info: {
    name: "Edwin m. escobar",
    occupation: "Software engineer",
    links: [
      { icon: "faLocationDot", string: "Austin, TX" },
      { icon: "faInbox", string: "edwin@escowinart.com" },
      { icon: "faGrip", string: "https://escowin.github.io/portfolio" },
      { icon: "faGithub", string: "https://github.com/escowin" },
      { icon: "faLinkedin", string: "https://linkedin.com/in/escowin" },
    ],
    bio: [
      "I'm a MERN stack developer with a fine arts background. I like to code responsively aesthetic apps.",
      "Currently pursuing new opportunities for professional growth & development here in Austin, TX.",
      "Browse my portfolio to assess my abilities.",
    ],
  },
};

export default portfolioData;