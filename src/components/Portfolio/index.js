import "./index.css";
import "./portfolio.css";

function Portfolio({ selectedPortfolio }) {
  // projects are either frontend, backend, or fullstack apps.
  const portfolioData = {
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
        dialects: "",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Password generator",
        id: "password-generator",
        repo: "https://github.com/escowin/password-generator",
        liveUrl: "https://escowin.github.io/password-generator/",
        languages: "js css html",
        dialects: "",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Coding quiz",
        id: "coding-quiz",
        repo: "https://github.com/escowin/coding-quiz",
        liveUrl: "https://escowin.github.io/coding-quiz/",
        languages: "js css html",
        dialects: "",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Weather dashboard",
        id: "weather-dashboard",
        repo: "https://github.com/escowin/weather-dashboard",
        liveUrl: "https://escowin.github.io/weather-dashboard/",
        languages: "js css html api",
        dialects: "jquery moment",
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
        highlight: false,
        collaboration: false,
      },
      {
        name: "Raven home",
        id: "raven-home",
        repo: "https://github.com/escowin/raven-home",
        liveUrl: "https://escowin.github.io/RavenclawG-2/",
        languages: "frontend api project",
        dialects: "javascript developer",
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
        languages: "oop · js css",
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
        languages: "js mysql",
        dialects: "node express inquirer",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Social network api",
        id: "social-network",
        repo: "https://github.com/escowin/social-network",
        liveUrl: null,
        languages: "js mongodb",
        dialects: "node express mongoose",
        highlight: true,
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
        name: "Cms blog",
        id: "cms-blog",
        repo: "https://github.com/escowin/cms-blog",
        liveUrl: null,
        languages: "js css mysql",
        dialects: "node express handlebars sequelize",
        highlight: false,
        collaboration: false,
      },
      {
        name: "VVH Financial",
        id: "vvh-financial",
        repo: "https://github.com/escowin/vvh-financial",
        liveUrl: null,
        languages: "js css mysql",
        dialects: "node express handlebars sequelize",
        highlight: true,
        collaboration: false,
      },
      {
        name: "Smart home",
        id: "smart-home",
        repo: "https://github.com/escowin/smart-home",
        liveUrl: "https://young-earth-27956.herokuapp.com/",
        languages: "mern project",
        dialects: "frontend lead",
        highlight: false,
        collaboration: true,
      },
      {
        name: "Auction house",
        id: "auction-house",
        repo: "https://github.com/escowin/auction-house",
        liveUrl: "https://stormy-fjord-57144.herokuapp.com/",
        languages: "mvc project",
        dialects: "frontend lead",
        highlight: false,
        collaboration: true,
      },
      {
        name: "Address book",
        id: "address-book",
        repo: "https://github.com/escowin/address-book-escobar-edwin",
        liveUrl: null,
        languages: "ruby postgresql",
        dialects: "rails bootstrap",
        highlight: false,
        collaboration: false,
      },
    ],
  };

  // the selected portfolio prop determines which portfolio will be randomized into a new array.
  const portfolioDataRandomized = portfolioData[selectedPortfolio].sort(
    () => Math.random() - 0.5
  );
  // this new randomized array is then split into two arrays.
  const highlightedData = portfolioDataRandomized.filter(
    (project) => project.highlight === true
  );
  const nonHighlightedData = portfolioDataRandomized.filter(
    (project) => project.highlight !== true
  );
  // these arrays are then recombined, highlighted projects appear first
  const modifiedPortfolio = [...highlightedData, ...nonHighlightedData];

  // this final array is mapped. each project object's properties are plugged in where needed within the article element. highlighted projects receive the additional 'highlight' class attribute.
  return (
    <section className="portfolio">
      {modifiedPortfolio &&
        modifiedPortfolio.map((project, index) => (
          <article key={index} id={project.id} className={`project ${project.highlight ? 'highlight' : ''}`}>
            <div className="project-details">
              <h2>{project.name}</h2>
              <h3 className="project-links">
                <span onClick={() => window.open(project.repo)}>Repo</span>
                {project.liveUrl && (
                  <span onClick={() => window.open(project.liveUrl)}> · Live url
                  </span>
                )}
              </h3>
              <p>{project.languages}</p>
              <p>{project.dialects}</p>
            </div>
          </article>
        ))}
    </section>
  );
}

export default Portfolio;
