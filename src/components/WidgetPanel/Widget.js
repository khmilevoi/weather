import React from "react";
import PropTypes from "prop-types";

import { Grid, Card, makeStyles, useMediaQuery } from "@material-ui/core";
import { Replay as ReplayIcon, Delete as DeleteIcon } from "@material-ui/icons";
import { parseDt } from "api/WeatherAPI";

import * as s from "styles/Widget";
import { Row } from "styles/Index";

const useStyles = makeStyles(() => ({
  item: ({ matches }) => ({
    minWidth: "220px",
    maxWidth: matches ? "100%" : "50%",
    flexGrow: "1"
  }),
  card: {
    transition: "0.1s",
    cursor: "pointer",

    "& .button": {
      visibility: "hidden"
    },

    "&:hover": {
      transform: "scale(1.05)",

      "& .button": {
        visibility: "visible"
      }
    }
  }
}));

export const Widget = ({ city, handleUpdate, handleRemove, handleClick }) => {
  const matches = useMediaQuery("(max-width: 500px)");
  const classes = useStyles({ matches });

  const [weather] = city.weather;
  const { icon } = weather;

  const { temp } = city.main;

  const { dt } = city;
  const date = parseDt(dt);

  return (
    <Grid item xs={3} className={classes.item}>
      <Card className={classes.card} onClick={() => handleClick()}>
        <s.Widget>
          <s.SideButton
            className="button"
            onClick={event => {
              event.stopPropagation();
              handleUpdate();
            }}
          >
            <s.Rotate rotating={city.isLoading}>
              <ReplayIcon fontSize="small"></ReplayIcon>
            </s.Rotate>
          </s.SideButton>
          <s.SideButton
            className="button"
            hoverColor="#F44336"
            onClick={event => {
              event.stopPropagation();
              handleRemove();
            }}
          >
            <DeleteIcon fontSize="small"></DeleteIcon>
          </s.SideButton>
          <Row column>
            <s.CityName>{city.name}</s.CityName>
            <s.Time>{date.string} </s.Time>
          </Row>
          <Row>
            <s.Temperature>{Math.floor(temp)}</s.Temperature>
            <s.Icon name={icon}></s.Icon>
          </Row>
        </s.Widget>
      </Card>
    </Grid>
  );
};

Widget.propTypes = {
  city: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};
