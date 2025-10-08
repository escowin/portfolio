import "./index.css";
import portfolioData from "../../assets/data";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  let modifiedContacts = [];
  // contacts array is composed of objects which share the '.com' string value
  const contacts = portfolioData.info.links.filter((link) =>
    link.string.includes(".com")
  );

  // Map the original icon names to Lucide React components
  const iconMap = {
    'faInbox': Mail,
    'faGithub': Github, 
    'faLinkedin': Linkedin
  };

  // `modifiedContacts` is now composed of objects that retain properties of `contacts` objects, but with a modified `icon` property using the icon variable.
  for (let i = 0; i < contacts.length; i++) {
    const IconComponent = iconMap[contacts[i].icon] || Mail; // fallback to Mail
    const updatedContact = { ...contacts[i], icon: IconComponent };
    modifiedContacts.push(updatedContact);
  }

  function formatLink(string) {
    // email strings are identified by '@' char.
    return string.includes("@")
      ? "email"
      : // domain names are returned by seperating out the url string
        string.split("//")[1].split(".")[0];
  }

  function handleClick(string) {
    // strings are identified to determine how arguments are set
    string.includes("@")
      ? window.open(`mailto:${string}`, "_blank")
      : window.open(string, "_blank");
  }

  // mapping the array's objects reduces the need to write repeating code
  return (
    <ul id="contact-links" className="flex flex--center">
      {modifiedContacts.map((contact, i) => {
        const IconComponent = contact.icon;
        return (
          <li
            key={i}
            className="icon link link--hover"
            onClick={() => {
              handleClick(contact.string);
            }}
          >
            <IconComponent className="icon-symbol" size={22} />
            <span className="text text--sm"> {formatLink(contact.string)}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Contact;
