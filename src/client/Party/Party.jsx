import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/spinning.jpg";
import Watershed from "../../assets/watershed.jpg";
import Cocktails from "../../assets/cocktails.jpg";
import "./Party.css";

export default function Party() {
  return (
    <div className="party">
      <Hero
        backgroundImage={BackgroundImage}
        backgroundPosition="top"
        phrase="PARTY WITH US"
      />
      <div className="content">
        <h2>Rehersal Dinner</h2>
        <p>Belltown Pizza</p>
        <p>
          <a href="tel:206-441-2653">(206) 441-2653</a>
        </p>
        <p>
          We are hosting a rehersal dinner on October 1st at Belltown Pizza, the
          place where we met! Join us for some pizza, meatballs, and drinks.
        </p>
        <div className="gmap_canvas">
          <iframe
            title="map"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=belltown%20pizza&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
        <h2>After Party</h2>
        <p>Percy's &amp; Co</p>
        <p>
          Our wedding after party! If you want to keep the party going after the
          wedding, head across the street to Percy's. There is plenty to do at
          night in Old Ballard, so we'll see where the night takes us from
          there.
        </p>
        <img width="80%" src={Cocktails} alt="cocktails" />
        <h2>Watershed Bachelor(ette) Party</h2>
        <p>July 30 - August 1</p>
        <p>
          Come join us for a weekend of country music at the Gorge! For details
          about our camping plans, call or text us. The more the merrier!
        </p>
        <img width="80%" src={Watershed} alt="watershed" />
      </div>
    </div>
  );
}
