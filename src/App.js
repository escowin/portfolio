import React, { useState } from "react";
import "./assets/css/App.css";

import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
// import CoverLetter from "./components/CoverLetter";

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("");

  return (
    <div className="body">
      <Header setSelectedPortfolio={setSelectedPortfolio} />
      <main>
      {(() => {
        switch(selectedPortfolio) {
          case "About":
            return <About />;
          case "Frontend":
          case "Backend":
          case "Fullstack":
            return <Portfolio selectedPortfolio={selectedPortfolio} />;
          case "Resume":
            return <Resume />;
          default:
            return <Resume />;
        }
      })()}
      </main>
    </div>
  );
}

export default App;
