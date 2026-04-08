import { Award } from "lucide-react";

function ResumeKeyProjects({ keyProjects }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <Award size={20} className="section-icon" />
        Key Projects
      </h3>
      <article className="projects-grid">
        {keyProjects.map((project, index) => (
          <div key={index} className="project-item">
            <h4 className="project-title">{project.title}</h4>
            <div className="project-details">
              <span className="project-role">{project.role}</span>
              <span className="project-tech">{project.technologies}</span>
            </div>
            <p className="project-impact">{project.impact}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default ResumeKeyProjects;
