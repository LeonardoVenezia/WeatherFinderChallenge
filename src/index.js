import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import { useState } from "react";
import { getWeather } from "./services/weatherServices";
import CommonHeader from "./components/CommonHeader";
import CommonForm from "./components/CommonForm";

const App = ()=> {
  const [apiData, setApiData] = useState(
    {
      data: [],
      error: null,
    }
  );
  const inputs = [
    {
      type: "text",
      name: "city",
      placeholder: "Madrid",
    },
    {
      type: "text",
      name: "country",
      placeholder: "es",
    },
    {
      type: "submit",
      name: "submit",
      value: "Get Weather"
    },
  ]
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
                <CommonHeader
                  title="Weather Finder"
                  subtitle="Find out temperature, conditions and more..."
                />
                <div className="col-7 form-container">
                  <CommonForm
                    submitForm={submitForm}
                    inputs={inputs}
                  />
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
