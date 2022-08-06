import React, { useState } from 'react';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Resume from './components/Resume';
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

  // SPA render | Contact
  const [contactSelected, setContactSelected] = useState(false);

  // SPA | About
  const [aboutSelected, setAboutSelected] = useState(true);
  // spa render all nav links:
  // - solo & collab are under Projects
  // - about & contact are under Profile
  // - resume stands alone

  return (
    <body>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory} 
       aboutSelected={aboutSelected}
       setAboutSelected={setAboutSelected}
       contactSelected={contactSelected}
       setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <> 
            <Projects currentCategory={currentCategory} />
          </>
        ) : (
        <Profile/>
        )};
        <Resume/>
      </main>
      <Footer/>
    </body>
  );
}

export default App;
