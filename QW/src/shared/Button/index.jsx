import React from "react";
import "./index.scss";

function Button({ text, blue }) {
  return (
    <button type="submit" className={blue ? "button button--blue" : "button"}>
      {text}
    </button>
  );
}

export default Button;
