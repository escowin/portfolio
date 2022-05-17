import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#solo-work">Solo<span className="mobile-hide"> Work</span></a></li>
        <li><a href="#collaborations">Collab<span className="mobile-hide">oration</span>s</a></li>
        <li><a href="https://github.com/escowin" target="_blank" rel="noreferrer noopener">Github<span className="mobile-hide"> Repo</span></a></li>
        <li><a href="#resume">Resumė</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;