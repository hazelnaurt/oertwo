import React from "react";
import "./index.scss";
import Button from "../../shared/Button";

function Detail_item({ title, subject, desc, author, date, lic, img, type }) {
  return (
    <div className="detail_item">
      <figure>
        <div className="detail_item__image">
          <img src="" alt="" />
        </div>
        <figcaption>
          <h3>{title}</h3>
          <div>Stars</div>
        </figcaption>
      </figure>
      <div className="detail_item__text">
        <p>
          <span className="bold" className="bold">
            Description:
          </span>
          <span>{desc}</span>
        </p>
        <p>
          <span className="bold">Subject:</span>
          <span>{subject}</span>
        </p>
        <p>
          <span className="bold">Author:</span>
          <span>{author}</span>
        </p>
        <p>
          <span className="bold">Date:</span>
          <span>{date}</span>
        </p>
        <p>
          <span className="bold">License:</span>
          <span>{lic}</span>
        </p>
      </div>
      <div className="detail_item__buttons">
        <Button text="Video" blue={true} />
        <Button text="PDF" />
      </div>
    </div>
  );
}

export default Detail_item;
