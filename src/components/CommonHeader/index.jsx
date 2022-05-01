import React from "react";
import "./CommonHeader.css";

const CommonHeader = ({ title, subtitle }) => {
    return (
        <div className="col-5 CommonHeader-container">
            <div>
                <h1 className="CommonHeader-container__title">{title}</h1>
                {
                    subtitle && (
                        <h3 className="CommonHeader-container__subtitle">
                            {subtitle}
                        </h3>
                    )
                }
            </div>
        </div>
    )
}

export default CommonHeader;
