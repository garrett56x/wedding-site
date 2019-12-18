import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/coffee_shop.jpg";
import pois from "../../data/things-to-do.js";
import "./ThingsToDo.css";
import ItemCard from "../Components/ItemCard/ItemCard.jsx"

export default function ThingsToDo() {
  return (
    <div className="things-to-do">
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="THINGS TO DO"
      />
      <div className="content">
        <h2>Brunch</h2>
        {pois.brunch.map((item) => (
          <ItemCard item={item} />
        ))}
        <h2>Lunch</h2>
        {pois.lunch.map((item) => (
          <ItemCard item={item} />
        ))}
        <h2>Dinner</h2>
        {pois.dinner.map((item) => (
          <ItemCard item={item} />
        ))}
        <h2>Drinks</h2>
        {pois.drinks.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
}
