import React from "react";
import "./index.scss";
import Header from "../shared/Header";
import Searchbar from "../shared/Searchbar";
import Results_title from "./Results_title";
import Filter_menu from "./Filter_menu";
import Display from "./Display";

const data = [
  {
    title: "Functions",
    subject: "Mathematics",
    author: "Achimedes",
    date: "2000 BC",
  },
  {
    title: "Photosynthesis",
    subject: "Science",
    author: "Newton",
    date: "2500 BC",
  },
  {
    title: "Sets",
    subject: "Mathematics",
    author: "Turing",
    date: "3000 BC",
  },
  {
    title: "Graphs",
    subject: "Mathematics",
    author: "Achimedes",
    date: "2000 BC",
  },
  {
    title: "Number Theory",
    subject: "Mathematics",
    author: "Achimedes",
    date: "2000 BC",
  },
  {
    title: "Logical Reasoning",
    subject: "Mathematics",
    author: "Achimedes",
    date: "2000 BC",
  },
];

function Results() {
  return (
    <>
      <Header />
      <main className="results">
        <section className="results__filter">
          <h3>Filter By</h3>
          <Filter_menu />
        </section>
        <section className="results__main">
          <div className="results__main_upper">
            <Searchbar />
            <Results_title
              title="Kille One"
              linker="/facebook"
              resultSummary={26}
            />
          </div>
          <div className="results__main_lower">
            <Display data={data} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Results;
