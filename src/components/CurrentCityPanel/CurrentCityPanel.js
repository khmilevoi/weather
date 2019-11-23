import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  Dialog,
  makeStyles,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import { Delete as DeleteIcon, Replay as ReplayIcon } from "@material-ui/icons";

import { fetchCities, removeCity } from "store/actions/weather";
import { close } from "store/actions/modalPanel";
import { parseDt } from "api/WeatherAPI";
import { HourlyForecast } from "./HourlyForecast";

import * as s from "styles/CurrentCityPanel";
import { Row } from "styles/Index";
import { fetchHourlyForecast } from "store/actions/currentCity";

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",

    "@media (max-width: 420px)": {
      maxWidth: "100% !important",
      margin: "0"
    }
  },
  content: {
    overflow: "hidden",

    "@media (max-width: 420px)": {
      padding: "0"
    }
  }
}));

const CurrentCityPanel = ({
  opened,
  city,
  isLoading,
  list,
  close,
  modal,
  fetchCities,
  removeCity,
  fetchHourlyForecast
}) => {
  const classes = useStyles();

  if (!city.id) return <></>;

  const { id, name, dt, main } = city;
  const date = parseDt(dt);
  const [weather] = city.weather;

  return (
    <Dialog
      open={opened && modal === "current-city"}
      onClose={() => close()}
      classes={{ paper: classes.paper }}
      scroll="body"
    >
      <DialogTitle>
        <s.CityName>{name}</s.CityName>
        <s.Time>{date.string}</s.Time>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Row column>
          <s.Main>
            <s.Temperature>{Math.floor(main.temp)}</s.Temperature>
            <s.Icon name={weather.icon}></s.Icon>
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
          onClick={() => removeCity(id) && close()}
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
        <Button size="small" onClick={() => close()}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CurrentCityPanel.propTypes = {
  opened: PropTypes.bool.isRequired,
  city: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
  fetchCities: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  fetchHourlyForecast: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  city: state.currentCity.city || {},
  list: state.currentCity.list,
  opened: state.modalPanel.opened,
  modal: state.modalPanel.modal,
  isLoading: state.currentCity.isLoading
});

const mapDispatchToProps = {
  close,
  fetchCities,
  removeCity,
  fetchHourlyForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCityPanel);
