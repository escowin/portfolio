import "./index.css";
import profilePic from "../../assets/images/profile-pic.jpg";

import Contact from "../Contact";

function About() {
  return (
    <section className="section" id="about">
      <article>
        <img src={profilePic} id="profile-pic" alt="profile pic" />
      </article>
      <article id="profile-text">
        <h2>Edwin m. escobar</h2>
        <Contact />
      </article>

      <article id="bio">
        <p>
          I'm a MERN stack developer. I utilize my fine arts background & web
          dev knowledgeto create aesthetically responsive applications.
        </p>

        <p>
          As a recent graduate, I am eager to pursue new opportunities for
          career development and growth. With that in mind, I am
          actively seeking immediate employment here in Austin,
          TX.
        </p>

        <p>Take a look at my portfolio to evaluate my skillset.</p>
      </article>
    </section>
  );
}

export default About;
