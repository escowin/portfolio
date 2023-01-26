// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import './index.css';

// Nav component state lifted to parent component, Apps.js
function Header() {
  // const {
  //     categories = [],
  //     setCurrentCategory,
  //     currentCategory,
  //     contactSelected,
  //     setContactSelected
  // } = props;

  // // updates browser tab to reflect selected category. first argument is a callback function, second argument is an array w/ single element.
  // useEffect(() => {
  //     document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header>
      <article id="header">
        <h1>Edwin m. escobar</h1>
        <p>software engineer</p>
      </article>
      <nav>
        <ul id="navigation">
          <li className="nav-link left-btn">About</li>
          <li className="nav-link left-btn">Frontend</li>
          <li className="nav-link left-btn">Backend</li>
          <li className="nav-link left-btn">Fullstack</li>
          <li className="nav-link left-btn">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
