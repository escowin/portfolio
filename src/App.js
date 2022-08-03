import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  // Projects categories
  const [categories] = useState([
    {
      name: "front-end",
      description: "front-end html, css, and javascript apps",
    },
    {
      name: "back-end",
      description: "back-end apps built with node, express, sql, etc",
    },
    {
      name: "full-stack",
      description: "full-stack skills on display",
    },
    {
      name: "collaborations",
      description: "collaborative projects"
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
        <Projects currentCategory={currentCategory} />
        <About/>
      </main>
    </div>
  );
}

export default App;
