import React, { useState } from "react";
import "./InputFields.css"

type InputFieldProps = {
  label?: string;
  buttonLabel?: string;
  type?: string;
  placeholder?: string;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const InputField = ({
  label = "text",
  buttonLabel = "text",
  type = "text",
  placeholder = "text",
  onButtonClick,
}: InputFieldProps) => {
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
  // ... rest of your JSX
};


export default InputField;
