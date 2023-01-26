import "./index.css";

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
          <li onClick={() => handleClick("About")}>About</li>
          {portfolios.map((portfolio) => (
            <li onClick={() => handleClick(portfolio)}>{portfolio}</li>
          ))}
          <li onClick={() => handleClick("Resume")}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
