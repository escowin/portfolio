import "./index.css";
import "./portfolio.css";

function Portfolio({ selectedPortfolio }) {
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
        languages: "html css js",
        dialects: "",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Password generator",
        id: "password-generator",
        repo: "https://github.com/escowin/password-generator",
        liveUrl: "https://escowin.github.io/password-generator/",
        languages: "html css js",
        dialects: "",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Coding quiz",
        id: "coding-quiz",
        repo: "https://github.com/escowin/coding-quiz",
        liveUrl: "https://escowin.github.io/coding-quiz/",
        languages: "html css js",
        dialects: "",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Weather dashboard",
        id: "weather-dashboard",
        repo: "https://github.com/escowin/weather-dashboard",
        liveUrl: "https://escowin.github.io/weather-dashboard/",
        languages: "html css js api",
        dialects: "jquery moment",
        highlight: false,
        collaboration: false,
      },
      {
        name: "Day planner",
        id: "day-planner",
        repo: "https://github.com/escowin/day-planner",
        liveUrl: "https://escowin.github.io/day-planner/",
        languages: "html css js",
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
        name: "Solar weather",
        id: "solar-weather",
        repo: "https://github.com/escowin/solar-weather-app",
        liveUrl: "https://escowin.github.io/solar-weather-app",
        languages: "html css js api",
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

  const portfolioDataRandomized = portfolioData[selectedPortfolio].sort(
    () => Math.random() - 0.5
  );
  const highlightedData = portfolioDataRandomized.filter(
    (item) => item.highlight === true
  );
  const nonHighlightedData = portfolioDataRandomized.filter(
    (item) => item.highlight !== true
  );
  const modifiedPortfolio = [...highlightedData, ...nonHighlightedData];

  return (
    <section className="portfolio-wrapper">
      {modifiedPortfolio &&
        modifiedPortfolio.map((item, index) => (
          <article key={index} id={item.id} className="project">
            <div className="project-details">
              <h2>{item.name}</h2>
              <h3>Repo · Live url</h3>
              <p>{item.languages}</p>
              <p>{item.dialects}</p>
            </div>
          </article>
        ))}
    </section>
  );
}

export default Portfolio;
