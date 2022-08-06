import React from "react";
import About from "../About";
import Contact from "../Contact";
import profilePic from "../../assets/images/profile-pic.jpg";

function Profile() {
    return (
        <section className='section'>
            <h2 className='subheader' id="about">About <span className='description'>Edwin m. escobar</span></h2>
            <article id='about-container'>            
                <img
                 src={profilePic} 
                 id="profile-pic" 
                 style={{ width: "25%" }} 
                 alt="profile pic" 
                />
                <About/>
                <Contact/>
            </article>

        </section>
    );
}

export default Profile;