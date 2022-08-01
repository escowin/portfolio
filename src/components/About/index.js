import React from 'react';
import profilePic from '../../assets/images/profile-pic.jpg';

function About() {
    return (
        <section className='section'>
            <h1 className='subheader' id="about">About</h1>
            <article id='about-container'>            
                <img
                 src={profilePic} 
                 id="profile-pic" 
                 style={{ width: "25%" }} 
                 alt="profile pic" 
                />
                <div id='about-text'>
                    <h3>Edwin m. escobar</h3>
                    <p>Full-stack web developer</p>
                </div>          
            </article>

        </section>
    );
}

export default About;