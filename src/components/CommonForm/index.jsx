import React from "react";
import "./CommonForm.css";

const CommonForm = ({ submitForm, inputs }) => {
    return (
        <form className="CommonForm" onSubmit={submitForm}>
            {inputs.map(input => {
                return (
                    <input
                        key={input.name || input.placeholder || input.value}
                        {...input}
                    />
                )
            })}
        </form>
    )
}

export default CommonForm;
