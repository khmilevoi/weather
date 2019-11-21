import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { WidgetPanel } from "components/WidgetPanel";
import Header from "components/Header/Header";
import { fetchCityStorage } from "store/actions/weather";
import { Loading } from "components/Loading";

const App = ({ fetchCityStorage, loading }) => {
  useEffect(() => {
    fetchCityStorage();
  }, [fetchCityStorage]);

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
  fetchCityStorage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: !!state.app.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchCityStorage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
