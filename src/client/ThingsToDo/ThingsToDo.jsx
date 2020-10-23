import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import BackgroundImage from "../../assets/coffee_shop.jpg";
import pois from "../../data/things-to-do.js";
import Hero from "../Hero/Hero.jsx";
import ItemCard from "../Components/ItemCard/ItemCard.jsx";
import "./ThingsToDo.css";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filters: {
    textAlign: "left",
    width: "100%",
    padding: "0 10px",
  },
  filterButton: {
    color: "#fff",
    background: "#88AADD",
    margin: "5px",
    opacity: 0.4,
    '&:hover': {
      background: "#88AADD",
      opacity: 0.5,
    }
  },
  filterButtonOn: {
    color: "#fff",
    background: "#88AADD",
    margin: "5px",
    opacity: 1,
   '&:hover': {
      background: "#88AADD",
      opacity: 0.9,
    }
  },
  items: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
  },
}));

export default function ThingsToDo() {
  const classes = useStyles();
  const buttons = ["Coffee", "Brunch", "Lunch", "Dinner", "Drinks", "Dessert"];
  const [filters, setFilters] = useState([]);

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
      return poi;
    }
  });

  return (
    <div className="things-to-do">
      <Hero
      	backgroundImage={BackgroundImage}
      	backgroundPosition="top"
      	phrase="THINGS TO DO"
      />

      <div className="content">
        <div className={classes.filters}>
          <Typography variant="h4">Filters:</Typography>
          {buttons.map((filter) => 
          (<Button
              key={filter}
              className={filters.indexOf(filter) >= 0 ? classes.filterButtonOn : classes.filterButton}
              onClick={() => clickFilter(filter)}
            >
              {filter}
            </Button>)
          )}
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
