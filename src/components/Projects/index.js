import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';

// pass down props (<App> | <Projects currenCategory={currentCategory}/>)

function Projects({ currentCategory }) {
    // destructure name & description properties from currentCategory
    const { name, description } = currentCategory;

    return (
        <section className="section">
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            {/* prop drilling. passing down currentCategory.name as a prop into PhotoList component from Projects. */}
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Projects;