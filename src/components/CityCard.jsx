import React from "react";
import "./CityCard.css";

const CityCard = ({ city, onRemove }) => {
  const { id, name, country, temperature, weather, icon } = city;

  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="city-card">
      <button className="remove-btn" onClick={() => onRemove(id)}>
        x
      </button>
      <h2>
        {name}, {country}
      </h2>
      <img src={iconUrl} alt={weather} />
      <p>{temperature.toFixed(1)}°C</p>
      <p>{weather}</p>
    </div>
  );
};

export default CityCard;
