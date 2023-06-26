import "../assets/css/about.css";
import profilePic from "../assets/images/profile-pic.jpg";
import Contact from "../components/Contact";
import portfolioData from "../assets/data";

function About() {
  const { name } = portfolioData.info;
  return (
    <section className="section" id="about">
      <article id="profile-pic-wrapper">
        <img src={profilePic} id="profile-pic" alt="profile pic" />
      </article>
      <article id="profile-text">
        <h2>{name}</h2>
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
