import { useEffect, useRef } from 'react';

function sendGA(event: string, params: Record<string, unknown>) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.('event', event, params);
}

// Tracks time spent in each section marked with data-section="<name>"
// Fires a "section_time_spent" GA event when a section leaves the viewport
export function useSectionTimeTracking() {
  const timers = useRef<Record<string, number>>({});

  useEffect(() => {
    const flush = (sectionName: string) => {
      const start = timers.current[sectionName];
      if (!start) return;
      const duration = Math.round((Date.now() - start) / 1000);
      if (duration >= 1) {
        sendGA('section_time_spent', { section_name: sectionName, duration_seconds: duration });
      }
      delete timers.current[sectionName];
    };

    const flushAll = () => Object.keys(timers.current).forEach(flush);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = (entry.target as HTMLElement).dataset.section!;
          if (entry.isIntersecting) {
            timers.current[name] = Date.now();
          } else {
            flush(name);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    sections.forEach((el) => observer.observe(el));

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') flushAll();
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('beforeunload', flushAll);

    return () => {
      flushAll();
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('beforeunload', flushAll);
    };
  }, []);
}

// Tracks total time spent on a page. Fires a "page_time_spent" GA event on unmount.
export function usePageTimeTracking(pageName: string) {
  useEffect(() => {
    const start = Date.now();

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        const duration = Math.round((Date.now() - start) / 1000);
        if (duration >= 1) {
          sendGA('page_time_spent', { page_name: pageName, duration_seconds: duration });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      const duration = Math.round((Date.now() - start) / 1000);
      if (duration >= 1) {
        sendGA('page_time_spent', { page_name: pageName, duration_seconds: duration });
      }
    };
  }, [pageName]);
}
