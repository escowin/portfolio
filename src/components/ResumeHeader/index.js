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

  // map `links` array inide the JSX return

  // const handleLinkedInClick = () =>
  //   window.open(data.contact.linkedin, "_blank");
  // const handleGithubClick = () => window.open(data.contact.github, "_blank");
  // const handlePortfolioClick = () =>
  //   window.open(data.contact.portfolio, "_blank");
  // const handleEmailClick = () =>
  //   window.open(`mailto:${data.contact.email}`, "_blank");

  // const downloadResume = () => {
  //   fetch(resume)
  //     .then((response) => response.blob())
  //     .then((myBlob) => {
  //       const objectUrl = URL.createObjectURL(myBlob);
  //       const link = document.createElement("a");
  //       link.href = objectUrl;
  //       link.download = "edwin-escobar-resume.pdf";
  //       link.click();
  //     });
  // };

  return (
    <section id="resume-header">
      <article id="details">
        <h2>{data.name}</h2>
        <p>{data.occupation}</p>
      </article>
      <article id="links">
        {links.map((link, i) => (
          <p key={i}>
            <FontAwesomeIcon icon={link.icon} />
            <span className="display-lg display-print"> {link.string}</span>
          </p>
        ))}
      </article>
    </section>
  );
}

export default ResumeHeader;
