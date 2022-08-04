import React, { useState } from "react";

// Passed down props:
// - App | <Projects currentCategory={currentCategory}/>
// - ProjectList | <PhotoList category={currentCategory.name}/>

// can now pass (props) or destructure props as ({ category }) (see Projects js:42). props.category value passed down from Projects as currentCategory.name
const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: "escowin-art",
            category: "solo-work",
            description: "professional portfolio designed only with html and css.",
        },
        {
            name: "readme-generator",
            category: "solo-work",
            description: "built with node.js, generates readme.md's via cli prompts.",
        },
        {
            name: "css-portfolio",
            category: "solo-work",
            description: "portfolio built only with html & css",
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
        <div>
            <div className="flex-row">
                {/* maps over images in PhotoList */}
                {currentPhotos.map((image, i) => (
                    <img
                     // .default where the image has been saved. default must be invoked to render image.
                     src={require(`../../assets/images/${category}/${i}.jpg`).default}
                     alt={image.name}
                     className="project-screenshot"
                     //  key must be unique string. key assigned image's name
                     key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};
// ** pause: 20.3.5 | bug, contents of all components do not render **

export default PhotoList;