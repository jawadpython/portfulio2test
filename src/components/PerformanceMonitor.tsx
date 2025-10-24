import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            console.log('Performance Metrics:', {
              'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
              'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime,
              'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
            });
          }
        }, 0);
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
