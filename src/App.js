import React from 'react';
import './index.css';
import Projects from './components/Projects';
import Header from './components/Header';
import About from './components/About';
// import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div id='big-container'>
      <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
