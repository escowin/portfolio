import React, { useState, Suspense, lazy } from "react";
import "./assets/css/App.css";

import Header from "./components/shared/Header";
import { useMainBackgroundFromPortfolio } from "./hooks/useMainBackgroundFromPortfolio";
import About from "./pages/About";
// Lazy load heavy components for better performance
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  const { mainBackgroundStyle, setPortfolioBackgroundProjectId } =
    useMainBackgroundFromPortfolio(selectedPortfolio);

  const layoutClass = () => {
    // use switch case, default is portfolio-layout. return app-content if About, Resume

    switch (selectedPortfolio) {
      case "About":
        return "app-content";
      case "Resume":
        return "app-content";
      default:
        return "portfolio-layout";
    }
  }

  return (
    <div className="body">
      <Header setSelectedPortfolio={setSelectedPortfolio} />
      {/* id changes based on navigation link */}
      {/* classname `portfolio-layout` is added if the user is on Frontend, Backend, or Fullstack */}
      <main
        id={selectedPortfolio.toLowerCase()}
        className={layoutClass()}
        style={mainBackgroundStyle}
      >
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          {(() => {
            switch(selectedPortfolio) {
              case "About":
                return <About />;
              case "Featured":
              case "Frontend":
              case "Backend":
              case "Fullstack":
                return (
                  <Portfolio
                    selectedPortfolio={selectedPortfolio}
                    onPortfolioBackgroundProjectIdChange={
                      setPortfolioBackgroundProjectId
                    }
                  />
                );
              case "Resume":
                return <Resume />;
              default:
                return <About />;
            }
          })()}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
