import React from "react";
import "./CityCard.css";

const CityCard = ({ city, onRemove }) => {
  const { id, name, country, temperature, weather } = city;

  return (
    <div className="city-card">
      <button className="remove-btn" onClick={() => onRemove(id)}>
        &times;
      </button>
      <h2>
        {name}, {country}
      </h2>
      <p>{temperature.toFixed(1)}°C</p>
      <p>{weather}</p>
    </div>
  );
};

export default CityCard;
