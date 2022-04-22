import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <div id="header">
        <header className='flex'>
            <h1>Edwin Escobar</h1>
            <p>Full Stack Web Developer</p>
        </header>
        <Navigation></Navigation>
    </div>
  );
}

export default Header;