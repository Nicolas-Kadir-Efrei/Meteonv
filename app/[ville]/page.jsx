'use client';

import { useState } from "react";
import { Suspense } from "react";
import Link from 'next/link'; // Ajout de l'import pour le composant Link
import Loading from "./loading";
import ColorSchemesExample from "../components/Navbar";

const icsun = '/assets/img/sun.png';
const icnight = '/assets/img/night.png';
const hum ='/assets/img/humidity.png'

export default function Pageville({ params }) {
  const [inputValue, setInputValue] = useState('');

  // Fonction pour gérer le changement de l'input et capitaliser la première lettre
  const handleChange = (e) => {
    const value = e.target.value;
    // Capitalise la première lettre et concatène le reste du texte
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInputValue(capitalizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <ColorSchemesExample />
      </div>

      <div className="CONTAINERDECON">
        <div className="weather-row">
          <div id="weather-container">
            <h2>Méteo</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="city"
                value={inputValue}
                onChange={handleChange}  // L'appel à handleChange est ici
                placeholder="Tapez quelque chose"
              />
              <Link href={`/${encodeURIComponent(inputValue)}`}>
                <button className="buttoncard" type="submit">Recherche</button>
              </Link>
            </form>
            
            <div id="temp-div">
              <h1>Aujourd'hui</h1>
              <img id="weather-icon" alt="Weather Icon" src={icsun} />
              <h1>13°C</h1>
            </div>

            <div id="weather-info">
              <h5>{params.ville}</h5>
              <h5>13:00</h5>
            </div>

            <div id="hourly-forecast">
              {["00:00", "01:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"].map((hour, index) => (
                <div key={index} className="hourly-item">
                  <span>{hour}</span>
                  <img src={icnight} alt="Hourly Weather Icon" />
                  <span>15°C</span>
                </div>
              ))}
            </div>
          </div>

          <div className="week-container">
            {["Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi"].map((day, index) => (
              <div key={index} id="weather-container3">
                <h1>{day}</h1>
                <img id="weather-icon2" alt="Weather Icon" src={icsun} />
                <div id="temp-div2">
                  <h5>13°C</h5>
                </div>
                <div id="weather-info2">
                  <h5>{params.ville}</h5>
                  <h5>13:00</h5>
                </div>

                <div className="Humidty-Wind-data">
                  <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                    </svg>
                  </div>
                  <div>
                    <p>Vitesse</p>
                    <span>15km/h</span>
                  </div>
                  <div className="col">
                   <img src={hum} alt="" />
                  </div>
                  <div>
                    <p>Humidité</p>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
