import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import { useState } from "react";

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const App = ()=> {
  const [apiData, setApiData] = useState(
    {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null,
    }
  );
  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || "Madrid";
    const country = e.target.elements.country.value || "es";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      setApiData({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      setApiData({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values.",
      });
    }
  };
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-5 title-container">
                  <div>
                    <h1 className="title-container__title">Weather Finder</h1>
                    <h3 className="title-container__subtitle">
                      Find out temperature, conditions and more...
                    </h3>
                  </div>
                </div>
                <div className="col-7 form-container">
                  <form onSubmit={getWeather}>
                    <input type="text" name="city" placeholder="Madrid" />
                    <input type="text" name="country" placeholder="es" />
                    <button>Get Weather</button>
                  </form>
                   {/* <WeatherInfo
                    city={apiData.city}
                    country={apiData.country}
                   /> */}
                  <div className="weather__info">
                    {apiData.city && apiData.country && (
                      <p className="weather__key">
                        {" "}
                        Location:
                        <span className="weather__value">
                          {" "}
                          {apiData.city}, {apiData.country}
                        </span>
                      </p>
                    )}
                    {apiData.temperature && (
                      <p className="weather__key">
                        {" "}
                        Temperature:
                        <span className="weather__value">
                          {" "}
                          {apiData.temperature}{" "}
                        </span>
                      </p>
                    )}
                    {apiData.humidity && (
                      <p className="weather__key">
                        {" "}
                        Humidity:
                        <span className="weather__value">
                          {" "}
                          {apiData.humidity}{" "}
                        </span>
                      </p>
                    )}
                    {apiData.description && (
                      <p className="weather__key">
                        {" "}
                        Conditions:
                        <span className="weather__value">
                          {" "}
                          {apiData.description}{" "}
                        </span>
                      </p>
                    )}
                    {apiData.error && (
                      <p className="weather__error">{apiData.error}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
