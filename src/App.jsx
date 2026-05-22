import { Presentation, SLIDE_COUNT } from './components/Presentation';
import { ProgressBar } from './components/ProgressBar';
import { SlideNav } from './components/SlideNav';
import { useSlideNavigation } from './hooks/useSlideNavigation';

export default function App() {
  const { progress, setSectionRef, goTo, currentIndex, canGoPrev, canGoNext } =
    useSlideNavigation(SLIDE_COUNT);

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
        <Presentation setSectionRef={setSectionRef} />
      </main>
    </>
  );
}
