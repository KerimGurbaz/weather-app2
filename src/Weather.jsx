import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setError('City not found. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city name" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData.name && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}