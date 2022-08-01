import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/solo-work/0.jpg";

// 20.3.3
function Projects(props) {
    const currentCategory = {
        name: 'solo work',
        description: 'solo work i do is here'
    };

    return (
        <section className="section">
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="projects-grid">
                <img
                 src={photo} 
                 alt="css portfolio"
                 className="project-screenshot"
                />
            </div>
        </section>
    );
}
// ** pause 20.3.4 | use react hooks **
export default Projects;