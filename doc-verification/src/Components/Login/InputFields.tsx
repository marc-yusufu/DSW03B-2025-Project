import React, { useState } from "react";
import "./InputFields.css"

const InputField = ({ label, buttonLabel, type = "text", placeholder, onButtonClick }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          type={type}
          className="input-box" 
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {buttonLabel && (
          <button className="input-button" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
      
    </div>
  );
};

export default InputField;
