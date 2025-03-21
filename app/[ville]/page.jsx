'use client';

import { useState, useEffect } from "react";
import { Suspense } from "react";
import Link from 'next/link';
import Loader from './loading'; // Ensure this file exists
import ColorSchemesExample from "../components/Navbar";

const icons = {
  clear: '/assets/img/sun.png',
  clouds: '/assets/img/cloud.png',
  rain: '/assets/img/rain.png',
  snow: '/assets/img/snow.png',
  night: '/assets/img/night.png',
  humidity: '/assets/img/humidity.png',
  wind: '/assets/img/wind.png',
  thermdown: '/assets/img/thermdown.png',
  thermup: '/assets/img/thermup.png',
};

export default function Pageville({ params }) {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Start as true to show loader

  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInputValue(capitalizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true); // Start loading
      try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.ville}&appid=a5d25ce6acf4cdbbfba35338df6f794f&units=metric&lang=fr`);
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${params.ville}&appid=a5d25ce6acf4cdbbfba35338df6f794f&units=metric&lang=fr`);

        if (!currentWeatherResponse.ok || !forecastResponse.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const currentData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();

        setWeatherData(currentData);
        setForecastData(forecastData);
        setError(null);
      } catch (error) {
        setError("Impossible de récupérer les données météo. Veuillez réessayer plus tard.");
      } finally {
        setIsLoading(false); // End loading
      }
    };

    if (params.ville) {
      fetchWeatherData();
    }
  }, [params.ville]);

  const getWeatherIcon = (weatherCondition) => {
    const condition = weatherCondition.toLowerCase();
    if (condition.includes("clear")) return icons.clear;
    if (condition.includes("clouds")) return icons.clouds;
    if (condition.includes("rain")) return icons.rain;
    if (condition.includes("snow")) return icons.snow;
    return icons.night;
  };

  const getDayOfWeek = (date) => {
    const options = { weekday: 'long' };
    const dayName = new Date(date).toLocaleDateString('fr-FR', options);
    return dayName.charAt(0).toUpperCase() + dayName.slice(1);
  };

  const getNext5DaysForecast = (forecastList) => {
    const dailyData = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextDays = [tomorrow.getTime()];

    for (let i = 1; i < 5; i++) {
      const nextDay = new Date(nextDays[i - 1]);
      nextDay.setDate(nextDay.getDate() + 1);
      nextDays.push(nextDay.getTime());
    }

    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000);
      date.setHours(0, 0, 0, 0);
      if (nextDays.includes(date.getTime())) {
        dailyData[date.getTime()] = item;
      }
    });

    return Object.values(dailyData);
  };

  // Show loader while loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <ColorSchemesExample />
      </div>

      <div className="CONTAINERDECON">
        <div id="weather-container">
          <h2>Météo</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="city"
              value={inputValue}
              onChange={handleChange}
              placeholder="Tapez quelque chose"
            />
            <Link href={`/${encodeURIComponent(inputValue)}`}>
              <button className="buttoncard" type="submit">Recherche</button>
            </Link>
          </form>

          {error ? (
            <div className="error-message">
              <p>{error}</p>
            </div>
          ) : (
            weatherData && (
              <div id="temp-div">
                <h1>Aujourd'hui</h1>
                <img
                  id="weather-icon"
                  alt="Weather Icon"
                  src={getWeatherIcon(weatherData.weather[0].main)}
                />
                <h1>{Math.round(weatherData.main.temp)}°C</h1>

                <div className="updodwn">
                  <h2>
                    <img src={icons.thermup} className="therme" /> {Math.round(weatherData.main.temp_max)}°C
                  </h2>
                  <h2>
                    <img src={icons.thermdown} className="therme" /> {Math.round(weatherData.main.temp_min)}°C
                  </h2>
                </div>
              </div>
            )
          )}

          {weatherData && (
            <div id="weather-info">
              <h5>{weatherData.name}</h5>
              <h5>{new Date(weatherData.dt * 1000).toLocaleTimeString()}</h5>
            </div>
          )}

          <div id="hourly-forecast">
            {forecastData && forecastData.list.slice(0, 8).map((hour, index) => (
              <div key={index} className="hourly-item">
                <span>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <img
                  src={getWeatherIcon(hour.weather[0].main)}
                  alt="Hourly Weather Icon"
                />
                <span>{Math.round(hour.main.temp)}°C</span>
              </div>
            ))}
          </div>
        </div>

        <div className="week-container">
          {forecastData && getNext5DaysForecast(forecastData.list).map((day, index) => (
            <div key={index} id="weather-container3">
              <h1>{getDayOfWeek(day.dt * 1000)}</h1>
              <div id="weather-info2">
                <h5>{params.ville}</h5>
              </div>
              <img
                id="weather-icon2"
                alt="Weather Icon"
                src={getWeatherIcon(day.weather[0].main)}
              />
              <h5>{Math.round(day.main.temp)}°C</h5>

              <div id="couleur">
                <div className="updodwn">
                  <h1>
                    <img src={icons.thermup} className="therme" /> {Math.round(day.main.temp_max)}°C
                  </h1>
                  <h1>
                    <img src={icons.thermdown} className="therme" /> {Math.round(day.main.temp_min)}°C
                  </h1>
                </div>
              </div>

              <div className="Humidity-Wind-data">
                <div className="col">
                  <img src={icons.wind} alt="Wind Icon" />
                  <p>Vitesse</p>
                  <span>{Math.round(day.wind.speed)} km/h</span>
                </div>
                <div className="col">
                  <img src={icons.humidity} alt="Humidity Icon" />
                  <p>Humidité</p>
                  <span>{day.main.humidity}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
