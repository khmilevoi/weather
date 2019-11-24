import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { AddButton } from "./AddButton";
import { GeoLocation } from "./GeoLocation";
import { open } from "store/actions/modalPanel";
import { fetchGeoLocation } from "store/actions/geoLocation";

import * as s from "styles/Header";
import { Section } from "styles/Index";

const Header = ({ open, city, fetchGeoLocation, geoLocationLoading }) => {
  return (
    <Section>
      <s.Container>
        <AddButton onClick={() => open("search-city")}></AddButton>
        <GeoLocation
          city={city}
          handleGeoLocation={fetchGeoLocation}
          loading={geoLocationLoading}
        ></GeoLocation>
      </s.Container>
    </Section>
  );
};

Header.propTypes = {
  open: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
  fetchGeoLocation: PropTypes.func.isRequired,
  geoLocationLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  city: state.geoLocation.city || {},
  geoLocationLoading: state.geoLocation.isLoading
});

const mapDispatchToProps = { open, fetchGeoLocation };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
