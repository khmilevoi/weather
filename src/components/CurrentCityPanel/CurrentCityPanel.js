import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  Dialog,
  makeStyles,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useMediaQuery
} from "@material-ui/core";
import { Delete as DeleteIcon, Replay as ReplayIcon } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

import { fetchCities, removeCity } from "store/actions/weather";
import { parseDt } from "api/WeatherAPI";
import { HourlyForecast } from "./HourlyForecast";
import { fetchHourlyForecast } from "store/actions/currentCity";

import * as s from "styles/CurrentCityPanel";
import { Row } from "styles/Index";

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%"
  },
  content: ({ fullScreen }) => ({
    overflow: "hidden",
    paddingLeft: fullScreen ? "inherit" : "0",
    paddingRight: fullScreen ? "inherit" : "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  })
}));

const CurrentCityPanel = ({
  city,
  isLoading,
  list,
  fetchCities,
  removeCity,
  fetchHourlyForecast,
  match,
  history
}) => {
  const id = match.params.id;

  useEffect(() => {
    fetchHourlyForecast(+id);
  }, [fetchHourlyForecast, id]);

  const fullScreen = useMediaQuery("(max-width: 420px)");
  const classes = useStyles({ fullScreen });

  const { name, dt, main = {}, sys = {}, weather = [] } = city;
  const date = parseDt(dt);

  const [currentWeather = {}] = weather;

  const handleClose = () => history.replace("/");

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      fullScreen={fullScreen}
      scroll="body"
      open={match.isExact}
      onClose={() => handleClose()}
    >
      <DialogTitle>
        <s.CityName>
          {name}, {sys.country}
        </s.CityName>
        <s.Time>{date.string}</s.Time>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Row column>
          <s.Main>
            <s.Temperature>{Math.floor(main.temp)}</s.Temperature>
            <s.Icon name={currentWeather.icon}></s.Icon>
          </s.Main>
          <s.MinMax>
            <s.Temperature>{Math.floor(main.temp_min)}</s.Temperature>
            {" / "}
            <s.Temperature>{Math.floor(main.temp_max)}</s.Temperature>
          </s.MinMax>
        </Row>
        <Row>
          <HourlyForecast list={list} isLoading={isLoading}></HourlyForecast>
        </Row>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          startIcon={<DeleteIcon />}
          size="small"
          onClick={() => removeCity(id) && handleClose()}
        >
          Delete
        </Button>{" "}
        <Button
          color="primary"
          endIcon={<ReplayIcon></ReplayIcon>}
          size="small"
          onClick={() => fetchCities(id) && fetchHourlyForecast(id)}
        >
          Update
        </Button>
        <Button size="small" onClick={() => handleClose()}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CurrentCityPanel.propTypes = {
  city: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  fetchCities: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  fetchHourlyForecast: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.currentCity.city || {},
  list: state.currentCity.list,
  isLoading: state.currentCity.isLoading
});

const mapDispatchToProps = {
  fetchCities,
  removeCity,
  fetchHourlyForecast
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CurrentCityPanel));
