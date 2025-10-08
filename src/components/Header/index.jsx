import React, { useState } from "react";
import portfolioData from "../../assets/data";
import { User, Star, Monitor, Server, Layers } from "lucide-react";

function Header(props) {
  const { name, occupation } = portfolioData.info;
  const portfolios = ["Featured", "Frontend", "Backend", "Fullstack"];
  const [selected, setSelected] = useState(null);

  // Icon mapping for navigation items
  const iconMap = {
    "About": User,
    "Featured": Star,
    "Frontend": Monitor,
    "Backend": Server,
    "Fullstack": Layers
  };

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
            <User size={20} className="nav-icon" />
            About
          </li>
          {portfolios.map((portfolio, index) => {
            const IconComponent = iconMap[portfolio];
            return (
              <li
                key={index}
                onClick={() => handleClick(portfolio)}
                className={`link link--hover ${portfolio === selected ? "selected" : ""}`}
              >
                <IconComponent size={20} className="nav-icon" />
                {portfolio}
              </li>
            );
          })}
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
