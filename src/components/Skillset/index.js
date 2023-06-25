import portfolioData from "../../assets/data";
import "./index.css";

function Skillset() {
  const skillset = portfolioData.skillset;

  const languages = skillset.languages.join(" ");
  const jsFrameworks = skillset.frameworks.js.sort().join(" ");
  const rubyFrameworks = skillset.frameworks.ruby.sort().join(" ");
  const cssLibraries = skillset.libraries.css.sort().join(" ");
  const jsLibraries = skillset.libraries.js.sort().join(" ");
  const databases = skillset.databases.sort().join(" ");
  // const paradigms = skillset.paradigms.sort().join(' ');
  const tools = skillset.tools.join(" ");

  return (
    <>
      <h2 className="resume-subhead">Technical skills</h2>
      <section className="resume-section" id="skills">
        <p>Languages</p> <p className="skillset">{languages}</p>
        <p>Frameworks</p>{" "}
        <p className="skillset">
          {jsFrameworks} {rubyFrameworks}
        </p>
        <p>Libraries</p>{" "}
        <p className="skillset">
          {cssLibraries} {jsLibraries}
        </p>
        <p>Databases</p> <p className="skillset">{databases}</p>
        {/* <p>Paradigms</p> <p className="skillset">{paradigms}</p> */}
        <p>Tools</p> <p className="skillset">{tools}</p>
      </section>
    </>
  );
}

export default Skillset;
