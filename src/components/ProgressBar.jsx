export function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
