import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { AddButton } from "./AddButton";
import { GeoLocation } from "./GeoLocation";
import { open } from "store/actions/searchCityPanel";

import * as s from "styles/Header";
import { Section } from "styles/Index";

const Header = ({ open }) => {
  return (
    <Section>
      <s.Container>
        <AddButton onClick={() => open()}></AddButton>
        <GeoLocation></GeoLocation>
      </s.Container>
    </Section>
  );
};

Header.propTypes = {
  open: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = { open };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
