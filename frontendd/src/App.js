import React from "react";

import MainNavigation from "./components/Navigation/MainNavigation";
import Profile from "./components/Pages/Profile";
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
      <Profile />
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default App;
