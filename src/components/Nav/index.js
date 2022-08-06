import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Nav component state lifted to parent component, Apps.js
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // updates browser tab to reflect selected category. first argument is a callback function, second argument is an array w/ single element.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    
    return (
        <>
            <header id="header">
                <h1>The react portfolio</h1>
                <p>
                    <a data-testid="link" href="/">by edwin m. escobar</a>
                </p>
            </header>
            <nav id="navigation">
                <ul>
                    <li className="nav-link left-btn">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About
                        </a>
                    </li>
                    <li className={`nav-link ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                         // evaluates ${... === ...}, and as long as its true, the second bit of the short circuit && '...' will return
                         className={`nav-link ${currentCategory.name === category.name && !contactSelected && 'navActive'}`}
                         key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                             }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                    <li className="nav-link right-btn">
                        <a href=".">Resumė</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;