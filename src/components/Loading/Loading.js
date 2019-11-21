import React from "react";

import { CircularProgress } from "@material-ui/core";

import * as s from "./styles";

export const Loading = () => {
  return (
    <s.Loading>
      <CircularProgress />
    </s.Loading>
  );
};
