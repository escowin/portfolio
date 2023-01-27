import "./index.css";
import React, { useState } from 'react';


function Header(props) {
  const portfolios = ["Frontend", "Backend", "Fullstack"];
  const [selected, setSelected] = useState(null);

  function handleClick(portfolio) {
    props.setSelectedPortfolio(portfolio);
    setSelected(portfolio);
  }

  return (
    <header>
      <article id="header">
        <h1>Edwin m. escobar</h1>
        <p>software engineer</p>
      </article>
      <nav>
        <ul id="navigation">
          <li onClick={() => handleClick("About")} className={'About' === selected ? 'selected' : ''}>About</li>
          {portfolios.map((portfolio, index) => (
            <li key={index} onClick={() => handleClick(portfolio)} className={portfolio === selected ? 'selected' : ''}>{portfolio}</li>
          ))}
          <li onClick={() => handleClick("Resume")} className={'Resume' === selected ? 'selected' : ''}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
