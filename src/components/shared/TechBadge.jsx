import React from 'react';

function TechBadge({ technology, category, size = 'medium' }) {
  return (
    <span 
      className={`tech-badge tech-badge--${category} tech-badge--${size}`}
      title={`${technology} (${category})`}
    >
      {technology}
    </span>
  );
}

export default TechBadge;
