import { Code } from "lucide-react";

function ResumeTechnicalSkills({ technicalSkills }) {
  return (
    <section className="resume-section">
      <h3 className="section-title">
        <Code size={20} className="section-icon" />
        Technical Skills
      </h3>
      <article className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h4 className="skill-category-title">{skill.category}</h4>
            <p>{skill.skills}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default ResumeTechnicalSkills;
