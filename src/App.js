import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

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
            return <Portfolio selectedPortfolio={"Frontend"} />;
        }
      })()}
      </main>
    </div>
  );
}

export default App;
