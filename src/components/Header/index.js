// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import "./index.css";

// Nav component state lifted to parent component, Apps.js

function Header(props) {
  const portfolios = ["Frontend", "Backend", "Fullstack"];

  function handleClick(portfolios) {
    props.setSelectedPortfolio(portfolios);
  }
  return (
    <header>
      <article id="header">
        <h1>Edwin m. escobar</h1>
        <p>software engineer</p>
      </article>
      <nav>
        <ul id="navigation">
          <li>About</li>
          {portfolios.map((portfolio) => (
            <li onClick={() => handleClick(portfolio)}>{portfolio}</li>
          ))}
          <li className="nav-link left-btn">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
