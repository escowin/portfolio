import React from "react";
import Contact from "../Contact";
import profilePic from "../../assets/images/profile-pic.jpg";
import './index.css';

function About() {
  return (
    <section className="section">
      <h2 className="subheader" id="about">
        About <span className="description">Edwin m. escobar</span>
      </h2>
      <article id="about-container">
        <img
          src={profilePic}
          id="profile-pic"
          style={{ width: "25%" }}
          alt="profile pic"
        />
        <div id="about-text">
          <h3>Full-stack web developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sit
            voluptatem dolorum. Illo perferendis deleniti dolorem deserunt
            dignissimos adipisci dicta et quisquam distinctio nesciunt?
            Dignissimos.
          </p>
        </div>
      </article>

      <Contact/>
    </section>
  );
}

export default About;
