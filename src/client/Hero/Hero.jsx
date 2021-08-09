import React, { useState, useEffect } from "react";
import "./Hero.css";
import { IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

export default function Hero(props) {
  const styles = {
    backgroundImage: `url(${props.backgroundImage})`,
  };

  if (props.backgroundPosition) {
    styles.backgroundPosition = props.backgroundPosition;
  }

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const covidDisclaimer = JSON.parse(localStorage.getItem("covidDisclaimer"));
    if (covidDisclaimer && Date.now() - covidDisclaimer.time < 86400000) {
      // If they closed disclaimer within the last 24 hours
      setShowDisclaimer(false);
    }
  }, []);

  const hideDisclaimer = () => {
    setShowDisclaimer(false);

    const covidDisclaimer = {
      show: false,
      time: Date.now(),
    };

    localStorage.setItem("covidDisclaimer", JSON.stringify(covidDisclaimer));
  };

  return (
    <div className="hero" style={styles}>
      {showDisclaimer && (
        <div className="announcement">
          <span>
            <span style={{ fontWeight: "bold" }}>COVID-19 Update: </span>Out of
            respect to all of our guests, we are asking that all guests please
            be vaccinated. If you are unable to get vaccinated, kindly wear a
            mask for the ceremony and reception.
          </span>
          <IconButton
            aria-label="close"
            className="close"
            size="small"
            onClick={() => hideDisclaimer()}
            style={{ marginRight: "20px", color: "white" }}
          >
            <Close fontSize="inherit" />
          </IconButton>
        </div>
      )}
      {/* <h1 className="hero-phrase">{props.phrase}</h1> */}
      <h3 className="hero-hashtag">#GarrettLovesALittleWang</h3>
    </div>
  );
}
