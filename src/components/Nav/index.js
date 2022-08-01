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
        <>
            <header id="header">
                <h1>Edwin m. escobar</h1>
                <p><a data-testid="link" href="/">The react portfolio</a> <span role="img" aria-label="camera"> 📸</span> </p>
            </header>
            <nav id="navigation">
                <ul>
                    <li className="nav-link">
                        <a data-testid="about" href="#about">About</a>
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
        </>
    );
}

export default Nav;