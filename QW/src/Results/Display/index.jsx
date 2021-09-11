import React from "react";
import "./index.scss";
import Display_item from "./Display_item";

function Display({ data }) {
  return (
    <div className="display">
      {data.map((opt, indx) => {
        return (
          <Display_item
            key={indx}
            title={opt.title}
            subject={opt.subject}
            author={opt.author}
            date={opt.date}
          />
        );
      })}
    </div>
  );
}

export default Display;
