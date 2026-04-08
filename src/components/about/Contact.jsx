import portfolioData from "../../assets/data";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  let modifiedContacts = [];
  const contacts = portfolioData.info.links.filter((link) =>
    link.string.includes(".com")
  );

  const iconMap = {
    'faInbox': Mail,
    'faGithub': Github,
    'faLinkedin': Linkedin
  };

  for (let i = 0; i < contacts.length; i++) {
    const IconComponent = iconMap[contacts[i].icon] || Mail;
    const updatedContact = { ...contacts[i], icon: IconComponent };
    modifiedContacts.push(updatedContact);
  }

  function formatLink(string) {
    return string.includes("@")
      ? "email"
      : string.split("//")[1].split(".")[0];
  }

  function handleClick(string) {
    string.includes("@")
      ? window.open(`mailto:${string}`, "_blank")
      : window.open(string, "_blank");
  }

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
