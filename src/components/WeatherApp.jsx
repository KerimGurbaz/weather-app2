import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CityCard from "./CityCard";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [cities, setCities] = useState([]);

  const handleSearch = async (city) => {
    const API_KEY = "2b6fc034709f70ad0e769dd70ac76d07";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(URL);
      const data = response.data;

      if (data.cod === 200) {
        const cityData = {
          id: data.id,
          name: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          weather: data.weather[0].description,
        };

        if (!cities.some((city) => city.id === cityData.id)) {
          if (cities.length >= 3) {
            setCities((prevCities) => [cityData, ...prevCities.slice(0, 2)]);
          } else {
            setCities((prevCities) => [cityData, ...prevCities]);
          }
        } else {
          alert("Bu şehir zaten listelenmiş.");
        }
      }
    } catch (error) {
      alert("Hava durumu verisi alınamadı, lütfen şehir adını kontrol edin.");
    }
  };

  const handleRemove = (id) => {
    setCities((prevCities) => prevCities.filter((city) => city.id !== id));
  };

  return (
    <div className="weather-app">
      <SearchBar onSearch={handleSearch} />
      <div className="city-list">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
