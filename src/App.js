import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
    <body>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory} 
      />
      <main>
        <About/>
        <Projects currentCategory={currentCategory} />
      </main>
      <Footer/>
    </body>
  );
}

export default App;
