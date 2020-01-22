import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/wheel.jpg";
import Watershed from "../../assets/watershed.jpg";
import "./Party.css";

export default function Party() {
  return (
    <div className="party">
      <Hero
      	backgroundImage={BackgroundImage}
      	phrase="PARTY WITH US"
      />
      <div className="content">
        <h2>Rehersal Dinner</h2>
      	<p>Belltown Pizza</p>
      	<p><a href="tel:206-441-2653">(206) 441-2653</a></p>
      	<p>
			We are hosting a rehersal dinner on August 14th at Belltown Pizze, the place where we met!
            Join us for some pizza, meatballs, and drinks.
		</p>
		<div class="gmap_canvas">
            <iframe title="map" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=belltown%20pizza&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
		</div>

        <h2>Watershed Bachelor(ette) Party</h2>
      	<p>July 31st - August 2nd</p>
      	<p><a href="https://watershedfest.com/" target="_blank" rel="noopener noreferrer">Get Tickets</a></p>
      	<p>
			Come join us for a weekend of country music at the Gorge! For details about our camping plans,
            call or text us. The more the merrier!
		</p>
        <img width="80%" src={Watershed} alt="watershed" />
      </div>
    </div>
  );
}
