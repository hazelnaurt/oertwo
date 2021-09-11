import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Flag from "../../assets/imgz/flag.png";
import Search from "../Search";

function Header({ searchState }) {
  return (
    <div className="header">
      <div className="header__upper">
        <div className="header__logo">
          <img src={Flag} alt="Ghana Flag" />
        </div>
        {searchState ? (
          <Search />
        ) : (
          <div className="header__search_placeholder"></div>
        )}
        <nav>
          <ul>
            <li>
              <Link to="" className="header__btn">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="" className="header__btn header__btn--circ">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="header__lower">
        <ul>
          <li>
            <Link to="/res" className="header__btn header__btn--sub">
              Resoures
            </Link>
          </li>
          <li>
            <Link to="/col" className="header__btn header__btn--sub">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/pro" className="header__btn header__btn--sub">
              Providers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
