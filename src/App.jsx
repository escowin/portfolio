import React, { useState, Suspense, lazy } from "react";
import "./assets/css/App.css";

import Header from "./components/Header";
import About from "./pages/About";
// Lazy load heavy components for better performance
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("");

  return (
    <div className="body">
      <Header setSelectedPortfolio={setSelectedPortfolio} />
      {/* id changes based on navigation link */}
      <main id={selectedPortfolio.toLowerCase()}>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          {(() => {
            switch(selectedPortfolio) {
              case "About":
                return <About />;
              case "Featured":
              case "Frontend":
              case "Backend":
              case "Fullstack":
                return <Portfolio selectedPortfolio={selectedPortfolio} />;
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
