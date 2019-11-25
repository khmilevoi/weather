import React from "react";

import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

export const AddButton = () => {
  return (
    <Fab size="small" color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );
};
