import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';

export function BenefitCarousel({ items }) {
  const trackRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const getScrollStep = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector('.benefit-carousel__card');
    if (!track || !card) return track?.clientWidth ?? 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  }, []);

  const updateButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanGoPrev(track.scrollLeft > 1);
    setCanGoNext(track.scrollLeft < maxScroll - 1);
  }, []);

  const scroll = useCallback(
    (direction) => {
      trackRef.current?.scrollBy({ left: direction * getScrollStep(), behavior: 'smooth' });
    },
    [getScrollStep]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
    return () => {
      track.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, [updateButtons]);

  return (
    <div className="benefit-carousel">
      <button
        type="button"
        className="benefit-carousel__btn benefit-carousel__btn--prev"
        aria-label="Previous highlight"
        onClick={() => scroll(-1)}
        disabled={!canGoPrev}
      >
        <ChevronLeft />
      </button>
      <div className="benefit-carousel__track" ref={trackRef} tabIndex={0}>
        {items.map((item) => (
          <div className="benefit-carousel__card" key={item.title}>
            <h4>{item.title}</h4>
            <p>
              {item.strong ? (
                <>
                  {item.textBefore}
                  <strong>{item.strong}</strong>
                  {item.textAfter}
                </>
              ) : (
                item.text
              )}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="benefit-carousel__btn benefit-carousel__btn--next"
        aria-label="Next highlight"
        onClick={() => scroll(1)}
        disabled={!canGoNext}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
