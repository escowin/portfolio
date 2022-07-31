import React from 'react';
import './App.css';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <main>
          <About/>
      </main>
    </div>
  );
}

export default App;
