import React from 'react';
import TechBadge from '../TechBadge';
import { parseTechnologies } from '../../utils/techCategories';
import './index.css';

function TechStack({ 
  languages, 
  libraries, 
  database, 
  size = 'medium',
  showLabels = true,
  maxItems = null 
}) {
  // Parse all technology strings
  const allTechnologies = [
    ...parseTechnologies(languages),
    ...parseTechnologies(libraries),
    ...parseTechnologies(database)
  ];

  // Limit items if maxItems is specified
  const displayTechnologies = maxItems ? allTechnologies.slice(0, maxItems) : allTechnologies;
  const hasMore = maxItems && allTechnologies.length > maxItems;

  return (
    <div className="tech-stack">
      {showLabels && (
        <div className="tech-stack-header">
          <span className="tech-stack-title text text--sm">Technologies</span>
        </div>
      )}
      
      <div className="tech-badges tech-badges--compact">
        {displayTechnologies.map((tech, index) => (
          <TechBadge
            key={`${tech.name}-${index}`}
            technology={tech.name}
            category={tech.category}
            size={size}
          />
        ))}
        
        {hasMore && (
          <span className="tech-more text text--sm text--muted">
            +{allTechnologies.length - maxItems} more
          </span>
        )}
      </div>
    </div>
  );
}

export default TechStack;
