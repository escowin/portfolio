import portfolioData from "../../assets/data";
import "./index.css";
import "./portfolio.css";

function Portfolio({ selectedPortfolio }) {
  // portfolio consists of frontend, backend, and fullstack applications
  const portfolio = portfolioData.applications;

  // the selected portfolio prop determines which portfolio will be randomized into a new array.
  const portfolioDataRandomized = portfolio[selectedPortfolio].sort(
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
