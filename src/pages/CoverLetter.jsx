// SEQUENCE
// 1. Import libraries and dependencies
// 2. Define the CoverLetter component function
// 3. Set up state management variables
// 4. User input tr

import { useState } from "react";
import "../assets/css/cover-letter.css";

function CoverLetter() {
  const [formState, setFormState] = useState({});
  const fields = ["company", "address", "city", "state"];
  console.log(formState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value.trim()
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");

    try {
      console.log(formState);
    } catch (err) {
      console.error(err);
    }
  };

  const coverLetter = {
    me: {
      name: "Edwin m. escobar",
      address: "3203 Northeast Dr",
      cityState: "Austin, TX 78723",
      phone: "949.735.9509",
      email: "edwin@escowinart.com",
    },
    date: new Date().toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Chicago",
    }),
    company: {
      hrManager: "hiring manager",
      name: formState.company,
      address: formState.address,
      city: formState.city,
      state: formState.state,
    },
    body: [
      // "Going through the job hunting rounds, I saw your Front End Developer position posted on Indeed and it immediately caught my eye. My friend who owns Vishions Smoke Shop off Red River can attest, I am a fan of Hometown Hero's products. My mental & physical state has noticeably improved over the years.",
      // "I am at the early years of my tech career looking for a developer position that allows me to combine my programming knowledge, fine arts background, and my interpersonal skills I've developed in my education career & rowing because I want to enjoy doing what I do.",
      // "I write scalable dry code to make life easier. Troubleshooting application development with various web dev stacks has elucidated paths to make this possible by learning how to automate processes through programming.",
      // `I would like to discuss & demonstrate my abilities as a viable candidate for this position.`,
      // "My submitted resume, portfolio, and recommendation letter provide overviews of my experience, skill, and professionalism, respectively.",
      "I am writing to express my genuine interest in the {job} position, excited to contribute my programming skills, fine arts background, and interpersonal abilities to a role that encourages growth and innovation.",
      "In my spare time, I like writing aesthetically pleasing DRY MERN stack applications that utilize GraphQL, built though Test Driven Development, to automate tasks algorithmically thereby enhancing overall efficiency in my work & personal life.",
      "Over the past year, I have worked as a support engineer, gaining valuable experience in reading error stacks, deciphering documentation, and swiftly troubleshooting issues. My ability to communicate complex technical matters in lay terms has proven essential in fostering positive client relationships. This experience has not only refined my technical skills but also enhanced my problem-solving abilities.",
      "The tech stack involved in this role perfectly aligns with my skill set and regular use of the role's technologies. I am enthusiastic about the opportunity to bring my unique blend of technical expertise, creativity, and communication skills to your team. Thank you for considering my application. I look forward to the possibility of discussing how my background and skills align with your team's goals."
    ],
  };

  const recLetter = {
    body: [
      "To whom it may concern,",
      "I am writing this letter of recommendation on behalf of Edwin Escobar, who has served as a central grader under my supervision at 2u. Previously a student and now a grader for the full stack web development program, I have had the pleasure of working closely with Edwin Escobar for 4 months now as his lead, and a year as a colleague. I am confident in his abilities, work ethic, and dedication to a career in software development.",
      "In his role as a central grader, Edwin Escobar has consistently demonstrated a strong understanding of web development, coding, and related technical skills.Their knowledge in these fields has been crucial in fairly analyzing and grading the work of the student's assignment. Edwin Escobar has repeatedly demonstrated remarkable problem-solving skills, attention to detail, and a sharp eye for spotting mistakes or opportunities for development in student work.",
      "In addition to his technical expertise, Edwin Escobar is distinguished by his capacity for teamwork and ability to meet project deadlines. When giving students constructive criticism, Edwin Escobar regularly exemplifies tolerance, empathy, and clarity. This promotes a pleasant learning atmosphere and motivates students to advance his skills.",
      "I wholeheartedly recommend Edwin Escobar. I am confident that his exceptional technical skills, strong communication abilities, and collaborative nature will make a significant contribution to any professional community he become a part of. If you have any further questions or require additional information, please do not hesitate to contact me.",
      "Thank you for considering Edwin Escobar's application. I am certain that he will thrive in your company and make notable contributions.",
    ],
    outro: [
      "Sincerely,",
      "Stephanie Cortez",
      "Senior Grader Central Grading",
      "2U, Inc. EdX",
    ],
  };
  return (
    <>
      <section id="form-section">
        <form onSubmit={handleFormSubmit} id="cover-letter-form">
          <h2>Cover letter form</h2>
          {fields.map((field, i) => (
            <label key={i} htmlFor={field}>
              {field}
              <input name={field} id={field} onChange={handleChange} />
            </label>
          ))}
          <button type="submit">submit</button>
        </form>
      </section>
      <section id="contact-section">
        <h3>{coverLetter.me.name}</h3>
        <p>{coverLetter.me.address}</p>
        <p>{coverLetter.me.cityState}</p>
        <p>{coverLetter.me.phone}</p>
        <p>{coverLetter.me.email}</p>
      </section>

      <section id="date">
        <p>{coverLetter.date}</p>
      </section>

      <section id="company-section">
        <h3>Dear {coverLetter.company.hrManager},</h3>
        <p>{coverLetter.company.name}</p>
        <p>{coverLetter.company.address},</p>
        <p>
          {coverLetter.company.city}, {coverLetter.company.state}
        </p>
      </section>

      <section className="letter" id="body-section">
        {coverLetter.body.map((string, i) => (
          <p key={i}>{string}</p>
        ))}
        <p>Thank you,</p>
        <p>Edwin M. Escobar</p>
      </section>

      <div className="pagebreak"></div>

      <section className="letter" id="cover-letter">
        <h3>Recommendation letter</h3>
        {recLetter.body.map((string, i) => (
          <p key={i}>{string}</p>
        ))}
      </section>

      <section className="letter-details">
        {recLetter.outro.map((string, i) => (
          <p key={i}>{string}</p>
        ))}
      </section>
    </>
  );
}

export default CoverLetter;
