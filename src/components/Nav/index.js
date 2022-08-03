import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Nav component state lifted to parent component, Apps.js
function Nav(props) {
    // category state as an objects array
    // useState hook gives option to change categories in the future

    // New props cause components to re-render. Although the setter in App.js doesn’t cause its children to re-render, the fact that its prop changed does.
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    // updates browser tab to reflect selected category. first argument is a callback function, second argument is an array w/ single element.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    
    return (
        <>
            <header id="header">
                <h1>Edwin m. escobar</h1>
                <p>
                    <a data-testid="link" href="/">The react portfolio</a> 
                    <span role="img" aria-label="camera"> 📸</span> oh snap
                </p>
            </header>
            <nav id="navigation">
                <ul>
                    <li className="nav-link">
                        <a data-testid="about" href="#about">About</a>
                    </li>
                    <li className="nav-link">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                         // evaluates ${... === ...}, and as long as its true, the second bit of the short circuit && '...' will return
                         className={`nav-link ${currentCategory.name === category.name && 'navActive'}`}
                         key={category.name}
                        >
                            <span onClick={() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                    <li className="nav-link">
                        <a href=".">Resume</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;