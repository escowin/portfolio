import React, { useState } from "react";
import portfolioData from "../../assets/data";

function Header(props) {
  const { name, occupation } = portfolioData.info;
  const portfolios = ["Frontend", "Backend", "Fullstack"];
  const [selected, setSelected] = useState(null);

  function handleClick(portfolio) {
    props.setSelectedPortfolio(portfolio);
    setSelected(portfolio);
  }

  return (
    <header>
      <article id="header">
        <h1 className="heading heading--primary">{name}</h1>
        <p className="text text--muted">{occupation}</p>
      </article>
      <nav>
        <ul id="navigation" className="flex flex--between">
          <li
            onClick={() => handleClick("About")}
            className={`link link--hover ${"About" === selected ? "selected" : ""}`}
          >
            About
          </li>
          {portfolios.map((portfolio, index) => (
            <li
              key={index}
              onClick={() => handleClick(portfolio)}
              className={`link link--hover ${portfolio === selected ? "selected" : ""}`}
            >
              {portfolio}
            </li>
          ))}
          {/* <li
            onClick={() => handleClick("Resume")}
            className={`link link--hover ${"Resume" === selected ? "selected" : ""}`}
          >
            Resumė
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
