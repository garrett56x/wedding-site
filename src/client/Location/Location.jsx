import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/ivy.jpg";
import "./Location.css";

export default function Location() {
  return (
    <div className="location">
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="WHEN &amp; WHERE"
      />
      <div className="content">
      	<h2>Date &amp; Time</h2>
      	<p>March 20th, 2021 - 5PM</p>

		<h2>Dress Code</h2>
      	<p>Black tie optional</p>

      	<h2>Location</h2>
      	<p>Hotel Ballard</p>
      	<p><a href="tel:206-789-5012">(206) 789-5012</a> | <a target="_blank" rel="noopener noreferrer" href="https://www.hotelballardseattle.com/en-us">Hotel Website</a></p>
      	<p>
			We have reserved a small number of rooms for our guests.
			Please reference the Van Neste / Wang party when making your reservations for a special discount.
		</p>
		<div className="gmap_canvas">
			<iframe title="map" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hotel%20ballard&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
			</iframe>
		</div>
	  </div>
    </div>
  );
}
