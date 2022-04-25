import React from 'react';
import profilePic from '../../assets/images/profile.jpg'

function About() {
    return (
      <section className='flex sections' id='about'>
        <article id='profile-pic-container'>
            <img src={profilePic} alt="profile pic" id="profile-pic" />
        </article>
        <article id='about-text'>
            <h2>Edwin M. Escobar</h2>
            <h3>Full Stack Web Developer</h3>
            <ul>
                <li>I code code thanks to UT - Austin's Coding Bootcamp.</li>
                <li><a href="https://github.com/escowin" target="_blank" rel="noreferrer noopener">Github Repo</a></li>
                <li><a href="https://www.linkedin.com/in/escowin/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
                <li><a href="mailto:edwin@escowinart.com">Email</a></li>
            </ul>
        </article>
      </section>
    );
  }
  
  export default About;