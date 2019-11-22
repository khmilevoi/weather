import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Dialog, makeStyles } from "@material-ui/core";
import { setCity, fetchHourlyForecast } from "store/actions/currentCity";

import * as s from "styles/CurrentCityPanel";

const useStyles = makeStyles(() => ({
  paper: {
    height: "100%"
  }
}));

const CurrentCityPanel = ({
  opened,
  city,
  cityId,
  isLoading,
  list,
  setCity,
  fetchHourlyForecast
}) => {
  const classes = useStyles();
  // const paperRef = useRef(null);

  useEffect(() => {
    opened && fetchHourlyForecast(cityId);
  }, [opened, cityId, fetchHourlyForecast]);

  return (
    <Dialog
      open={opened}
      PaperComponent={s.Panel}
      PaperProps={{}}
      onClose={() => setCity(null)}
      classes={{ paper: classes.paper }}
    >
      asd
    </Dialog>
  );
};

CurrentCityPanel.propTypes = {
  opened: PropTypes.bool.isRequired,
  city: PropTypes.object.isRequired,
  cityId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired
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
  setCity,
  fetchHourlyForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCityPanel);
