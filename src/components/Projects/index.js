import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';

// pass down props (<App> | <Projects currenCategory={currentCategory}/>)

function Projects({ currentCategory }) {
    // destructure name & description properties from currentCategory
    const { name, description } = currentCategory;

    return (
        <section className="section">
            <h1 className="subheader">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Projects;