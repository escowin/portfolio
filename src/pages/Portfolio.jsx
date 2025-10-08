import portfolioData from "../assets/data";
import "../assets/css/portfolio.css";
import "../assets/css/applications.css";
import { formatName } from "../utils/helpers";

function Portfolio({ selectedPortfolio }) {
  // portfolio consists of frontend, backend, and fullstack applications
  const portfolio = portfolioData.applications;

  // the selected portfolio prop determines which portfolio will be randomized into a new array.
  const portfolioDataRandomized = portfolio[selectedPortfolio].sort(() => Math.random() - 0.5);

  // this new randomized array is then split into two arrays.
  const highlightedData = portfolioDataRandomized.filter((app) => app.highlight === true);
  const nonHighlightedData = portfolioDataRandomized.filter((app) => app.highlight !== true);

  // these arrays are then recombined, highlighted apps appear first
  const modifiedPortfolio = [...highlightedData, ...nonHighlightedData];

  // this final array is mapped. each app object's properties are plugged in where needed within the article element. highlighted apps receive the additional 'highlight' class attribute.
  return (
    <section className="portfolio grid grid--2-col">
      {modifiedPortfolio.map((app, index) => (
        <article
          key={index}
          id={app.id}
          className={`app card ${app.highlight ? "highlight" : ""}`}
        >
          <div className="app-details overlay">
            <h2 className="heading heading--secondary">{formatName(app.id)}</h2>
            <h3 className="app-links text text--sm">
              <span className="link link--hover" onClick={() => window.open(app.repo)}>Repo</span>
              {app.liveUrl && (
                <span className="link link--hover" onClick={() => window.open(app.liveUrl)}>
                  {" "}
                  · Live url
                </span>
              )}
            </h3>
            <span className="tech-label text text--sm">Languages:</span>
            <p className="text text--muted">{app.languages}</p>
            {app.libraries ? (
              <>
                <span className="tech-label text text--sm">Libraries:</span>
                <p className="text text--muted">{app.libraries}</p>
              </>
            ) : (
              ""
            )}
            {app.database ? (
              <>
                <span className="tech-label text text--sm">Database:</span>
                <p className="text text--muted">{app.database}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </article>
      ))}
    </section>
  );
}

export default Portfolio;
