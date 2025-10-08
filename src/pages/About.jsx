import "../assets/css/about.css";
import profilePic from "../assets/img/profile-pic.jpg";
import Contact from "../components/Contact";
import portfolioData from "../assets/data";

function About() {
  const { name, bio } = portfolioData.info;
  return (
    <section className="section" id="about">
      <article id="profile-pic-wrapper">
        <img src={profilePic} id="profile-pic" alt="profile pic" className="rounded--full" />
      </article>
      <article id="profile-text">
        <h2 className="heading heading--secondary">{name}</h2>
        <Contact />
      </article>

      <article id="bio">
        {bio.map((text, i) => (
          <p key={i} className="text">{text}</p>
        ))}
      </article>
    </section>
  );
}

export default About;
