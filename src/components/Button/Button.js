import React from "react";
import "./Button.css";

export const Button = ({ buttonText }) => {
  return (
    <div className="button-container">
      <button type="submit">{buttonText}</button>
    </div>
  );
};
