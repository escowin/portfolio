import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faInbox,
  faLocationDot,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../../assets/files/edwin-escobar-resume.pdf";
import portfolioData from "../../assets/data";
import "./index.css";

function ResumeHeader() {
  const data = portfolioData.info;
  const icons = [faLocationDot, faInbox, faGrip, faGithub, faLinkedin];
  let links = [];

  for (let i = 0; i < data.links.length; i++) {
    // used to match index of `icons` with that of `data.links`
    const iconIndex = i;
    // new object is composed of an updated `icon` property, while retaining the other properties of the `data.link` object (format must be { ...spread, new key-value})
    const updatedLink = { ...data.links[i], icon: icons[iconIndex] };
    // this object is then pushed into the `links` array
    links.push(updatedLink);
  }

  function formatLink(link) {
    // formats string for aesthetic appeal
    if (link.includes("https://")) {
      if (link.includes(".com")) {
        return "escowin";
      }
      return link.replace("https://", "");
    }
    return link;
  }

  function handleClickedLink(link) {
    console.log(link);
    // URL & email strings behave as true links
    if (link.includes("https://")) {
      window.open(link, "_blank");
    }
    if (link.includes("@")) {
      window.open(`mailto:${link}`, "_blank");
    }
  }

  // downloadable blob accessible from viewing resume from portfolio
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
      <article id="print-details" className="display-print">
        <h2>{data.name}</h2>
        <p>{data.occupation}</p>
      </article>

      <article id="screen-details" className="display-screen">
        <h2>Resume</h2>
        <FontAwesomeIcon
          className="link"
          icon={faDownload}
          onClick={downloadResume}
        />
      </article>

      <article id="links">
        {links.map((link, i) => (
          <p
            key={i}
            className="link"
            onClick={() => handleClickedLink(link.string)}
          >
            <FontAwesomeIcon icon={link.icon} />
            <span className="display-md display-print">
              {formatLink(link.string)}
            </span>
          </p>
        ))}
      </article>
    </section>
  );
}

export default ResumeHeader;
