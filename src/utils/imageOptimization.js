// Image optimization utilities

/**
 * Lazy load images with intersection observer
 */
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    // Observe all lazy images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

/**
 * Preload critical images
 */
export function preloadCriticalImages() {
  const criticalImages = [
    '/portfolio/assets/img/profile-pic.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Optimize image loading with WebP support detection
 */
export function getOptimizedImageSrc(originalSrc, webpSrc) {
  if (supportsWebP()) {
    return webpSrc || originalSrc;
  }
  return originalSrc;
}

/**
 * Check if browser supports WebP format
 */
function supportsWebP() {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

/**
 * Add loading placeholder for images
 */
export function addImagePlaceholder(img) {
  img.style.backgroundColor = 'var(--offblack)';
  img.style.backgroundImage = 'linear-gradient(90deg, transparent 0%, rgba(230,230,230,0.1) 50%, transparent 100%)';
  img.style.backgroundSize = '200% 100%';
  img.style.animation = 'shimmer 1.5s infinite';
}

// Add shimmer animation to CSS
const shimmerCSS = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

// Inject shimmer CSS
const style = document.createElement('style');
style.textContent = shimmerCSS;
document.head.appendChild(style);
