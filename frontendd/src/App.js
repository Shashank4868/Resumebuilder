import React from "react";

import MainNavigation from "./components/Navigation/MainNavigation";
import Base from "./components/Pages/Base";
import { Grid } from "@mui/material";
import Progress from "./utils/Progress";
import TwoColumnForm from "./components/Pages/temp";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Progress progress={10} />
      {/* <TwoColumnForm /> */}
      {/* <Grid container spacing={2}>
        <Grid item xs={8}> */}
      <Base />
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default App;
