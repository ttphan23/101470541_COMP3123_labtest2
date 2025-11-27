// src/components/WeatherCard.jsx
import React from "react";

function WeatherCard({ data, isLoading, error }) {
  if (isLoading) return <p className="status-text">Loading...</p>;
  if (error) return <p className="status-text error">{error}</p>;
  if (!data) return null;

  const { name, sys, main, weather, wind } = data;
  const iconCode = weather[0].icon;
  const description = weather[0].description;

  const now = new Date();
  const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
  const fullDate = now.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="weather-card">
      {/* Left column – big day / temp */}
      <div className="weather-main">
        <div>
          <p className="weather-day">{dayName}</p>
          <p className="weather-date">{fullDate}</p>
          <p className="weather-location">
            {name}, {sys.country}
          </p>
        </div>

        <div className="weather-main-bottom">
          <p className="weather-temp">{Math.round(main.temp)}°C</p>
          <p className="weather-desc">{description}</p>
        </div>
      </div>

      {/* Right column – details */}
      <div className="weather-info">
        <div className="weather-header">
          <div>
            <p className="weather-info-title">Current Weather</p>
            <p className="weather-info-subtitle">
              Feels like {Math.round(main.feels_like)}°C
            </p>
          </div>
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt={description}
          />
        </div>

        <div className="weather-details-grid">
          <div className="weather-detail">
            <span>Min Temp</span>
            <strong>{Math.round(main.temp_min)}°C</strong>
          </div>
          <div className="weather-detail">
            <span>Max Temp</span>
            <strong>{Math.round(main.temp_max)}°C</strong>
          </div>
          <div className="weather-detail">
            <span>Humidity</span>
            <strong>{main.humidity}%</strong>
          </div>
          <div className="weather-detail">
            <span>Wind</span>
            <strong>{wind.speed} m/s</strong>
          </div>
          <div className="weather-detail">
            <span>Pressure</span>
            <strong>{main.pressure} hPa</strong>
          </div>
          <div className="weather-detail">
            <span>Feels Like</span>
            <strong>{Math.round(main.feels_like)}°C</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
