import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { WidgetPanel } from "components/WidgetPanel";
import { Header } from "components/Header";
import { AddCityPanel } from "components/AddCityPanel";

const App = ({ fetchCityStorage }) => {
  return (
    <div className="App">
      <AddCityPanel></AddCityPanel>
      <Header></Header>
      <WidgetPanel></WidgetPanel>
    </div>
  );
};

App.propTypes = {};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(App);
