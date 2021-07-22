export default function Button({ text, onClick, isDisable }) {

  return (
    <button className="changButtons" disabled={isDisable} onClick={onClick}>
      {text}
    </button>
  );
}
