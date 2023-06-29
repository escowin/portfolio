import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faGear,
  faShapes,
  faShareNodes,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import portfolioData from "../../assets/data";
import "./index.css";

function Skillset() {
  const skillset = portfolioData.skillset;

  const languages = skillset.languages.join(" ");
  const jsFrameworks = skillset.frameworks.js.join(" ");
  const rubyFrameworks = skillset.frameworks.ruby.sort().join(" ");
  const cssLibraries = skillset.libraries.css.sort().join(" ");
  const jsLibraries = skillset.libraries.js.join(" ");
  const databases = skillset.databases.join(" ");
  const paradigms = skillset.paradigms.sort().join(" ");
  const tools = skillset.tools.join(" ");

  return (
    <>
      <h2 className="resume-subhead">Technical skills</h2>
      <section className="resume-section" id="skills">
        <p className="skill-type">
          <FontAwesomeIcon icon={faCode} />
          <span className="display-lg"> Languages</span>
        </p>
        <p className="skillset">{languages}</p>
        <p className="skill-type">
          <FontAwesomeIcon icon={faShareNodes} />
          <span className="display-lg"> Frameworks</span>
        </p>
        <p className="skillset">
          {jsFrameworks} {rubyFrameworks}
        </p>
        <p className="skill-type">
          <FontAwesomeIcon icon={faBars} />
          <span className="display-lg"> Libraries</span>
        </p>
        <p className="skillset">
          {jsLibraries} {cssLibraries}
        </p>
        <p className="skill-type">
          <FontAwesomeIcon icon={faDatabase} />
          <span className="display-lg"> Databases</span>
        </p>
        <p className="skillset">{databases}</p>
        <p className="skill-type">
          <FontAwesomeIcon icon={faShapes} />
          <span className="display-lg"> Paradigms</span>
        </p>
        <p className="skillset">{paradigms}</p>
        <p className="skill-type">
          <FontAwesomeIcon icon={faGear} />
          <span className="display-lg"> Tools</span>
        </p>
        <p className="skillset">{tools}</p>
      </section>
    </>
  );
}

export default Skillset;
