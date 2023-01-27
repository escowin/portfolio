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
          I specialize in MERN stack application development, utilizing my
          background in fine arts to create visually striking frontend design.
        </p>

        <p>
          As an entry-level professional, I am eager to pursue new opportunities
          for professional development and growth in my career. With that in
          mind, I am actively seeking immediate employment opportunities here in
          Austin, TX.
        </p>

        <p>Gauge my skillset through my portfolio.</p>
      </article>
    </section>
  );
}

export default About;
