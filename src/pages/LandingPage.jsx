import { Link, useNavigate } from 'react-router-dom';

const OPTION_A_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg/1280px-Sentiero_del_Viandante_DSC_6340_%2814020554463%29.jpg';
const OPTION_B_IMG =
  'https://images.pexels.com/photos/10361190/pexels-photo-10361190.jpeg?auto=compress&cs=tinysrgb&w=800';

export function LandingPage() {
  const navigate = useNavigate();

  function goRandom() {
    const options = ['/option-a', '/option-b'];
    navigate(options[Math.floor(Math.random() * options.length)]);
  }

  return (
    <div className="landing">
      <header className="landing__header">
        <p className="eyebrow">Made with 🤍 for Alisha</p>
        <h1>Our European Adventure</h1>
        <p className="landing__subtitle">Two ways to experience Italy — choose yours</p>
        <p className="landing__dates">August 27 – September 12, 2026</p>
      </header>

      <div className="landing__cards">
        <Link className="option-card" to="/option-a">
          <div className="option-card__img-wrap">
            <img className="option-card__img" src={OPTION_A_IMG} alt="Lake Como, Italy" />
            <span className="option-card__badge">Option A</span>
          </div>
          <div className="option-card__body">
            <h2 className="option-card__title">Italy, Croatia &amp; Montenegro</h2>
            <p className="option-card__stops">
              Lake Como <span>·</span> Dolomites <span>·</span> Venice <span>·</span>
              Dubrovnik <span>·</span> Montenegro <span>·</span> Puglia <span>·</span> Amalfi Coast
            </p>
            <p className="option-card__cta">View this option <span>→</span></p>
          </div>
        </Link>

        <Link className="option-card" to="/option-b">
          <div className="option-card__img-wrap">
            <img className="option-card__img" src={OPTION_B_IMG} alt="Misty Lake Como panorama" />
            <span className="option-card__badge">Option B</span>
          </div>
          <div className="option-card__body">
            <h2 className="option-card__title">Italy, Peak to Coast</h2>
            <p className="option-card__stops">
              Lake Como <span>·</span> Three days in the Dolomites <span>·</span>
              Venice <span>·</span> Puglia <span>·</span> Five days on the Amalfi Coast
            </p>
            <p className="option-card__cta">View this option <span>→</span></p>
          </div>
        </Link>
      </div>

      <div className="random">
        <button className="random__btn" onClick={goRandom}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
          </svg>
          Surprise Me
        </button>
        <p className="random__hint">Can&apos;t decide? Let fate pick your adventure.</p>
      </div>

      <div className="rule" />
      <p className="landing__footer">Your partner in every detour &nbsp;·&nbsp; 2026</p>
    </div>
  );
}
