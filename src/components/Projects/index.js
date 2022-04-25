import React from 'react';
import SoloWork from '../SoloWork';
import Collaborations from '../Collaborations';

function Projects() {
  return (
    <section className='sections' id='projects'>
      <h2 id="projects-header">Projects</h2>
      <SoloWork></SoloWork>
      <Collaborations></Collaborations>
    </section>
  );
}

export default Projects;