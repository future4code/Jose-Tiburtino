import React from "react";
import { LoaderContainer } from "./styled";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loading;
