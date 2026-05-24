import { Link } from 'react-router-dom';
import { benefits, calendarDays, destinations, timelineItems } from '../data/content-option2';
import { BenefitCarousel } from './BenefitCarousel';
import { SplitSlide } from './SplitSlide';

const HERO_IMAGE =
  'https://images.pexels.com/photos/10361190/pexels-photo-10361190.jpeg?auto=compress&cs=tinysrgb&w=1280';

export function PresentationOption2({ setSectionRef }) {
  return (
    <>
      <section className="slide hero" id="hero" ref={setSectionRef(0)}>
        <div
          className="hero__bg"
          role="img"
          aria-label="Lake Como, Italy"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="slide__inner">
          <p className="hero__dedication">Made with 🤍 for Alisha</p>
          <h1>Our European Adventure</h1>
          <p className="hero__subtitle">Milan to Naples — peak to coast, no detours needed</p>
          <p className="hero__dedication">August 27 – September 12, 2026 · Italy, cover to coast</p>
          <Link to="/" className="hero__switch-link">← Back to all options</Link>
        </div>
      </section>

      <section id="why-thursday" className="slide" ref={setSectionRef(1)}>
        <div className="slide__inner">
          <p className="eyebrow">The gentle case for one extra day</p>
          <h2>
            Why leave on <span className="accent">Thursday, August 27</span>?
          </h2>
          <p className="lead">
            Leaving Thursday isn&apos;t just about the soft landing — it&apos;s what makes the depth possible. Three full
            days in the Dolomites instead of two. Five days on the Amalfi instead of three. Time to actually sit at Lago
            di Braies, actually linger in Positano. This is Italy the way it deserves to be done.
          </p>

          <BenefitCarousel items={benefits} />

          <p className="footnote">
            Yes, Thursday–Saturday fits my Monday–Friday schedule — but I chose these dates because they unlock the
            most magic for <em>us</em>. If a different day works better for you, we change it together.
          </p>

          <h3 style={{ marginTop: '2.5rem', color: 'var(--charcoal)' }}>Our travel week(s) at a glance</h3>
          <div className="calendar">
            {calendarDays.map((day) => (
              <div
                key={`${day.dayName}-${day.dayDate}`}
                className={`calendar__day${day.variant ? ` calendar__day--${day.variant}` : ''}`}
              >
                <div className="calendar__day-name">{day.dayName}</div>
                <div className="calendar__day-date">{day.dayDate}</div>
                <div className="calendar__day-label">{day.dayLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="for-alisha" className="slide slide--alt slide--split" ref={setSectionRef(2)}>
        <div className="slide__inner">
          <div className="split-slide">
            <div className="split-slide__content">
              <p className="eyebrow">Before we even pack</p>
              <h2>For you, Alisha</h2>
              <p className="lead">
                I know you work Wednesday, August 26 — the day before we leave. You shouldn&apos;t have to carry the
                mental load of getting us trip-ready on top of a full day at work.
              </p>
              <ul className="promise-list">
                <li className="promise-list__item">
                  <strong>Packing</strong> — we&apos;ll build the checklist together; I&apos;ll handle the logistics and
                  the &quot;did we forget adapters?&quot; panic.
                </li>
                <li className="promise-list__item">
                  <strong>Home</strong> — whatever needs doing before we lock the door, I&apos;ll take the lead so you
                  can breathe after Wednesday.
                </li>
                <li className="promise-list__item">
                  <strong>Travel days</strong> — airports, rental car, connections — that&apos;s on me. You get to show
                  up and be present.
                </li>
                <li className="promise-list__item">
                  <strong>The trip itself</strong> — this adventure is designed around making you feel cared for, not
                  dragged along an itinerary.
                </li>
              </ul>
              <p>This presentation is a proposal, not a contract. Your comfort matters more than any date on a calendar.</p>
            </div>
            <div className="split-slide__media">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Menaggio_Lago_di_Como.jpg/1280px-Menaggio_Lago_di_Como.jpg"
                alt="Menaggio on Lake Como"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="slide slide--sage" ref={setSectionRef(3)}>
        <div className="slide__inner">
          <p className="eyebrow">The route — proposed, not locked</p>
          <h2>Our journey, stop by stop</h2>
          <p className="lead">
            One rental car through the north, then planes and trains as we move south through Italy — start to finish,
            no country crossings, no retracing. One country, six unforgettable regions, every leg moving us forward.
          </p>
          <div className="timeline">
            {timelineItems.map((item) => {
              const dashIndex = item.text.indexOf(' — ');
              const title = item.text.slice(0, dashIndex);
              const detail = item.text.slice(dashIndex + 3);
              return (
                <div className="timeline__item" key={item.num}>
                  <span className="timeline__num">{item.num}</span>
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
          className={`slide slide--split${destination.className ? ` slide--${destination.className}` : ''}`}
          ref={setSectionRef(4 + destinationIndex)}
        >
          <div className="slide__inner">
            <SplitSlide destination={destination} />
          </div>
        </section>
      ))}

      <section id="flexibility" className="slide" ref={setSectionRef(10)}>
        <div className="slide__inner">
          <p className="eyebrow">Your trip, our trip</p>
          <h2>This is a proposal — not a prison</h2>
          <p className="lead">
            What you&apos;re seeing is already a considered, generous version of Italy. We can trim, stretch, or
            rearrange anything. One-way flights mean we&apos;re never locked in — only invited further south.
          </p>
          <div className="paths">
            <div className="paths__card">
              <h4>Go even slower</h4>
              <p>
                Add a third night on Lake Como, skip one Dolomites hike for a rifugio afternoon, turn Puglia into four
                days instead of three. Less itinerary, more <em>living</em> in the places.
              </p>
            </div>
            <div className="paths__card">
              <h4>Squeeze in more</h4>
              <p>
                Add Ischia on an Amalfi day, extend Puglia to take in Lecce or Ostuni, sneak in a Herculaneum morning
                alongside Pompeii. If we&apos;re energized, the south keeps giving.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            The August 27 departure and September 12 return? That&apos;s my best offer for how we start and end strong — but if
            you want different dates, we find them. I&apos;d rather have you excited than have a perfect calendar.
          </p>
        </div>
      </section>

      <section id="closing" className="slide slide--closing" ref={setSectionRef(11)}>
        <div className="slide__inner">
          <p className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>
            For my favorite person
          </p>
          <h2>Alisha, I love you</h2>
          <p className="closing__letter">
            I made this because I can&apos;t stop picturing us on that lake, on that ridgeline, in that gondola, with a
            drink in hand and nowhere else I&apos;d rather be. You&apos;re not being asked to approve a spreadsheet —
            you&apos;re being invited into the adventure of our lives with someone who will handle the hard parts so you
            can enjoy the beautiful ones.
          </p>
          <p className="closing__letter">
            I&apos;m beyond excited for this European journey with you. Whatever we keep, change, or throw out — I just
            want to experience it together.
          </p>
          <p className="closing__signature">With all my love · Your partner in every detour</p>
        </div>
      </section>
    </>
  );
}

export const SLIDE_COUNT = 12;
