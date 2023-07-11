import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import portfolioData from "../../assets/data";

function Contact() {
  const contact = portfolioData.info.contact;
  console.log(contact)

  return (
    <ul id="contact-links">
      <li
        className="icon"
        onClick={() => window.open(contact.github, "_blank")}
      >
        <FontAwesomeIcon icon={faGithub} />
        <span> github</span>
      </li>
      <li
        className="icon"
        onClick={() => window.open(contact.linkedin, "_blank")}
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span> linkedin</span>

      </li>
      <li
        className="icon"
        onClick={() => window.open(`mailto:${contact.email}`)}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span> email</span>
      </li>
    </ul>
  );
}

export default Contact;
