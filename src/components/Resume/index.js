import React from "react";


function Resume() {
  return (
    <>
      <section className="sections" id="resume-header">
        <h2 id="projects-header">Resumė</h2>
      </section>
      <section className="sections" id="resume-exp"></section>
      <section className="sections" id="resume-edu">
          <h3>Education</h3>
          <article>
              <div>
                <p className="left">Univeristy of Texas at Austin</p>
                <p>Coding Boot Camp Certificate</p>
                <p className="left">California State Univeristy - Fullerton</p>
                <p>Undergraduate - College Dropout</p>
                <p className="left">Orange Coast College</p>
                <p>Undergraduate - Associate's Degree</p>
              </div>
          </article>
      </section>
      <section className="sections" id="resume-ext"></section>
      <section className="sections" id="resume-footer"></section>
    </>
  );
}

export default Projects;
