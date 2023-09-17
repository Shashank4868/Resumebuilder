import React from "react";

import { LinearProgress, Box } from "@mui/material";

const Progress = (props) => {
  // props give page in view and a/c to that update progress bar
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={props.progress} />
    </Box>
  );
};

export default Progress;
