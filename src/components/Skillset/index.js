import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faGear,
  faShapes,
  faShareNodes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import portfolioData from "../../assets/data";
import "./index.css";

function Skillset() {
  // destructed arrays from skillset object
  const { languages, frameworks, libraries, databases, paradigms, tools } =
    portfolioData.skillset;

  // packages destructured arrays into objects with relevant properties
  const knowledge = [
    { name: "Languages", icon: faCode, tech: languages.join(" ") },
    { name: "Frameworks", icon: faShareNodes, tech: frameworks.join(" ") },
    { name: "Libraries", icon: faBars, tech: libraries.join(" ") },
    { name: "Databases", icon: faDatabase, tech: databases.join(" ") },
    { name: "Paradigms", icon: faShapes, tech: paradigms.join(" ") },
    { name: "Tools", icon: faGear, tech: tools.join(" ") },
  ];

  // mapping values from the above array retains the pattern without the need to hardcode repeating elements
  return (
    <>
      <h2 className="resume-subhead">Technical skills</h2>
      <section className="resume-section" id="skills">
        {knowledge.map((skill, i) => (
          <React.Fragment key={i}>
            <p className="skill-type">
              <FontAwesomeIcon icon={skill.icon} />
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
