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
          I'm a MERN stack developer with a fine arts background. I like to code
          responsively aesthetic apps.
        </p>

        <p>
          Currently pursuing new opportunities for professional growth &
          development here in Austin, TX.
        </p>

        <p>Browse my portfolio to assess my abilities.</p>
      </article>
    </section>
  );
}

export default About;
