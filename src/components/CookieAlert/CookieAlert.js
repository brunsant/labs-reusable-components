import React from "react";
import "./CookieAlert.css";

export const CookieAlert = ({ cookieText }) => {
  return (
    <section>
      <p>{cookieText}</p>
      <button type="submit">
        <i class="fas fa-times"></i>
      </button>
    </section>
  );
};
