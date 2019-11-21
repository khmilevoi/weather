import React from "react";
import PropTypes from "prop-types";

import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

export const AddButton = props => {
  return (
    <Fab size="small" color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );
};

AddButton.propTypes = {};
