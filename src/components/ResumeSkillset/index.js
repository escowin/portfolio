import "./index.css";

function Skillset() {
  const skillset = {
    languages: ["javascript",  "graphql", "sql", "css", "html", "ruby",],
    libraries: {
      css: ["bootstrap"],
      js: [
        "bcrypt",
        "day",
        "handlebars",
        "inquirer",
        "jquery",
        "redux",
        "sequelize",
        "mongoose",
        "webpack",
      ],
    },
    frameworks: {
      js: ["node", "express", "jest", "react"],
      ruby: ["rails"],
    },
    databases: [
      "jawsdb",
      "mysql",
      "mongodb",
      "postgresql",
      "sqlite",
    ],
    paradigms: [
      "mvc",
      "oop",
      "orm",
      "odm",
      "pwa",
      "rwd",
      "spa",
      "tdd",
      "nosql",
    ],
    tools: [
      "api",
      "git",
      "jwt",
      "npm",
      "heroku",
      "insomnia",
      "apollo\u2009graphql",
      "wordpress",
    ],
  };

  const languages = skillset.languages.toString().replace(/,/g, " ");
  const jsFrameworks = skillset.frameworks.js
    .sort()
    .toString()
    .replace(/,/g, " ");
  const rubyFrameworks = skillset.frameworks.ruby
    .sort()
    .toString()
    .replace(/,/g, " ");
  const cssLibraries = skillset.libraries.css
    .sort()
    .toString()
    .replace(/,/g, " ");
  const jsLibraries = skillset.libraries.js
    .sort()
    .toString()
    .replace(/,/g, " ");
  const databases = skillset.databases.sort().toString().replace(/,/g, " ");
  // const paradigms = skillset.paradigms.sort().toString().replace(/,/g, " ");
  const tools = skillset.tools.toString().replace(/,/g, " ");

  return (
    <>
      <h2 className="resume-subhead">Technical skills</h2>
      <section className="resume-section" id="skills">
        <p>Languages</p> <p className="skillset">{languages}</p>
        <p>Frameworks</p> <p className="skillset">{jsFrameworks} {rubyFrameworks}</p>
        <p>Libraries</p> <p className="skillset">{cssLibraries} {jsLibraries}</p>
        <p>Databases</p> <p className="skillset">{databases}</p>
        {/* <p>Paradigms</p> <p className="skillset">{paradigms}</p> */}
        <p>Tools</p> <p className="skillset">{tools}</p>
      </section>
    </>
  );
}

export default Skillset;
