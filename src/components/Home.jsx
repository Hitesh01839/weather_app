import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=e482febfd12a4d8481b94338222604&q=${city}&aqi=no`
      )
      .then((response) => {
        setWeather(response);
        setError("");
      })
      .catch((err) => {
        setWeather({});
        setError(err);
        console.log(err)
      });
  };

  const renderData = (weather) => {
    console.log(weather);
    return (
      <div className="">
        <h4>Time: {weather.data.location.localtime.split(" ")[1]}</h4>
        <h4>Temperature: {weather.data.current.temp_c}</h4>
        <h4>Type: {weather.data.current.condition.text}</h4>
        <h4>Wind Speed: {weather.data.current.wind_kph}</h4>
      </div>
    );
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>WeatherApp</h2>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </div>
      <div className="hero">
        <div className="welc-text">
          <h2>Hello;</h2>
        </div>
        <div className="input-form">
          <input type="text" placeholder="City Name" onChange={handleChange} />
          <button onClick={handleClick}>Search</button>
        </div>
        <h3>Name: {city}</h3>
        <span className="line"></span>
        <div className="weather-data">
          {weather ? renderData(weather) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
