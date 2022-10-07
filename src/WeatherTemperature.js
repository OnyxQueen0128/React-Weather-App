import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertCelcius}>
            °C
          </a>
        </span>
      </span>
    );
  }
}
