import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/styles";

import { close } from "store/actions/addCityPanel";
import { Modal } from "@material-ui/core";
import { AutocompletePlace } from "components/AutocompletePlace";

const useStyles = makeStyles(() => ({
  container: {
    padding: "30px"
  }
}));

const AddCityPanel = ({ opened, close }) => {
  const classes = useStyles();

  return (
    <Modal open={opened} onClose={() => close()}>
      <div className={classes.container}>
        <AutocompletePlace
          onChange={name => console.log(name)}
        ></AutocompletePlace>
      </div>
    </Modal>
  );
};

AddCityPanel.propTypes = {
  opened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  opened: state.addCityPanel.opened
});

const mapDispatchToProps = dispatch => bindActionCreators({ close }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCityPanel);
