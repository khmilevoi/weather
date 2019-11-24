import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { WidgetPanel } from "components/WidgetPanel";
import { Header } from "components/Header";
import { Loading } from "components/Loading";
import { SearchCityPanel } from "components/SearchCityPanel";
import { fetchCitiesFromLocalStorage } from "store/actions/localStorage";

import * as s from "styles/App";
import { CurrentCityPanel } from "components/CurrentCityPanel";

fetch("http://localhost:8080/cities?name=mariu").then(data => console.log(data));

const App = ({ fetchCitiesFromLocalStorage, loading }) => {
  useEffect(() => {
    fetchCitiesFromLocalStorage();
  }, [fetchCitiesFromLocalStorage]);

  return (
    <s.App>
      {loading && <Loading></Loading>}
      <Header></Header>
      <WidgetPanel></WidgetPanel>
      <SearchCityPanel></SearchCityPanel>
      <CurrentCityPanel></CurrentCityPanel>
    </s.App>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchCitiesFromLocalStorage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: !!state.app.isLoading
});

const mapDispatchToProps = { fetchCitiesFromLocalStorage };

export default connect(mapStateToProps, mapDispatchToProps)(App);
