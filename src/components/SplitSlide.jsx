export function SplitSlide({ destination }) {
  const { reverse, eyebrow, title, lead, highlights, proposed, image, imageAlt } = destination;
  const splitClass = reverse ? 'split reverse' : 'split';

  return (
    <div className={splitClass}>
      <div className="content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="proposed">
          <strong>Proposed:</strong> {proposed}
        </div>
      </div>
      <div className="media rounded">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
    </div>
  );
}
