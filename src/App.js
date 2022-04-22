import React from 'react';
import './index.css';
import Project from './components/Project';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
