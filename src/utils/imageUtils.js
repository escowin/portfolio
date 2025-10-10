/**
 * Utility functions for dynamic image handling
 */

/**
 * Get the appropriate image path for a project based on screen size
 * @param {string} projectId - The project identifier
 * @param {string} size - The image size ('sm', 'md', 'lg')
 * @returns {string} The complete image path
 */
export const getProjectImagePath = (projectId, size = 'sm') => {
  // Use public directory path that works with Vite's base path configuration
  const basePath = '/portfolio/assets/img';
  const extension = projectId === 'pi-server' || projectId === 'crewssignment' || 
                   projectId === 'rowcalibur' || projectId === 'stroke-rate' || 
                   projectId === 'wireframe-blueprint' ? 'png' : 'jpg';
  
  return `${basePath}/${size}/${projectId}.${extension}`;
};

/**
 * Check if an image exists for a project at a specific size
 * @param {string} projectId - The project identifier
 * @param {string} size - The image size ('sm', 'md', 'lg')
 * @returns {boolean} Whether the image exists
 */
export const hasProjectImage = (projectId, size) => {
  // Define which projects have images at which sizes
  const imageMap = {
    'sm': [
      'artist-oeuvre', 'bluestrawberry', 'caesar-cipher', 'crewssignment', 
      'escowinart', 'fitness-logbook', 'job-tracker', 'meal-prep', 
      'pi-server', 'ratio-calculator', 'readme-generator', 'sun-tracker', 'unit-converter'
    ],
    'md': [
      'bluestrawberry', 'caesar-cipher', 'escowinart', 'fitness-logbook', 
      'job-tracker', 'meal-prep', 'pi-server', 'ratio-calculator', 
      'readme-generator', 'sun-tracker'
    ],
    'lg': [
      'bluestrawberry', 'caesar-cipher', 'escowinart', 'fitness-logbook', 
      'job-tracker', 'meal-prep', 'pi-server', 'ratio-calculator', 
      'readme-generator', 'rowcalibur', 'stroke-rate', 'sun-tracker'
    ]
  };
  
  return imageMap[size]?.includes(projectId) || false;
};

/**
 * Get responsive image path based on current window width
 * @param {string} projectId - The project identifier
 * @returns {string} The appropriate image path for current screen size
 */
export const getResponsiveProjectImage = (projectId) => {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    return getProjectImagePath(projectId, 'sm');
  }

  const width = window.innerWidth;
  
  // Try to get the best available image size with fallbacks
  if (width >= 1024) {
    // Try lg first, then md, then sm
    if (hasProjectImage(projectId, 'lg')) {
      return getProjectImagePath(projectId, 'lg');
    } else if (hasProjectImage(projectId, 'md')) {
      return getProjectImagePath(projectId, 'md');
    } else {
      return getProjectImagePath(projectId, 'sm');
    }
  } else if (width >= 768) {
    // Try md first, then sm
    if (hasProjectImage(projectId, 'md')) {
      return getProjectImagePath(projectId, 'md');
    } else {
      return getProjectImagePath(projectId, 'sm');
    }
  } else {
    // Always use sm for mobile
    return getProjectImagePath(projectId, 'sm');
  }
};

/**
 * Generate CSS custom property for project background image
 * @param {string} projectId - The project identifier
 * @returns {object} CSS custom property object
 */
export const getProjectBackgroundStyle = (projectId) => {
  const imagePath = getResponsiveProjectImage(projectId);
  
  return {
    '--project-bg-image': `url('${imagePath}')`,
    backgroundImage: `var(--project-bg-image)`
  };
};

/**
 * Update project background images on window resize
 * @param {string} projectId - The project identifier
 * @param {HTMLElement} element - The DOM element to update
 */
export const updateProjectBackgroundOnResize = (projectId, element) => {
  if (!element) return;
  
  const newImagePath = getResponsiveProjectImage(projectId);
  element.style.setProperty('--project-bg-image', `url('${newImagePath}')`);
};
