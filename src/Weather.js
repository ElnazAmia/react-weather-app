import React from "react";

import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="weather-app">
          <div className="row first-box ">
            <Search />
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
        <footer>
          <small>
            <a
              href="https://github.com/ElnazAmia/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Elnaz Amia
          </small>
        </footer>
      </div>
    </div>
  );
}
