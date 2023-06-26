import "../assets/css/about.css";
import profilePic from "../assets/images/profile-pic.jpg";
import Contact from "../components/Contact";
import portfolioData from "../assets/data";

function About() {
  const { name, bio } = portfolioData.info;
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
        {bio.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </article>
    </section>
  );
}

export default About;
