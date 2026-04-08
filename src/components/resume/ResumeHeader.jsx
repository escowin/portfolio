import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const contactIconMap = {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink
};

function ResumeHeader({ header }) {
  return (
    <header className="resume-header">
      <article className="resume-title-section">
        <h1 className="resume-name">{header.name}</h1>
        <h2 className="resume-title">{header.title}</h2>
      </article>
      <article className="resume-contact">
        {header.contact.map((contact, index) => {
          const IconComponent = contactIconMap[contact.icon];
          return (
            <div key={index} className="contact-item">
              <IconComponent size={16} className="contact-icon" />
              {contact.url ? (
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  {contact.text}
                </a>
              ) : (
                <span>{contact.text}</span>
              )}
            </div>
          );
        })}
      </article>
    </header>
  );
}

export default ResumeHeader;
