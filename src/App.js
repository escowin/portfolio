import React, { useState } from "react";
import './App.css'

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


function App() {
  const [selectedPortfolio, setSelectedPortfolio ] = useState("")

  return (
    <div className='body'>
      <Header setSelectedPortfolio={setSelectedPortfolio}/>
      <main>
        <Portfolio selectedPortfolio={selectedPortfolio}/>
      </main>
    </div>
  );
}

export default App;
