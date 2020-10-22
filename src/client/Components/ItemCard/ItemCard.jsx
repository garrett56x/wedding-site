import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  contentSection: {
    fontWeight: "bold",
  }
}));

export default function ItemCard({item}) {
  const classes = useStyles();
  const images = require.context('../../../assets', true);
	const img = images('./' + item.image);

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={item.name}
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
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
