import './index.css';
import './portfolio.css';

function Portfolio({ selectedPortfolio }) {
  const portfolioData = {
    Frontend: [
      {
        name: "Escowin art",
        id: "escowinart",
        repo: "https://github.com/escowin/escowinart",
        liveUrl: "https://escowinart.com/",
        languages: "js css",
        libraries: "react",
        highlight: false,
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
        languages: "html css js api",
        dialects: "backend developer",
        highlight: false,
        collaboration: true,
      },
    ],
    Backend: [
      { name: "backend 1", id: "description goes here" },
      {
        name: "backend 2",
        id: "description goes here",
      },
      {
        name: "backend 3",
        id: "description goes here but more stuff",
      },
    ],
    Fullstack: [
      { name: "fullstack 1", id: "description goes here" },
      {
        name: "fullstack 2",
        id: "description goes here",
      },
      {
        name: "fullstack 2",
        id: "description goes here but more stuff",
      },
    ],
  };

  console.log(portfolioData[selectedPortfolio]);

  return (
    // JSX
    <section className="portfolio-wrapper">
      {portfolioData[selectedPortfolio] &&
        portfolioData[selectedPortfolio].map((item, index) => (
          <article key={index} id={item.id} className="project">
            <div className="project-details">
              <h2>{item.name}</h2>
              <p>{item.id}</p>
            </div>
          </article>
        ))}
    </section>
  );
}

export default Portfolio;
