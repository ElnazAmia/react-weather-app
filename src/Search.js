import React, { useState } from "react";
import axios from "axios";

import CurrentLocation from "./CurrentLocation";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  const [loaded, setLoad] = useState(false);
  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoad(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
    let apiKey = `f0ff64afa8957098b6eda5ad96796c19`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div>
        <div className="row d-flex">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 "
              type="text"
              placeholder="Enter a city"
              onChange={updateCity}
            ></input>
            <input type="submit" value="Search" className="btn btn-primary " />
            <CurrentLocation />{" "}
          </form>
        </div>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} ℃</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt="weatherDescription" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="row d-flex">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 "
            type="text"
            placeholder="Enter a city"
            onChange={updateCity}
          ></input>
          <input type="submit" value="Search" className="btn btn-primary " />
          <CurrentLocation />{" "}
        </form>
      </div>
    );
  }
}
