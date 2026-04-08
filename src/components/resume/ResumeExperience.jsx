import { Briefcase } from "lucide-react";

function ResumeExperience({ experience }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <Briefcase size={20} className="section-icon" />
        Professional Experience
      </h3>
      {experience.map((exp, expIndex) => (
        <article key={expIndex} className="experience-item">
          <div className="experience-header">
            <h4 className="job-title">{exp.title}</h4>
            <div className="company-info">
              <span className="company-name">{exp.company}</span>
              <span className="job-duration">{exp.duration}</span>
            </div>
          </div>
          <p className="company-description">{exp.description}</p>
          <p className="job-description">{exp.summary}</p>
          <div className="experience-details">
            {exp.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="detail-category">
                <h5 className="detail-title">{detail.category}</h5>
                <ul className="detail-list">
                  {detail.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default ResumeExperience;
