import React from "react";
import Header from "../shared/Header";
import Detail_item from "./Detail_item";
import "./index.scss";

function Detail() {
  return (
    <>
      <Header />
      <main className="detail">
        <section className="detail__left">
          <h3>LID</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            natus!
          </p>
        </section>
        <section className="detail__right">
          <Detail_item
            subject="Logic"
            date="2000 BC"
            lic="UNC-40"
            author="Alan Turing"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus!"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, natus!"
          />
        </section>
      </main>
    </>
  );
}

export default Detail;
