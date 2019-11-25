import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { parseDt } from "api/WeatherAPI";
import { CircularProgress } from "@material-ui/core";

import * as s from "styles/GeoLocation";
import { Row } from "styles/Index";

export const GeoLocation = ({ city, handleGeoLocation, loading }) => {
  useEffect(() => {
    handleGeoLocation();
  }, [handleGeoLocation]);

  const { dt, main = {}, weather = [], name } = city;
  const date = parseDt(dt);

  const [currentWeather = {}] = weather;
  const { icon } = currentWeather;

  const { temp } = main;

  return loading ? (
    <CircularProgress></CircularProgress>
  ) : (
    <s.GeoLocation>
      <Row column>
        <s.CityName>{name || "Turn geolocation"}</s.CityName>
        <s.Time>{dt ? date.string : "--:--"}</s.Time>
      </Row>
      <Row>
        <s.Temperature>{temp ? Math.floor(temp) : 0}</s.Temperature>
        {icon && <s.Icon name={icon}></s.Icon>}
      </Row>
    </s.GeoLocation>
  );
};

GeoLocation.propTypes = {
  city: PropTypes.object.isRequired,
  handleGeoLocation: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
