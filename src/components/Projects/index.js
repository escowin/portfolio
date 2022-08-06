import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';

// pass down props (<App> | <Projects currenCategory={currentCategory}/>)

function Projects({ currentCategory }) {
    // destructure name & description properties from currentCategory
    const { name, description } = currentCategory;

    return (
        <section className="section">
            <h1 className="subheader">{capitalizeFirstLetter(name)}<span className="description"> {capitalizeFirstLetter(description)}</span></h1>
            
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Projects;