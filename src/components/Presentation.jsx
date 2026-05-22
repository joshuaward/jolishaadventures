import { benefits, calendarDays, destinations, timelineItems } from '../data/content';
import { BenefitCarousel } from './BenefitCarousel';
import { SplitSlide } from './SplitSlide';

const HERO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/1280px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg';

export function Presentation({ setSectionRef }) {
  return (
    <>
      <section className="hero" id="hero" ref={setSectionRef(0)}>
        <div className="hero-bg" role="img" aria-label="Lake Como, Italy" style={{ backgroundImage: `url('${HERO_IMAGE}')` }} />
        <div className="inner">
          <p className="dedication">Made with 🤍 for Alisha</p>
          <h1>Our European Adventure</h1>
          <p className="subtitle">Milan to Naples — and every beautiful detour in between</p>
          <p className="dedication">Aug 27 – Sep 12, 2026 · Italy · Croatia · Montenegro</p>
        </div>
      </section>

      <section id="why-thursday" ref={setSectionRef(1)}>
        <div className="inner">
          <p className="eyebrow">The gentle case for one extra day</p>
          <h2>
            Why leave on <span className="accent">Thursday, August 27</span>?
          </h2>
          <p className="lead">
            Leaving Thursday isn&apos;t just about a softer landing — it&apos;s how we fit in <em>all</em> of this:
            alpine lakes, mountain ridgelines, a floating city, the Adriatic, hidden Puglia, and the Amalfi Coast,
            without living on red-eye fumes or racing the workweek.
          </p>

          <BenefitCarousel items={benefits} />

          <p className="footnote">
            Yes, Thursday–Saturday fits my Monday–Friday schedule — but I chose these dates because they unlock the
            most magic for <em>us</em>. If a different day works better for you, we change it together.
          </p>

          <h3 style={{ marginTop: '2.5rem', color: 'var(--charcoal)' }}>Our travel week(s) at a glance</h3>
          <div className="calendar-strip">
            {calendarDays.map((day) => (
              <div
                key={`${day.dayName}-${day.dayDate}`}
                className={['cal-day', day.variant].filter(Boolean).join(' ')}
              >
                <div className="day-name">{day.dayName}</div>
                <div className="day-date">{day.dayDate}</div>
                <div className="day-label">{day.dayLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="for-alisha" className="alt-bg" ref={setSectionRef(2)}>
        <div className="inner split">
          <div className="content">
            <p className="eyebrow">Before we even pack</p>
            <h2>For you, Alisha</h2>
            <p className="lead">
              I know you work Wednesday, August 26 — the day before we leave. You shouldn&apos;t have to carry the
              mental load of getting us trip-ready on top of a full day at work.
            </p>
            <ul className="promise-list">
              <li>
                <strong>Packing</strong> — we&apos;ll build the checklist together; I&apos;ll handle the logistics and
                the &quot;did we forget adapters?&quot; panic.
              </li>
              <li>
                <strong>Home</strong> — whatever needs doing before we lock the door, I&apos;ll take the lead so you
                can breathe after Wednesday.
              </li>
              <li>
                <strong>Travel days</strong> — airports, rental car, connections — that&apos;s on me. You get to show
                up and be present.
              </li>
              <li>
                <strong>The trip itself</strong> — this adventure is designed around making you feel cared for, not
                dragged along an itinerary.
              </li>
            </ul>
            <p>This presentation is a proposal, not a contract. Your comfort matters more than any date on a calendar.</p>
          </div>
          <div className="media rounded">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Menaggio_Lago_di_Como.jpg/1280px-Menaggio_Lago_di_Como.jpg"
              alt="Menaggio on Lake Como"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="timeline" className="sage-bg" ref={setSectionRef(3)}>
        <div className="inner">
          <p className="eyebrow">The route — proposed, not locked</p>
          <h2>Our journey, stop by stop</h2>
          <p className="lead">
            One rental car through northern Italy, then planes, trains, and ferries as we drift south and across the
            Adriatic. Every leg is one-way — so we can slow down or skip ahead without breaking the trip.
          </p>
          <div className="timeline">
            {timelineItems.map((item) => {
              const dashIndex = item.text.indexOf(' — ');
              const title = item.text.slice(0, dashIndex);
              const detail = item.text.slice(dashIndex + 3);
              return (
                <div className="timeline-item" key={item.num}>
                  <span className="timeline-num">{item.num}</span>
                  <div>
                    <strong>{title}</strong> — {detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {destinations.map((destination, destinationIndex) => (
        <section
          key={destination.id}
          id={destination.id}
          className={['destination', destination.className].filter(Boolean).join(' ')}
          ref={setSectionRef(4 + destinationIndex)}
        >
          <div className="inner">
            <SplitSlide destination={destination} />
          </div>
        </section>
      ))}

      <section id="flexibility" ref={setSectionRef(12)}>
        <div className="inner">
          <p className="eyebrow">Your trip, our trip</p>
          <h2>This is a proposal — not a prison</h2>
          <p className="lead">
            What you&apos;re seeing is a jam-packed dream list. We can edit, cut, or stretch anything. One-way flights
            and trains mean we&apos;re never trapped — only invited.
          </p>
          <div className="two-paths">
            <div className="path-card">
              <h4>Slow down</h4>
              <p>
                Stretch Lake Como through Sunday, linger on the Adriatic past Sep 9, or trade a Dolomites hike for a long
                lunch. Less &quot;seeing Europe,&quot; more <em>being</em> there together.
              </p>
            </div>
            <div className="path-card">
              <h4>See more</h4>
              <p>
                Keep the pace, add Braies, extend Dubrovnik into Sep 7, squeeze in Ravello on the Amalfi days. If
                we&apos;re both energized, we ride the momentum.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            The Aug 27 departure and Sep 12 return? That&apos;s my best offer for how we start and end strong — but if
            you want different dates, we find them. I&apos;d rather have you excited than have a perfect calendar.
          </p>
        </div>
      </section>

      <section id="closing" className="closing" ref={setSectionRef(13)}>
        <div className="inner">
          <p className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>
            For my favorite person
          </p>
          <h2>Alisha, I love you</h2>
          <p className="letter">
            I made this because I can&apos;t stop picturing us on that lake, on that ridgeline, in that gondola, with a
            drink in hand and nowhere else I&apos;d rather be. You&apos;re not being asked to approve a spreadsheet —
            you&apos;re being invited into the adventure of our lives with someone who will handle the hard parts so you
            can enjoy the beautiful ones.
          </p>
          <p className="letter">
            I&apos;m beyond excited for this European journey with you. Whatever we keep, change, or throw out — I just
            want to experience it together.
          </p>
          <p className="signature">With all my love · Your partner in every detour</p>
        </div>
      </section>
    </>
  );
}

export const SLIDE_COUNT = 14;
