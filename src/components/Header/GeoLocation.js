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

  // need correct
  if (loading || !city.main) return <CircularProgress></CircularProgress>;

  const { dt } = city;
  const date = parseDt(dt);

  const [weather] = city.weather;
  const { icon } = weather;

  const { temp } = city.main;

  return (
    <s.GeoLocation>
      <Row column>
        <s.CityName>{city.name}</s.CityName>
        <s.Time>{date.string}</s.Time>
      </Row>
      <Row>
        <s.Temperature>{Math.floor(temp)}</s.Temperature>
        <s.Icon name={icon}></s.Icon>
      </Row>
    </s.GeoLocation>
  );
};

GeoLocation.propTypes = {
  city: PropTypes.object.isRequired,
  handleGeoLocation: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
