import React from "react";
import PropTypes from "prop-types";

import { Grid, Card, makeStyles } from "@material-ui/core";
import { Replay as ReplayIcon } from "@material-ui/icons";
import { parseDt } from "api/WeatherAPI";

import * as s from "styles/Widget";
import { SideButton, Rotate } from "styles/Index";

const useStyles = makeStyles(() => ({
  item: {
    minWidth: "220px"
  }
}));

export const Widget = ({ city, handleUpdate }) => {
  const classes = useStyles();

  const [weather] = city.weather;
  const { dt } = city;
  const { string } = parseDt(dt);

  return (
    <Grid item xs={3} className={classes.item}>
      <Card>
        <s.Widget>
          <SideButton onClick={() => handleUpdate()}>
            <Rotate rotating={city.isLoading}>
              <ReplayIcon fontSize="small"></ReplayIcon>
            </Rotate>
          </SideButton>
          <s.Row>
            <s.CityName>{city.name}</s.CityName>
            <s.Time>{string} </s.Time>
          </s.Row>
          <s.Row>
            <s.Main></s.Main>
            <s.Icon></s.Icon>
          </s.Row>
        </s.Widget>
      </Card>
    </Grid>
  );
};

Widget.propTypes = {
  city: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired
};
