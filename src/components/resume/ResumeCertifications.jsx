import { Award } from "lucide-react";

function ResumeCertifications({ certifications }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <Award size={20} className="section-icon" />
        Certifications & Training
      </h3>
      <article className="certifications">
        <h4 className="cert-section-title">{certifications.title}</h4>
        <ul className="cert-list">
          {certifications.items.map((cert, index) => (
            <li key={index}>
              <strong>{cert.category}:</strong> {cert.description}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default ResumeCertifications;
