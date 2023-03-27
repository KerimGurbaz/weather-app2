import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <form className="header__form">
        <input
          type="text"
          placeholder="Enter a city name"
          className="header__input"
        />
        <button type="submit" className="header__button">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
