import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './weatherInfo.css';

const WeatherInfo = ({ data }) => {
    if (!data) return null;
    return data.map(item => {
        return (
            <p className="weatherInfo__key">
                {item.ttext}
                <span className="weatherInfo__value">
                    {item.data}
                </span>
            </p>
        )
    })

    // return (
    // <div className="weatherInfo">
    //     {this.state.city && this.state.country && (
    //         <p className="weatherInfo__key">
    //             {" "}
    //             Location:
    //             <span className="weatherInfo__value">
    //                 {" "}
    //                 {this.state.city}, {this.state.country}
    //             </span>
    //         </p>
    //     )}
    //     {this.state.temperature && (
    //         <p className="weatherInfo__key">
    //             {" "}
    //             Temperature:
    //             <span className="weatherInfo__value">
    //                 {" "}
    //                 {this.state.temperature}{" "}
    //             </span>
    //         </p>
    //     )}
    //     {this.state.humidity && (
    //         <p className="weatherInfo__key">
    //             {" "}
    //             Humidity:
    //             <span className="weatherInfo__value">
    //                 {" "}
    //                 {this.state.humidity}{" "}
    //             </span>
    //         </p>
    //     )}
    //     {this.state.description && (
    //         <p className="weatherInfo__key">
    //             {" "}
    //             Conditions:
    //             <span className="weatherInfo__value">
    //                 {" "}
    //                 {this.state.description}{" "}
    //             </span>
    //         </p>
    //     )}
    //     {this.state.error && (
    //         <p className="weatherInfo__error">{this.state.error}</p>
    //     )}
    // </div>
    // )
}

export default WeatherInfo;
