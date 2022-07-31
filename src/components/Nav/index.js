import React from "react";

function Nav() {
    const catagories = [
        {
            name: "Solo work",
            description: "solo projects",
        },
        {
            name: "Collaborations",
            description: "collaborative apps"
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header>
            <h1 id="header">Edwin m. escobar the react portfolio</h1>
            <nav id="navigation">
                <ul>
                    <li className="nav-link">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-link">
                        <span>Contact</span>
                    </li>
                    {catagories.map((category) => (
                        <li className="nav-link" key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                    <li className="nav-link">
                        <a href=".">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;