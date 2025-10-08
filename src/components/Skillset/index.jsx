import React, { Fragment } from "react";
import portfolioData from "../../assets/data";
import "./index.css";

function Skillset() {
  // destructed arrays from skillset object
  const { languages, frameworks, libraries, databases, paradigms, tools } =
    portfolioData.skillset;

  // packages destructured arrays into objects with relevant properties
  const knowledge = [
    { name: "Languages", icon: "💻", tech: languages.join(" ") },
    { name: "Frameworks", icon: "⚛️", tech: frameworks.join(" ") },
    { name: "Libraries", icon: "📚", tech: libraries.join(" ") },
    { name: "Databases", icon: "🗄️", tech: databases.join(" ") },
    { name: "Paradigms", icon: "🔧", tech: paradigms.join(" ") },
    { name: "Tools", icon: "🛠️", tech: tools.join(" ") },
  ];

  // mapping values from the above array retains the pattern without the need to hardcode repeating elements
  return (
    <>
      <h2 className="resume-subhead">Technical skills</h2>
      <section className="resume-section" id="skills">
        {knowledge.map((skill, i) => (
          <React.Fragment key={i}>
            <p className="skill-type">
              <span className="skill-icon">{skill.icon}</span>
              <span className="display-lg"> {skill.name}</span>
            </p>
            <p key={skill.name} className="skillset">
              {skill.tech}
            </p>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default Skillset;
