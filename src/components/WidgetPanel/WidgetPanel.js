import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchCities, removeCity } from "store/actions/weather";
import { setCity } from "store/actions/currentCity";
import { Widget } from "./Widget";

import { Section, Container } from "styles/Index";

const WidgetPanel = ({ cities, fetchCities, removeCity, setCity }) => {
  return (
    <Section>
      <Container>
        <Grid container spacing={1}>
          {cities.map(city => (
            <Widget
              key={city.id}
              city={city}
              handleUpdate={() => fetchCities(city.id)}
              handleRemove={() => removeCity(city.id)}
              handleClick={() => setCity(city.id)}
            ></Widget>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

WidgetPanel.propTypes = {
  cities: PropTypes.array.isRequired,
  fetchCities: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ cities: state.weather.cities });

const mapDispatchToProps = {
  fetchCities,
  removeCity,
  setCity
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPanel);
