import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <div id="header">
        <header className='flex'>
            <h1><a href="/">Edwin m. Escobar</a></h1>
        </header>
        <Navigation></Navigation>
    </div>
  );
}

export default Header;