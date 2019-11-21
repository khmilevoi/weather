import React from "react";
import PropTypes from "prop-types";

import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { open } from "store/actions/addCityPanel";

const AddButton = ({ open }) => {
  return (
    <Fab color="primary" size="small" aria-label="add" onClick={() => open()}>
      <AddIcon />
    </Fab>
  );
};

AddButton.propTypes = {
  open: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({ open }, dispatch);

export default connect(null, mapDispatchToProps)(AddButton);
