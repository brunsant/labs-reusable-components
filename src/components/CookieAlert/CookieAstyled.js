import styled from "styled-components";
import React from "react";

export const CookieButton = styled.button`
  background-color: pink;
  border: none;
  margin: 10px;
  padding: 10px 15px;
`;

export const CookieBar = styled.section`
  background-color: black;
  color: aliceblue;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CookieAstyled = ({ cookieText }) => {
  return (
    <CookieBar>
      <p>{cookieText}</p>
      <CookieButton> X </CookieButton>
    </CookieBar>
  );
};
