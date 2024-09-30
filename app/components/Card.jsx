import Link from "next/link";

const icsun = '/assets/img/sun.png';
const picsun= '/assets/img/psun.png';
const icnight ='/assets/img/night.png';

export default function Card() {
    return (
        <>

        <div>
            <div className="weather-row">
                <div id="weather-container">
                    <h2>Méteo</h2>
                    <input type="text" id="city" placeholder="Enter city"/>
                    <button onClick="getWeather()">Recherche</button>
                    <div id="temp-div"> 
                        <h1>Aujourd'hui</h1>
                        <img id="weather-icon" alt="Weather Icon" src={icsun}/>
                        <p>13°C</p>
                    </div>
                    <div id="weather-info">  
                        <p>Paris</p>
                        <p>13:00</p>
                    </div>
                    <div id="hourly-forecast">
                        <div className="hourly-item">
                            <span>00:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>01:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>                
                        <div className="hourly-item">
                            <span>03:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                   
                        </div>
                        <div className="hourly-item">
                            <span>04:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>05:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>06:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>07:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>08:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>09:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>10:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>11:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>12:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>00:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>01:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>                
                        <div className="hourly-item">
                            <span>03:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                   
                        </div>
                        <div className="hourly-item">
                            <span>04:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>05:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>06:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>07:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>08:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>09:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>10:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>11:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>
                        <div className="hourly-item">
                            <span>12:00</span>
                            <img src={icnight} alt="Hourly Weather Icon"/>
                            <span>15°C</span>                     
                        </div>         
                    </div>
                </div>
                <div className="week-container">
                    <div id="weather-container3">
                        <h1>Mercredi</h1>
                        <img id="weather-icon2" alt="Weather Icon" src={picsun}/>
                        <div id="temp-div2"> 
                            <p>13°C</p>
                        </div>
                        <div id="weather-info2">  
                            <p>Paris</p>
                            <p>13:00</p>
                        </div>        
                        <div className="Humidty-Wind-data">
                            <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            </div>
                                <div>
                                    <p>Vitesse</p>
                                    <span>20Kh/m</span>
                                </div>
                                <div className="col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                </svg>
                                </div>
                                <div>
                                    <p>Humidité</p>
                                    <span>90%</span>
                                </div>
                        </div>
                    </div>

                    <div id="weather-container3">
                        <h1>Jeudi</h1>
                        <img id="weather-icon2" alt="Weather Icon" src={picsun}/>
                        <div id="temp-div2"> 
                            <p>13°C</p>
                        </div>
                        <div id="weather-info2">  
                            <p>Paris</p>
                            <p>13:00</p>
                        </div>
                        <div className="Humidty-Wind-data">
                            <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            </div>
                                <div>
                                    <p>Vitesse</p>
                                    <span>20Khm</span>
                                </div>
                                <div className="col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                </svg>
                                </div>
                                <div>
                                    <p>Humidité</p>
                                    <span>90%</span>
                                </div>
                        </div>
                    </div>

                    <div id="weather-container3">
                        <h1>Vendredi</h1>
                        <img id="weather-icon2" alt="Weather Icon" src={picsun}/>
                        <div id="temp-div2"> 
                            <p>13°C</p>
                        </div>
                        <div id="weather-info2">  
                            <p>Paris</p>
                            <p>13:00</p>
                        </div>
                        <div className="Humidty-Wind-data">
                            <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            </div>
                                <div>
                                    <p>Vitesse</p>
                                    <span>20Khm</span>
                                </div>
                                <div className="col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                </svg>
                                </div>
                                <div>
                                    <p>Humidité</p>
                                    <span>90%</span>
                                </div>
                        </div>
                    </div>

                    <div id="weather-container3">
                        <h1>Samedi</h1>
                        <img id="weather-icon2" alt="Weather Icon" src={picsun}/>
                        <div id="temp-div2"> 
                            <p>13°C</p>
                        </div>
                        <div id="weather-info2">  
                            <p>Paris</p>
                            <p>13:00</p>
                        </div>     
                           
                        <div id="hourly2-forecast">
                        </div>
                        <div className="Humidty-Wind-data">
                            <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            </div>
                                <div>
                                    <p>Vitesse</p>
                                    <span>20Khm</span>
                                </div>
                                <div className="col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                </svg>
                                </div>
                                <div>
                                    <p>Humidité</p>
                                    <span>90%</span>
                                </div>
                        </div>
                    </div>
                    
                    <div id="weather-container3">
                        <h1>Dimanche</h1>
                        <img id="weather-icon2" alt="Weather Icon" src={picsun}/>
                        <div id="temp-div2"> 
                            <p>13°C</p>
                        </div>
                        <div id="weather-info2">  
                            <p>Paris</p>
                            <p>13:00</p>
                        </div>
                        <div className="Humidty-Wind-data">
                            <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            </div>
                                <div>
                                    <p>Vitesse</p>
                                    <span>20Khm</span>
                                </div>
                                <div className="col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                </svg>
                                </div>
                                <div>
                                    <p>Humidité</p>
                                    <span>90%</span>
                                </div>
                        </div>
                    </div>

                    <div id="weather-container3">
                        <h1>Lundi</h1>
                        <img id="weather-icon2" alt="Weather Icon" src={picsun}/>
                        <div id="temp-div2"> 
                            <p>13°C</p>
                        </div>
                        <div id="weather-info2">  
                            <p>Paris</p>
                            <p>13:00</p>
                        </div>
                        <div className="Humidty-Wind-data">
                            <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            </div>
                                <div>
                                    <p>Vitesse</p>
                                    <span>20Khm</span>
                                </div>
                                <div className="col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                </svg>
                                </div>
                                <div>
                                    <p>Humidité</p>
                                    <span>90%</span>
                                </div>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
