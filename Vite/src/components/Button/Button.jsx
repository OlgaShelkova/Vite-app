import "./Button.module.scss";

export default function Button({ text, onClick, colorClass }) {
  return (
    <button className={`button ${colorClass}`} onClick={onClick}>
      {text}
    </button>
  );
}
