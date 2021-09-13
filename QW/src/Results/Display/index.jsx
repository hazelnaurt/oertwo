import React from "react";
import "./index.scss";
import Display_item from "./Display_item";
import { Link } from "react-router-dom";

function Display({ data }) {
  return (
    <div className="display">
      {data.map((opt, indx) => {
        return (
          <Link to="/courses" key={indx}>
            <Display_item
              title={opt.title}
              subject={opt.subject}
              author={opt.author}
              date={opt.date}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Display;
