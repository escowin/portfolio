import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="/">Solo Work</a></li>
        <li><a href="/">Collaborations</a></li>
        <li><a href="https://github.com/escowin" target="_blank" rel="noreferrer noopener">Github Repo</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;