import portfolioData from "../assets/data";
import "../assets/css/portfolio.css";
import "../assets/css/applications.css";
import { formatName } from "../utils/helpers";

function Portfolio({ selectedPortfolio }) {
  // portfolio consists of frontend, backend, and fullstack applications
  const portfolio = portfolioData.applications;

  // For Featured section, collect all highlighted projects from all categories
  // For other sections, maintain the existing highlight logic
  let modifiedPortfolio;
  if (selectedPortfolio === "Featured") {
    // Collect all highlighted projects from all categories
    const allHighlightedProjects = [];
    Object.values(portfolio).forEach(category => {
      if (Array.isArray(category)) {
        category.forEach(project => {
          if (project.highlight === true) {
            allHighlightedProjects.push(project);
          }
        });
      }
    });
    modifiedPortfolio = allHighlightedProjects;
  } else {
    // the selected portfolio prop determines which portfolio will be randomized into a new array.
    const portfolioDataRandomized = portfolio[selectedPortfolio].sort(() => Math.random() - 0.5);

    // this new randomized array is then split into two arrays.
    const highlightedData = portfolioDataRandomized.filter((app) => app.highlight === true);
    const nonHighlightedData = portfolioDataRandomized.filter((app) => app.highlight !== true);

    // these arrays are then recombined, highlighted apps appear first
    modifiedPortfolio = [...highlightedData, ...nonHighlightedData];
  }

  // this final array is mapped. each app object's properties are plugged in where needed within the article element. highlighted apps receive the additional 'highlight' class attribute.
  return (
    <section className={`portfolio grid ${selectedPortfolio === "Featured" ? "grid--auto-fit" : "grid--2-col"}`}>
      {modifiedPortfolio.map((app, index) => (
        <article
          key={index}
          id={app.id}
          className={`app card ${app.highlight ? "highlight" : ""} ${selectedPortfolio === "Featured" ? "featured-project" : ""}`}
        >
          <div className="app-details overlay">
            <div className="project-header">
              <h2 className="heading heading--secondary">{formatName(app.id)}</h2>
              {app.year && (
                <span className="project-year text text--sm">{app.year}</span>
              )}
            </div>
            
            {app.description && (
              <p className="project-description text text--sm">{app.description}</p>
            )}
            
            <h3 className="app-links text text--sm">
              <span className="link link--hover" onClick={() => window.open(app.repo)}>Repo</span>
              {app.liveUrl && (
                <span className="link link--hover" onClick={() => window.open(app.liveUrl)}>
                  {" "}
                  · Live url
                </span>
              )}
            </h3>
            
            <div className="tech-stack">
              <div className="tech-category">
                <span className="tech-label text text--sm">Languages:</span>
                <p className="text text--muted">{app.languages}</p>
              </div>
              
              {app.libraries && (
                <div className="tech-category">
                  <span className="tech-label text text--sm">Libraries:</span>
                  <p className="text text--muted">{app.libraries}</p>
                </div>
              )}
              
              {app.database && (
                <div className="tech-category">
                  <span className="tech-label text text--sm">Database:</span>
                  <p className="text text--muted">{app.database}</p>
                </div>
              )}
              
              {app.complexity && (
                <div className="tech-category">
                  <span className="tech-label text text--sm">Complexity:</span>
                  <p className="text text--muted">{app.complexity}</p>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Portfolio;
