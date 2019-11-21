import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { WidgetPanel } from "components/WidgetPanel";
import { Header } from "components/Header";
import { Loading } from "components/Loading";
import { fetchCityStorage } from "store/actions/weather";
import { fetchCitiesFromLocalStorage } from "store/actions/localStorage";

const App = ({ fetchCityStorage, fetchCitiesFromLocalStorage, loading }) => {
  useEffect(() => {
    // fetchCityStorage();
    fetchCitiesFromLocalStorage();
  }, [fetchCityStorage, fetchCitiesFromLocalStorage]);

  return (
    <div className="App">
      {loading && <Loading></Loading>}
      <Header></Header>
      <WidgetPanel></WidgetPanel>
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchCityStorage: PropTypes.func.isRequired,
  fetchCitiesFromLocalStorage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: !!state.app.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchCityStorage, fetchCitiesFromLocalStorage },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
