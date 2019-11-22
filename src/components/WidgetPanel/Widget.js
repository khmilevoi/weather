import React from "react";
import PropTypes from "prop-types";

import { Grid, Card, makeStyles } from "@material-ui/core";
import { Replay as ReplayIcon, Delete as DeleteIcon } from "@material-ui/icons";
import { parseDt } from "api/WeatherAPI";

import * as s from "styles/Widget";
import { SideButton, Rotate, Temperature, Icon } from "styles/Index";

const useStyles = makeStyles(() => ({
  item: {
    minWidth: "220px",
    maxWidth: "100%",
    flexGrow: "1"
  },
  card: {
    transition: "0.1s",
    cursor: "pointer",

    "& .button": {
      opacity: "0"
    },

    "&:hover": {
      transform: "scale(1.05)",

      "& .button": {
        opacity: "1"
      }
    }
  }
}));

export const Widget = ({ city, handleUpdate, handleRemove, handleClick }) => {
  const classes = useStyles();

  const [weather] = city.weather;
  const { icon } = weather;

  const { temp } = city.main;

  const { dt } = city;
  const { string } = parseDt(dt);

  return (
    <Grid item xs={3} className={classes.item}>
      <Card className={classes.card} onClick={() => handleClick()}>
        <s.Widget>
          <SideButton
            className="button"
            onClick={event => {
              event.stopPropagation();
              handleUpdate();
            }}
          >
            <Rotate rotating={city.isLoading}>
              <ReplayIcon fontSize="small"></ReplayIcon>
            </Rotate>
          </SideButton>
          <SideButton
            className="button"
            hoverColor="#F44336"
            onClick={event => {
              event.stopPropagation();
              handleRemove();
            }}
          >
            <DeleteIcon fontSize="small"></DeleteIcon>
          </SideButton>
          <s.Row column>
            <s.CityName>{city.name}</s.CityName>
            <s.Time>{string} </s.Time>
          </s.Row>
          <s.Row>
            <Temperature>{Math.floor(temp)}</Temperature>
            <Icon name={icon}></Icon>
          </s.Row>
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
