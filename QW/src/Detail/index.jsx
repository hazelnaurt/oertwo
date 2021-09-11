import React from "react";
import Header from "../shared/Header";
import "./index.scss";

function Detail() {
  return (
    <>
      <Header />
      <main className="detail">
        <section className="detail__left"></section>
        <section className="detail__right"></section>
      </main>
    </>
  );
}

export default Detail;
