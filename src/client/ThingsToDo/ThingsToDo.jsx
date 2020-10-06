import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/coffee_shop.jpg";
import pois from "../../data/things-to-do.js";
import "./ThingsToDo.css";
import ItemsList from "../Components/ItemsList/ItemsList.jsx";

export default function ThingsToDo() {
  return (
    <div className="things-to-do">
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="THINGS TO DO"
      />
      <div className="content">
        <ItemsList title="Coffee" items={pois.coffee} />
        <ItemsList title="Brunch" items={pois.brunch} />
        <ItemsList title="Lunch" items={pois.lunch} />
        <ItemsList title="Dinner" items={pois.dinner} />
        <ItemsList title="Drinks" items={pois.drinks} />
        <ItemsList title="Dessert" items={pois.dessert} />
      </div>
    </div>
  );
}
