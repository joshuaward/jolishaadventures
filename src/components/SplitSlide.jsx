export function SplitSlide({ destination }) {
  const { reverse, eyebrow, title, lead, highlights, proposed, image, imageAlt } = destination;

  return (
    <div className={`split-slide${reverse ? ' split-slide--reverse' : ''}`}>
      <div className="split-slide__content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        <ul className="highlights">
          {highlights.map((item) => (
            <li className="highlights__item" key={item}>{item}</li>
          ))}
        </ul>
        <div className="proposed">
          <strong>Proposed:</strong> {proposed}
        </div>
      </div>
      <div className="split-slide__media">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
    </div>
  );
}
