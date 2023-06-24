import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../../assets/data/edwin-escobar-resume.pdf";
import "./index.css";

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

  const downloadResume = () => {
    fetch(resume)
      .then((response) => response.blob())
      .then((myBlob) => {
        const objectUrl = URL.createObjectURL(myBlob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = "edwin-escobar-resume.pdf";
        link.click();
      });
  };

  return (
    <section id="resume-header">
      <article className="left display-lg">
        <p className="link" onClick={handleLinkedInClick}>
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="display-lg display-print"> linkedin</span>
          <span className="display-print">.com/in/escowin</span>
        </p>
        <p className="link" onClick={handleGithubClick}>
          <FontAwesomeIcon icon={faGithub} />
          <span className="display-lg display-print"> github</span>
          <span className="display-print">.com/escowin</span>
        </p>
      </article>

      <article className="center">
        <h2>
          <span className="display-screen" onClick={downloadResume}>
            Resumė
          </span>
          <span className="display-print">{data.name}</span>
        </h2>
        <h3 className="display-print link" onClick={handlePortfolioClick}>
          {data.occupation}
        </h3>
      </article>

      <article className="right display-lg">
        <p id="location">
          <span>{data.location}</span>
          <FontAwesomeIcon icon={faLocationDot} />
        </p>
        <p className="link" id="email" onClick={handleEmailClick}>
          <span className="display-lg">e-mail </span>
          <span className="display-print">{data.links.email} </span>
          <FontAwesomeIcon icon={faEnvelope} />
        </p>
      </article>
    </section>
  );
}

export default ResumeHeader;
