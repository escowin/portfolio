import React, { useState } from "react";

// Projects.Photolist
// <Components /> are functions that return JSX and may use Hooks.
// .map() to return JSX a la <Nav/>
// need to know which category is selected? pass down props. 

// can now pass (props) or destructure props as ({ category }) (see Projects js:42). props.category value passed down from Projects as currentCategory.name
const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: "css-portfolio",
            category: "front-end",
            description: "professional portfolio designed only with html and css.",
        },
        {
            name: "readme-generator",
            category: "back-end",
            description: "built with node.js, generates readme.md's via cli prompts.",
        },
        {
            name: "react-portfolio",
            category: "full-stack",
            description: "portfolio built with react",
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