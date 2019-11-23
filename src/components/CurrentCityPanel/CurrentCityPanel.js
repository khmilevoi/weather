import React, { useEffect } from "react";
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
import { setCity, fetchHourlyForecast } from "store/actions/currentCity";

import * as s from "styles/CurrentCityPanel";

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",
    height: "100%"
  }
}));

const CurrentCityPanel = ({
  opened,
  city,
  cityId,
  isLoading,
  list,
  close,
  fetchHourlyForecast,
  fetchCities,
  removeCity
}) => {
  const classes = useStyles();

  useEffect(() => {
    opened && fetchHourlyForecast(cityId);
  }, [opened, fetchHourlyForecast, cityId]);

  return (
    <Dialog
      open={opened}
      onClose={() => close()}
      classes={{ paper: classes.paper }}
    >
      <DialogTitle>asd</DialogTitle>
      <DialogContent>asd</DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => removeCity(cityId) && close()}
        >
          Delete
        </Button>{" "}
        <Button
          color="primary"
          endIcon={<ReplayIcon></ReplayIcon>}
          onClick={() => fetchCities(cityId)}
        >
          Update
        </Button>
        <Button onClick={() => close()}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

CurrentCityPanel.propTypes = {
  opened: PropTypes.bool.isRequired,
  city: PropTypes.object.isRequired,
  cityId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  fetchHourlyForecast: PropTypes.func.isRequired,
  fetchCities: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const cityId = state.currentCity.city || 0;
  const city = cityId
    ? state.weather.cities.find(city => city.id === cityId)
    : {};

  return {
    city,
    cityId,
    opened: !!state.currentCity.city,
    isLoading: state.currentCity.isLoading,
    list: state.currentCity.list
  };
};

const mapDispatchToProps = {
  close: () => setCity(null),
  fetchHourlyForecast,
  fetchCities,
  removeCity
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCityPanel);
