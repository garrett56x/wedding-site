import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import { Directions, Favorite, Phone, Public } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: "10px",
    position: "relative",
    paddingBottom: "64px",
  },
  favorite: {
    color: "#ff7f7f",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  contentSection: {
    fontWeight: "bold",
  },
  actions: {
    position: "absolute",
    bottom: 0
  }
}));

export default function ItemCard({item, title}) {
  const classes = useStyles();
  // @ts-ignore
  const images = require.context('../../../assets', true);
  const img = images('./' + item.image);
  let favorites = JSON.parse(localStorage.getItem("myFavorites"));
  const [favorite, setFavorite] = useState(favorites.indexOf(item.slug) >= 0);

  const clickFavorite = () => {
    if (favorites) {
      if (favorite) {
        favorites.splice(favorites.indexOf(item.slug), 1);
        setFavorite(false);
      } else {
        favorites.push(item.slug);
        setFavorite(true);
      }
    } else {
      favorites = [item.slug];
    }

    localStorage.setItem("myFavorites", JSON.stringify(favorites));
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton className={favorite ? classes.favorite : ""} aria-label="add to favorites" onClick={clickFavorite}>
            <Favorite />
          </IconButton>
        }
        title={item.name}
        // subheader={title}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title={item.name}
      />
      <CardContent>
        <Typography variant="body2">
          <span className={classes.contentSection}>Her Favorite:</span> {item.hers}
        </Typography>
        <Typography variant="body2">
          <span className={classes.contentSection}>His Favorite:</span> {item.his}
        </Typography>
        <Typography variant="body2">
          <span className={classes.contentSection}>Recommendation:</span> {item.recommendation}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <IconButton aria-label="website" href={item.website} target="_blank">
          <Public />
        </IconButton>
        <IconButton aria-label="phone" href={`tel:${item.phone}`}>
          <Phone />
        </IconButton>
        <IconButton aria-label="directions" href={`http://maps.google.com/?q=${item.location}`} target="_blank">
          <Directions />
        </IconButton>
      </CardActions>
    </Card>
  );
}
