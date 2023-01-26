import React, { useState } from "react";
import './App.css'

import Header from "./components/Header";
import Portfolio from "./components/Portfolio"


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
