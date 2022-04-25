import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <div id="header">
        <header className='flex'>
            <h1><a href="/">Edwin M. Escobar</a></h1>
            <p>The react portfolio</p>
        </header>
        <Navigation></Navigation>
    </div>
  );
}

export default Header;