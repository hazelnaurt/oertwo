import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Results_title({ title, linker, resultSummary }) {
  return (
    <div className="title_cont">
      <h1>{title}</h1>
      <Link to={linker}>Read Description</Link>
      <h3 className="end">{resultSummary} Results</h3>
    </div>
  );
}

export default Results_title;
