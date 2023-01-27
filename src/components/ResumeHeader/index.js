import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './index.css'

function ResumeHeader() {
  const data = {
    name: "Edwin m. escobar",
    occupation: "Software engineer",
    links: {
      email: "edwin@escowinart.com",
      github: "https://github.com/escowin",
      linkedin: "https://www.linkedin.com/in/escowin/",
      portfolio: "https://escowin.github.io/portfolio",
    },
    location: "Austin, TX",
  };

  const handleLinkedInClick = () => window.open(data.links.linkedin, "_blank");
  const handleGithubClick = () => window.open(data.links.github, "_blank");
  const handlePortfolioClick = () =>
    window.open(data.links.portfolio, "_blank");
  const handleEmailClick = () =>
    window.open(`mailto:${data.links.email}`, "_blank");

  return (
    <section id="resume-header">
      <article className="left mobile-hide">
        <p onClick={handleLinkedInClick}>
        <FontAwesomeIcon icon={faLinkedin} /> linkedin
          <span className="print">.com/in/escowin</span>
        </p>
        <p onClick={handleGithubClick}>
        <FontAwesomeIcon icon={faGithub} /> github
          <span className="print">.com/escowin</span>
        </p>
      </article>
      <article className="center">
        <h2>{data.name}</h2>
        <h3 onClick={handlePortfolioClick}>{data.occupation}</h3>
      </article>
      <article className="right mobile-hide">
        <p>
          {data.location}
          <FontAwesomeIcon icon={faLocationDot} />
        </p>
        <p onClick={handleEmailClick}>
          <span className="print-hide">e-mail </span>
          <span className="print">{data.links.email}</span>
          <FontAwesomeIcon icon={faEnvelope} />
        </p>
      </article>
    </section>
  );
}

export default ResumeHeader;
