import React from 'react';
import coverImage from '../../assets/cover/cover.jpg';

function About() {
    return (
        <section className='section'>
            <h1 id="about">who am I?</h1>
            <img src={coverImage} className="pic" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;