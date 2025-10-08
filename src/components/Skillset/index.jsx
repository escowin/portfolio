import React, { Fragment } from "react";
import portfolioData from "../../assets/data";
import { Code, Layers, Book, Database, Settings, Wrench } from "lucide-react";
import "./index.css";

function Skillset() {
  // destructed arrays from skillset object
  const { languages, frameworks, libraries, databases, paradigms, tools } =
    portfolioData.skillset;

  // packages destructured arrays into objects with relevant properties
  const knowledge = [
    { name: "Languages", icon: Code, tech: languages.join(" ") },
    { name: "Frameworks", icon: Layers, tech: frameworks.join(" ") },
    { name: "Libraries", icon: Book, tech: libraries.join(" ") },
    { name: "Databases", icon: Database, tech: databases.join(" ") },
    { name: "Paradigms", icon: Settings, tech: paradigms.join(" ") },
    { name: "Tools", icon: Wrench, tech: tools.join(" ") },
  ];

  // mapping values from the above array retains the pattern without the need to hardcode repeating elements
  return (
    <>
      <h2 className="heading heading--secondary">Technical skills</h2>
      <section className="grid" id="skills">
        {knowledge.map((skill, i) => {
          const IconComponent = skill.icon;
          return (
            <React.Fragment key={i}>
              <p className="skill-type flex flex--center">
                <IconComponent className="skill-icon" size={24} />
                <span className="text text--lg"> {skill.name}</span>
              </p>
              <p key={skill.name} className="skillset text text--muted">
                {skill.tech}
              </p>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
}

export default Skillset;
