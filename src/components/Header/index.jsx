import React, { useState, useEffect } from "react";
import portfolioData from "../../assets/data";
import { User, Star, Monitor, Server, Layers, FileText } from "lucide-react";

function Header(props) {
  const { name, occupation } = portfolioData.info;
  const portfolios = ["Featured", "Frontend", "Backend", "Fullstack"];
  const [selected, setSelected] = useState(props.selectedPortfolio || "About");

  // Icon mapping for navigation items
  const iconMap = {
    "About": User,
    "Featured": Star,
    "Frontend": Monitor,
    "Backend": Server,
    "Fullstack": Layers
  };

  // Sync selected state with props changes
  useEffect(() => {
    setSelected(props.selectedPortfolio || "About");
  }, [props.selectedPortfolio]);

  function handleClick(portfolio) {
    props.setSelectedPortfolio(portfolio);
    setSelected(portfolio);
    
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header role="banner">
      <article id="header">
        <h1 className="heading heading--primary">{name}</h1>
        <p className="text text--muted">{occupation}</p>
      </article>
      <nav role="navigation" aria-label="Main navigation">
        <ul id="navigation" className="flex flex--between" role="menubar">
          <li
            onClick={() => handleClick("About")}
            className={`link link--hover ${"About" === selected ? "selected" : ""}`}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClick("About")}
            aria-current={selected === "About" ? "page" : undefined}
          >
            <User size={20} className="nav-icon" aria-hidden="true" />
            About
          </li>
          {portfolios.map((portfolio, index) => {
            const IconComponent = iconMap[portfolio];
            return (
              <li
                key={index}
                onClick={() => handleClick(portfolio)}
                className={`link link--hover ${portfolio === selected ? "selected" : ""}`}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(portfolio)}
                aria-current={selected === portfolio ? "page" : undefined}
              >
                <IconComponent size={20} className="nav-icon" aria-hidden="true" />
                {portfolio}
              </li>
            );
          })}
          <li
            onClick={() => handleClick("Resume")}
            className={`link link--hover ${"Resume" === selected ? "selected" : ""}`}
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClick("Resume")}
            aria-current={selected === "Resume" ? "page" : undefined}
          >
            <FileText size={20} className="nav-icon" aria-hidden="true" />
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
