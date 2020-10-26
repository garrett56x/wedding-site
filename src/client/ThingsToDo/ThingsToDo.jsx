import React, { useContext, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { Favorite } from '@material-ui/icons';
import BackgroundImage from "../../assets/coffee_shop.jpg";
import pois from "../../data/things-to-do.js";
import Hero from "../Hero/Hero.jsx";
import ItemCard from "../Components/ItemCard/ItemCard.jsx";
import useStyles from "./ThingsToDoStyles.js";
import FavoriteContext from "../../FavoriteContext.js";

export default function ThingsToDo() {
  const classes = useStyles();
  const buttons = ["Coffee", "Brunch", "Lunch", "Dinner", "Drinks", "Dessert"];
  const [filters, setFilters] = useState([]);
  const [displayFavorites, setDisplayFavorites] = useState(false);
  const [favorites] = useContext(FavoriteContext);

  const clickFilter = (filter) => {
    const idx = filters.indexOf(filter);
    const newFilters = [...filters];
    if (idx >= 0) {
      newFilters.splice(idx, 1);
    } else {
      newFilters.push(filter);
    }
    setFilters(newFilters);
  }

  const items = pois.filter((poi) => {
    if (filters.indexOf(poi.category) >= 0 || !filters.length || filters.length === buttons.length) {
      if (displayFavorites && favorites && favorites.indexOf(poi.slug) >= 0) {
        return poi;
      } else if (!displayFavorites) {
        return poi;
      }
    }
    return false;
  });

  return (
    <div>
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="THINGS TO DO"
      />

      <div className={classes.content}>
        <div className={classes.filters}>
          {buttons.map((filter) => 
          (<Button
              key={filter}
              aria-label={filter}
              className={filters.indexOf(filter) >= 0 ? classes.filterButtonOn : classes.filterButton}
              onClick={() => clickFilter(filter)}
            >
              {filter}
            </Button>)
          )}
          {favorites.length ? (
            <IconButton className={displayFavorites ? classes.favoriteButtonOn : ""} aria-label="show favorites" onClick={() => setDisplayFavorites(!displayFavorites)}>
              <Favorite />
            </IconButton>
          ) : (null)}
        </div>
        <div className={classes.items}>
          {items.map((item) => (
            <ItemCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
