import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav/>
      <main>
        <About/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
