import React, { useState } from "react";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function Search(event) {
    event.preventDefault();
    setMessage(`It is 19°C in ${city}`);
  }

  function displayQuery(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={Search}>
        <input type="search" onChange={displayQuery} />
        <input type="submit" value="Search" />
      </form>
      <h3>{message}</h3>
    </div>
  );
}
