import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import { useState } from "react";
import { getWeather } from "./services/weatherServices";

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
  const submitForm = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const data = await getWeather(city, country);
      setApiData(data);
    } else {
      setApiData({
        data: [],
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
                  <form onSubmit={submitForm}>
                    <input type="text" name="city" placeholder="Madrid" />
                    <input type="text" name="country" placeholder="es" />
                    <button>Get Weather</button>
                  </form>
                   <WeatherInfo
                    data={apiData.data}
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
