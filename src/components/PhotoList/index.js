import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Passed down props:
// - App | <Projects currentCategory={currentCategory}/>
// - ProjectList | <PhotoList category={currentCategory.name}/>

// can now pass (props) or destructure props as ({ category }) (see Projects js:42). props.category value passed down from Projects as currentCategory.name
const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: "professional-portfolio",
            category: "solo-work",
            description: "the first iteration of a professional portfolio.",
            code: "html, css",
            repo: "https://github.com/escowin/professional-portfolio",
            liveurl: "https://escowin.github.io/professional-portfolio/",
        },
        {
            name: "coding-quiz",
            category: "solo-work",
            description: "a quiz powered by vanilla javascript",
            code: "html, css, javascript",
        },
        {
            name: "readme-generator",
            category: "solo-work",
            description: "generate a readme.md via command-line prompts",
            code: "javascript, es6, node.js"
        },
        {
            name: "raven-home",
            category: "collaborations",
            description: "front end widgets",
        },
        {
            name: "auction house",
            category: "collaborations",
            description: "mern stack",
        },
        {
            name: "smart-home",
            category: "collaborations",
            description: "full-stack interactive app",
        },
    ]);

    // filterMethod | only photos with the selected category appear.
    // - goes through easy photo in array.
    // - finds every photo that matches the selected category.
    // - if condition matches, photo is returned in an array assigned to currentPhotos.
    // - allows map to render each photo that matches selected category.
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div className="projects-grid">
            {/* maps over images in PhotoList */}
            {currentPhotos.map((image, i) => (
                <div classname="project" key={image.name}>
                    <img
                        // .default where the image has been saved. default must be invoked to render image.
                        src={require(`../../assets/images/apps/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="project-screenshot"
                        //  key must be unique string. key assigned image's name
                        
                    />
                    <h4 className="project-title">
                        <span className="underline">
                            {capitalizeFirstLetter(image.name)}
                        </span>
                        <span className="project-urls underline">
                            <a href={image.repo}>repo</a> - <a href={image.liveurl}>live url</a>
                        </span>
                    </h4>
                 
                    <p className="app-description">-{capitalizeFirstLetter(image.description)}</p>
                    <p className="app-code">- {image.code}</p>
                </div>
            ))}
        </div>

    );
};

export default PhotoList;