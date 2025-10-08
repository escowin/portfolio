import React, { useState } from "react";
import portfolioData from "../../assets/data";
import "./index.css";

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
        <h1>{name}</h1>
        <p>{occupation}</p>
      </article>
      <nav>
        <ul id="navigation">
          <li
            onClick={() => handleClick("About")}
            className={"About" === selected ? "selected" : ""}
          >
            About
          </li>
          {portfolios.map((portfolio, index) => (
            <li
              key={index}
              onClick={() => handleClick(portfolio)}
              className={portfolio === selected ? "selected" : ""}
            >
              {portfolio}
            </li>
          ))}
          {/* <li
            onClick={() => handleClick("Resume")}
            className={"Resume" === selected ? "selected" : ""}
          >
            Resumė
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
