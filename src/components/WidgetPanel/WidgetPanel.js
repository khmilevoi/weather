import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchCities, removeCity } from "store/actions/weather";
import { Widget } from "./Widget";

import { Section, Container } from "styles/Index";

const WidgetPanel = ({ cities, fetchCities, removeCity }) => {
  return (
    <Section>
      <Container>
        <Grid container spacing={1}>
          {cities.map(city => (
            <Widget
              key={city.id}
              city={city}
              handleUpdate={() => fetchCities(city.id)}
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
  removeCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ cities: state.weather.cities });

const mapDispatchToProps = {
  fetchCities,
  removeCity
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetPanel);
