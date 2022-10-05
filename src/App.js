import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lysandrawj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lysandra Webba Jorge
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/OnyxQueen0128/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
