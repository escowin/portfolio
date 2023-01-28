import "./index.css";
import profilePic from "../../assets/images/profile-pic.jpg";

import Contact from "../Contact";

function About() {
  return (
    <section className="section" id="about">
      <article id="profile-pic-wrapper">
        <img src={profilePic} id="profile-pic" alt="profile pic" />
      </article>
      <article id="profile-text">
        <h2>Edwin m. escobar</h2>
        <Contact />
      </article>

      <article id="bio">
        <p>
          MERN stack developer with a fine arts background. I like coding
          responsively aesthetic apps.
        </p>

        <p>
          Eager to pursue new opportunities for professional growth and
          development. With that in mind, I am actively seeking immediate
          employment here in Austin, TX.
        </p>

        <p>Take a look at my portfolio to evaluate my skillset.</p>
      </article>
    </section>
  );
}

export default About;
