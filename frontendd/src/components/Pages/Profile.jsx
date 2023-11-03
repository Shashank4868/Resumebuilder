import React, { useContext } from "react";

import { TextField, InputAdornment, Button } from "@mui/material";

import { pageOneLabels } from "../../utils/Page1Labels";
import PageContext from "../../context/PageContext";
import { ProgressContext } from "../../context/ProgressContext";

const pairs = [];

for (let i = 0; i < pageOneLabels.length; i += 2) {
  const pair = [pageOneLabels[i], pageOneLabels[i + 1]];
  pairs.push(pair);
}
const Profile = (props) => {
  const pageContext = useContext(PageContext);
  const progressContext = useContext(ProgressContext);

  const nextPageHandler = () => {
    pageContext.setPage(2);
    props.setPage(2);
    progressContext.setProgress(40);
    console.log("next page", progressContext.progress);
  };

  return (
    <form className="mt-8">
      {pairs.map((pair) => {
        return (
          <div
            key={pair[0].name + pair[1].name}
            className="flex md:flex-row sm:flex flex-col xs:flex-col justify-around"
          >
            <TextField
              className="lg:w-[40%] md:w-[40%] sm:w-full xs:w-full"
              label={`${pair[0].label}` + (pair[0].required ? "*" : "")}
              name={pair[0].name}
              type={pair[0].type}
              margin="normal"
              size="small"
              helperText={pair[0].required ? "This field is required" : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">{pair[0].icon}</InputAdornment>
                ),
              }}
            />
            <TextField
              className="lg:w-[40%] md:w-[40%] sm:w-full xs:w-full"
              label={`${pair[1].label}` + (pair[1].required ? "*" : "")}
              name={pair[1].name}
              margin="normal"
              type={pair[1].type}
              size="small"
              helperText={pair[0].required ? "This field is required" : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">{pair[1].icon}</InputAdornment>
                ),
              }}
            />
          </div>
        );
      })}
      <div className="flex flex-row justify-evenly mt-4">
        <Button variant="outlined" size="small" disabled>
          Previous
        </Button>
        <Button variant="contained" size="small" onClick={nextPageHandler}>
          Next
        </Button>
      </div>
    </form>
  );
};

export default Profile;
