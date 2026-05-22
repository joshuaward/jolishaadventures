import { ChevronDown, ChevronUp } from './Icons';

export function SlideNav({ onPrev, onNext, canGoPrev, canGoNext }) {
  return (
    <>
      <nav className="slide-nav" aria-label="Slide navigation">
        <button
          type="button"
          className="nav-btn"
          id="nav-prev"
          aria-label="Previous slide"
          onClick={onPrev}
          disabled={!canGoPrev}
        >
          <ChevronUp />
        </button>
        <button
          type="button"
          className="nav-btn"
          id="nav-next"
          aria-label="Next slide"
          onClick={onNext}
          disabled={!canGoNext}
        >
          <ChevronDown />
        </button>
      </nav>
      <div className="nav-hint">Scroll or use arrow keys</div>
    </>
  );
}
