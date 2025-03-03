import React from "react";
import './weatherInfo.css';

const WeatherInfo = ({ data }) => {
    if (!data) return null;
    const info = data.map((item, index) => {
        return (
            <div key={item.text + index} className="weatherInfo__key">
                <p>{item.text}</p>
                <p className="weatherInfo__value">
                    {item.data}
                </p>
            </div>
        );
    });

    return (
        <div className="weatherInfo">
            {info}
        </div>
    )
}

export default WeatherInfo;
