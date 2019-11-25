import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  makeStyles,
  TextField,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { fetchCities } from "store/actions/weather";
import { fetchCityList } from "store/actions/searchCity";

const useStyles = makeStyles(() => ({
  input: {
    width: "100%"
  },
  paper: {
    height: "100%"
  }
}));

const slowMotion = (func, ms = 500) => {
  let id = null;

  return (...args) =>
    new Promise(resolve => {
      if (id) {
        clearTimeout(id);
      }

      id = setTimeout(() => resolve(func(...args)), ms);
    });
};

const SearchCityPanel = ({
  fetchCities,
  cities,
  fetchCityList,
  match,
  history
}) => {
  const classes = useStyles();

  const fetchCityListSlowed = slowMotion(fetchCityList);

  const handleSearch = name => {
    fetchCityListSlowed(name);
  };

  const handleClose = () => history.replace("/");

  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      classes={{ paper: classes.paper }}
      open={match.isExact}
      onClose={() => handleClose()}
    >
      <DialogTitle>
        <TextField
          label="Type the city"
          margin="normal"
          className={classes.input}
          onChange={event => handleSearch(event.target.value)}
        ></TextField>
      </DialogTitle>
      <DialogContent>
        <List>
          {cities.map(city => (
            <ListItem
              button
              key={city.id}
              onClick={() => fetchCities(city.id) && handleClose()}
            >
              {city.name}
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SearchCityPanel.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  fetchCityList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cities: state.searchCity.list
});

const mapDispatchToProps = { fetchCities, fetchCityList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchCityPanel));
