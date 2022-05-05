import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#solo-work">Solo Work</a></li>
        <li><a href="#collaborations">Collaborations</a></li>
        <li><a href="https://github.com/escowin" target="_blank" rel="noreferrer noopener">Github Repo</a></li>
        <li><a href="#resume">Resumė</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;