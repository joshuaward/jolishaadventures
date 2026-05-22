import { useCallback, useEffect, useRef, useState } from 'react';

export function useSlideNavigation(sectionCount) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef([]);

  const setSectionRef = useCallback((index) => {
    return (element) => {
      sectionRefs.current[index] = element;
    };
  }, []);

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= sectionCount) return;
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    },
    [sectionCount]
  );

  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          const index = sections.indexOf(entry.target);
          if (index >= 0) {
            setCurrentIndex(index);
            setProgress(((index + 1) / sectionCount) * 100);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-5% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    sections[0]?.classList.add('visible');

    return () => observer.disconnect();
  }, [sectionCount]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goTo(currentIndex + 1);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(currentIndex - 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, goTo]);

  return {
    currentIndex,
    progress,
    setSectionRef,
    goTo,
    canGoPrev: currentIndex > 0,
    canGoNext: currentIndex < sectionCount - 1,
  };
}
