import { GraduationCap } from "lucide-react";

function ResumeEducation({ education }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <GraduationCap size={20} className="section-icon" />
        Education
      </h3>
      {education.map((edu, index) => (
        <article key={index} className="education-item">
          <div className="education-header">
            <h4 className="degree-title">{edu.degree}</h4>
            <div className="education-details">
              <span className="institution">{edu.institution}</span>
              <span className="graduation-year">{edu.year}</span>
            </div>
          </div>
          <p className="coursework">{edu.coursework}</p>
        </article>
      ))}
    </section>
  );
}

export default ResumeEducation;
