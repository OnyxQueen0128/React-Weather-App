// eslint-disable-next-line
import React, { useState } from "react";
// eslint-disable-next-line
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Search for a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Zurich</h1>
      <ul>
        <li> Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Mostly Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">17</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
