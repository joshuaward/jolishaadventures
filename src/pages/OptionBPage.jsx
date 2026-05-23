import { useEffect } from 'react';
import { PresentationOption2, SLIDE_COUNT } from '../components/PresentationOption2';
import { ProgressBar } from '../components/ProgressBar';
import { SlideNav } from '../components/SlideNav';
import { useSlideNavigation } from '../hooks/useSlideNavigation';

export function OptionBPage() {
  const { progress, setSectionRef, goTo, currentIndex, canGoPrev, canGoNext } =
    useSlideNavigation(SLIDE_COUNT);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'adriatic');
    return () => document.documentElement.removeAttribute('data-theme');
  }, []);

  return (
    <>
      <ProgressBar progress={progress} />
      <SlideNav
        onPrev={() => goTo(currentIndex - 1)}
        onNext={() => goTo(currentIndex + 1)}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
      />
      <main>
        <PresentationOption2 setSectionRef={setSectionRef} />
      </main>
    </>
  );
}
