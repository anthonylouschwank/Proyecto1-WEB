import './Display.css';

export function Display({ value }) {
  return (
    <div className="display" data-testid="display">
      {value}
    </div>
  );
}