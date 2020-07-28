import React from "react";
import "./Hero.css";

export default function Hero(props) {
  const styles = {
  	backgroundImage: `url(${props.backgroundImage})`,
  };

  if (props.backgroundPosition) {
  	styles.backgroundPosition = props.backgroundPosition;
  }

  return (
    <div className="hero" style={styles}>
      {/* <h1 className="hero-phrase">{props.phrase}</h1> */}
      <h3 className="hero-hashtag">#GarrettLovesALittleWang</h3>
    </div>
  );
}
