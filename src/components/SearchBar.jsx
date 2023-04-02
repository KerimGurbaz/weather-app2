import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Şehir ismi girin..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchBar;
