import React from "react";
import Hero from "../Hero/Hero.jsx";
import BackgroundImage from "../../assets/coffee_shop.jpg";
import pois from "../../data/things-to-do.js";
import "./ThingsToDo.css";
import ItemCard from "../Components/ItemCard/ItemCard.jsx";

export default function ThingsToDo() {
  const items = [...pois.coffee, ...pois.brunch, ...pois.lunch, ...pois.dinner, ...pois.drinks, ...pois.dessert];
  // console.log(items);
  return (
    <div className="things-to-do">
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="THINGS TO DO"
      />
      <div className="content">
        {items.map((item) => (
            <ItemCard key={item.slug} title="Test" item={item} />
        ))}
      </div>
    </div>
  );
}
