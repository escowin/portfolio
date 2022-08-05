import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  // Nav derived
  const [categories] = useState([
    {
      name: "solo-work",
      description: "projects built by me",
    },
    {
      name: "collaborations",
      description: "team-built apps",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory} 
      />
      <main>
        <About/>
        <Projects currentCategory={currentCategory} />
      </main>
    </div>
  );
}

export default App;
