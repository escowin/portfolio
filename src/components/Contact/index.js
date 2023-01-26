import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const contact = {
        email: "edwin@escowinart.com",
        github: "https://github.com/escowin",
        linkedin: "https://linkedin.com/in/escowin",
    }

  return (
    <section>
      <h3 id="contact">Contact</h3>
      <ul id="contact-container">
        {/* <li
          className="icon"
          onClick={() => window.open(`mailto:${contact.email}`)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </li> */}
        {/* <li
          className="icon"
          onClick={() => window.open(contact.github, "_blank")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li
          className="icon"
          onClick={() => window.open(contact.linkedin, "_blank")}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </li> */}
      </ul>
    </section>
  );
}

export default Contact;
