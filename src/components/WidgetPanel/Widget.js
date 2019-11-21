import React from "react";
import PropTypes from "prop-types";

import { Grid, Fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  item: {
    minWidth: "200px"
  }
}));

export const Widget = ({ city }) => {
  const classes = useStyles();

  const weather = city.weather[0];

  return (
    <Grid item xs={3} className={classes.item}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={`${process.env.PUBLIC_URL}/img/${weather.icon}.png`}
        alt=""
      />
    </Grid>
  );
};

Widget.propTypes = {
  city: PropTypes.object.isRequired
};
