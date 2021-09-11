import React from "react";
import "./index.scss";

function Button({ text }) {
  return (
    <button type="submit" className="button">
      {text}
    </button>
  );
}

export default Button;
