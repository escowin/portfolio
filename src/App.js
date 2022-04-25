import React from 'react';
import './index.css';
import Project from './components/Project';
import Header from './components/Header';
import About from './components/About';
// import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Project></Project>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
