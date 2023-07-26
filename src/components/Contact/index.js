import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import portfolioData from "../../assets/data";

function Contact() {
  let contacts = [];
  let modifiedContacts = [];
  // `icons` array matches index order of corresponding `contacts` array
  const icons = [faInbox, faGithub, faLinkedin];

  // contacts array is now composed of socials & email based on the shared '.com' string value
  portfolioData.info.links.forEach((link) => {
    if (link.string.includes(".com")) {
      contacts.push(link);
    }
  });

  // `modifiedContacts` is composed of objects that retain properties of `contacts` objects, but with a modified `icon` property using the icon variable.
  for (let i = 0; i < contacts.length; i++) {
    const iconIndex = i;
    const updatedContact = { ...contacts[i], icon: icons[iconIndex] };
    modifiedContacts.push(updatedContact);
  }
  console.log(modifiedContacts);

  // mapping the array's objects reduces the need to write repeating code
  return (
    <ul id="contact-links">
      {modifiedContacts.map((contact, i) => (
        <li
          key={i}
          className="icon"
          onClick={() => window.open(contact.string, "_blank")}
        >
          <FontAwesomeIcon icon={contact.icon} />
          <span> {contact.string}</span>
        </li>
      ))}
    </ul>
  );
}

export default Contact;
