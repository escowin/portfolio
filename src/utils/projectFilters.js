// Utility functions for filtering and sorting projects

/**
 * Filter projects based on search term, technology, and complexity
 */
export function filterProjects(projects, filters) {
  const { searchTerm, tech, complexity } = filters;
  
  return projects.filter(project => {
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesName = project.id.toLowerCase().includes(searchLower);
      const matchesDescription = project.description?.toLowerCase().includes(searchLower) || false;
      const matchesLanguages = project.languages?.toLowerCase().includes(searchLower) || false;
      const matchesLibraries = project.libraries?.toLowerCase().includes(searchLower) || false;
      
      if (!matchesName && !matchesDescription && !matchesLanguages && !matchesLibraries) {
        return false;
      }
    }
    
    // Technology filter
    if (tech) {
      const techLower = tech.toLowerCase();
      const matchesTech = 
        project.languages?.toLowerCase().includes(techLower) ||
        project.libraries?.toLowerCase().includes(techLower) ||
        project.database?.toLowerCase().includes(techLower) ||
        false;
      
      if (!matchesTech) {
        return false;
      }
    }
    
    // Complexity filter
    if (complexity) {
      if (project.complexity !== complexity) {
        return false;
      }
    }
    
    return true;
  });
}

/**
 * Sort projects based on sort criteria
 */
export function sortProjects(projects, sortOptions) {
  const { sortBy, sortOrder } = sortOptions;
  
  if (!sortBy) {
    return projects;
  }
  
  return [...projects].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'name':
        aValue = a.id.toLowerCase();
        bValue = b.id.toLowerCase();
        break;
      case 'complexity':
        const complexityOrder = { 'low': 1, 'medium': 2, 'high': 3 };
        aValue = complexityOrder[a.complexity] || 0;
        bValue = complexityOrder[b.complexity] || 0;
        break;
      case 'year':
        aValue = parseInt(a.year) || 0;
        bValue = parseInt(b.year) || 0;
        break;
      default:
        return 0;
    }
    
    if (aValue < bValue) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

/**
 * Get all unique technologies from projects for filter options
 */
export function getUniqueTechnologies(projects) {
  const technologies = new Set();
  
  projects.forEach(project => {
    // Add languages
    if (project.languages) {
      project.languages.split(' ').forEach(tech => {
        if (tech.trim()) technologies.add(tech.trim());
      });
    }
    
    // Add libraries
    if (project.libraries) {
      project.libraries.split(' ').forEach(tech => {
        if (tech.trim()) technologies.add(tech.trim());
      });
    }
    
    // Add database
    if (project.database) {
      project.database.split(' ').forEach(tech => {
        if (tech.trim()) technologies.add(tech.trim());
      });
    }
  });
  
  return Array.from(technologies).sort();
}

/**
 * Get project statistics
 */
export function getProjectStats(projects) {
  const stats = {
    total: projects.length,
    byComplexity: { low: 0, medium: 0, high: 0 },
    byCategory: { Frontend: 0, Backend: 0, Fullstack: 0 },
    withLiveUrl: 0,
    highlighted: 0
  };
  
  projects.forEach(project => {
    // Complexity stats
    if (project.complexity) {
      stats.byComplexity[project.complexity]++;
    }
    
    // Category stats (if available)
    if (project.category) {
      stats.byCategory[project.category]++;
    }
    
    // Live URL stats
    if (project.liveUrl) {
      stats.withLiveUrl++;
    }
    
    // Highlighted stats
    if (project.highlight) {
      stats.highlighted++;
    }
  });
  
  return stats;
}
