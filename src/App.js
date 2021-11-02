import React from "react";

import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Button } from "components/Button/Button";
import { CookieAlert } from "components/CookieAlert/CookieAlert";

export const App = () => {
  return (
    <div>
      <CookieAlert cookieText="We use cookies to provide you with a better service and for promotional purposes. By continuing to use this site, you consent to our use of cookies as discribed in our cookie policy" />
      <Header title="Get ready for adventure!" backgroundColor="#282627" />
      <Card
        title="The beginning of everything."
        date="JANUARY 2022"
        number="01"
      />
      <SearchBar />
      <Button buttonText="Submit!" />
      <Footer
        links={["About", "Careers", "Pricing", "Feedback", "Roadmap"]}
        color="#282627"
      />
    </div>
  );
};
