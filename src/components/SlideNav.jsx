import { ChevronDown, ChevronUp } from './Icons';

export function SlideNav({ onPrev, onNext, canGoPrev, canGoNext }) {
  return (
    <>
      <nav className="slide-nav" aria-label="Slide navigation">
        <button
          type="button"
          className="slide-nav__btn slide-nav__btn--prev"
          aria-label="Previous slide"
          onClick={onPrev}
          disabled={!canGoPrev}
        >
          <ChevronUp />
        </button>
        <button
          type="button"
          className="slide-nav__btn slide-nav__btn--next"
          aria-label="Next slide"
          onClick={onNext}
          disabled={!canGoNext}
        >
          <ChevronDown />
        </button>
      </nav>
      <div className="slide-nav__hint">Scroll or use arrow keys</div>
    </>
  );
}
