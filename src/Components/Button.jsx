import { bool, func, string } from "prop-types";

export default function Button({ text, onClick, isDisable }) {
  return (
    <button className="changButtons" disabled={isDisable} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  isDisable:bool,
};
