import { useEffect } from 'react';

export function usePerformance() {
  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));

      return () => imageObserver.disconnect();
    };

    // Debounce scroll events for better performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll handling logic if needed
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const cleanup = preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
      clearTimeout(scrollTimeout);
    };
  }, []);
}
