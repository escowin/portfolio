import "../assets/css/resume.css";
import "../assets/css/references.css";

function References() {
  const refs = [
    {
      name: "name",
      phone: "phone number",
      email: "email",
      company: "company",
      role: "role",
      type: "type"
    },
    {
      name: "Ngoc bich vu",
      phone: "714.251.2245",
      email: "Ngvu@deloitte.com",
      company: "Deloitte",
      role: "Employee",
      type: "Personal"
    },
    {
      name: "Amanda crawford",
      phone: "424.442.0973",
      email: "acrawford@2u.com",
      company: "2U",
      role: "Lead Learning Assistant",
      type: "Professional",
      relationship: "Supervisor"
    },
    {
      name: "Slavic andreev",
      phone: "503.853.2884",
      email: "writeslavic@gmail.com",
      company: "2U",
      role: "Instructor",
      type: "Professional",
      relationship: "Supervisor"
    },
    {
      name: "Voltaire herrera",
      phone: "512.940.9546",
      email: "vrod1205@gmail.com",
      company: "VVH Financial",
      role: "Agent",
      type: "Professional",
      relationship: "Employeer"
    },
    {
      name: "Glenda gadlin",
      phone: "682.703.0468",
      email: "ggadlin@texanscan.org",
      company: "Austin can academy",
      role: "Site cordinator",
      type: "Professional",
      relationship: "Supervisor"
    },
  ];

  return (
    <>
      <h2 className="resume-subhead">Professional references</h2>
      <section className="resume-section" id="ref-section">
        {refs.map((ref, i) => (
          <article key={i} className="ref row">
             {/* <p>{ref.type}</p> */}
           <h3 className="ref-name">{ref.name}</h3>
            <p>{ref.company}</p>
            {/* <p>{ref.role}</p> */}
            <p>{ref.email}</p>
            {/* <p>{ref.phone}</p> */}
          </article>
        ))}
      </section>
    </>
  );
}

export default References;
