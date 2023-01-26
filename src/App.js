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
        {selectedPortfolio === "About" ? (
          <About />
        ) : selectedPortfolio === "Frontend" ? (
          <Portfolio selectedPortfolio={selectedPortfolio} />
        ) : selectedPortfolio === "Backend" ? (
          <Portfolio selectedPortfolio={selectedPortfolio} />
        ) : selectedPortfolio === "Fullstack" ? (
          <Portfolio selectedPortfolio={selectedPortfolio} />
        ) : selectedPortfolio === "Resume" ? (
          <Resume />
        ) : (
          <div>Please select a portfolio</div>
        )}
      </main>
    </div>
  );
}

export default App;
