import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (selectedCity) => {
    try {
      setIsLoading(true);
      setError(null);

      const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;

      if (!apiKey) {
        setError("API key is missing. Please set REACT_APP_OPENWEATHER_KEY.");
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setWeatherData(null);
          setError("City not found. Try another name.");
        } else {
          setWeatherData(null);
          setError("Failed to fetch weather data. Please try again.");
        }
      } else {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (err) {
      setWeatherData(null);
      setError("An error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar
        city={city}
        onCityChange={setCity}
        onSearch={() => fetchWeather(city)}
      />
      <WeatherCard data={weatherData} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
