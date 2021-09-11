import React from "react";
import "./index.scss";

function Display_item({ title, subject, author, date, img, type }) {
  return (
    <div className="display_item">
      <div className="display_item__image">
        <div className="display_item__type">
          <div className="vid">Vid</div>
          <div className="pdf">Pdf</div>
        </div>
        <img src="" alt="" />
      </div>
      <div className="display_item__text">
        <h3 className="title">{title}</h3>
        <p className="subject">{`Subject: ${subject}`}</p>
        <p className="author">{`Author: ${author}`}</p>
        <p className="date">{`Date: ${date}`}</p>
      </div>
    </div>
  );
}

export default Display_item;
