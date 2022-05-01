import React from "react";
import "./CommonForm.css";

const CommonForm = ({ submitForm, inputs }) => {
    return (
        <form className="CommonForm" onSubmit={submitForm}>
            {inputs.map(input => {
                return (
                    <input
                        {...input}

                    />
                )
            })}
            {/* <button>Get Weather</button> */}
        </form>
    )
}

export default CommonForm;
