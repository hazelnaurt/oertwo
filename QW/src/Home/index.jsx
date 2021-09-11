import React from "react";
import Header from "../shared/Header";
import Hero from "./Hero";
import "./index.scss";
import cendlos from "../assets/imgz/cendlos@2x.png";
import khan from "../assets/imgz/khan@2x.png";
import ministtry from "../assets/imgz/ministtry@2x.png";
import oer from "../assets/imgz/oer@2x.png";
import sprite from "../assets/imgz/sprites.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header searchState={true} />
      <Hero />
      <Link to="/search">Spadm</Link>
      <main className="home">
        <section className="home__two-col">
          <div className="home__col home__col--l home__col--green margin-right">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos officiis distinctio minus dolore libero laudantium
              velit tempora recusandae nemo, eos rerum excepturi repellat
              doloribus quae totam neque ratione natus amet.
            </p>
          </div>
          <div className="home__col home__col--s home__col--blue margin-left"></div>
        </section>
        <section className="home__two-col margin-top">
          <div className="home__col home__col--s home__col--pink margin-right"></div>
          <div className="home__col home__col--l home__col--cream margin-left">
            <h2>Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos officiis distinctio minus dolore libero laudantium
              velit tempora recusandae nemo, eos rerum excepturi repellat
              doloribus quae totam neque ratione natus amet.
            </p>
          </div>
        </section>
        <section className="home__one-col">
          <h3>Trusted By</h3>
          <div>
            <img src={khan} alt="khan academy logo" />
            <img src={ministtry} alt="Ministry of Education Ghana logo" />
            <img src={oer} alt="OER commons logo" />
            <img src={cendlos} alt="Cendlos logo" />
          </div>
        </section>
        <section className="home__one-col home__one-col--blue">
          <h3>Partners</h3>
          <div></div>
        </section>
      </main>
      <footer className="footer">
        <div className="extra">
          <section>
            <h4>Partners</h4>
            <p>CENDLOS</p>
            <p>UNESCO</p>
          </section>
        </div>
        <div className="footer__social">
          <a
            href="https://facebook.com"
            target="_blank"
            className="footer__social-item"
          >
            <div>
              <svg>
                <use xlinkHref={`${sprite}#facebook`}></use>
              </svg>
            </div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="footer__social-item"
          >
            <div>
              <svg>
                <use xlinkHref={`${sprite}#twitter`}></use>
              </svg>
            </div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="footer__social-item"
          >
            <div>
              <svg>
                <use xlinkHref={`${sprite}#instagram`}></use>
              </svg>
            </div>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
