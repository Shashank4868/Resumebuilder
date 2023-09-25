import React from "react";

import { TextField, InputAdornment, Button } from "@mui/material";

import { EducationLabels } from "../../utils/EducationLabels";

const pairs = [];

for (let i = 0; i < EducationLabels.length; i += 5) {
  const pair = [
    EducationLabels[i],
    EducationLabels[i + 1],
    EducationLabels[i + 2],
    EducationLabels[i + 3],
    EducationLabels[i + 4],
    EducationLabels[i + 5],
  ];
  pairs.push(pair);
}

const Education = () => {
  return (
    <form className="mt-8">
      {pairs.map((pair) => {
        return (
          <div key={pair[0].name + pair[1].name}>
            <div className="flex md:flex-row sm:flex flex-col xs:flex-col justify-around">
              <TextField
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
                label={`${pair[0].label}` + (pair[0].required ? "*" : "")}
                name={pair[0].name}
                type={pair[0].type}
                margin="normal"
                size="small"
                helperText={pair[0].required ? "This field is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {pair[0].icon}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
                label={`${pair[1].label}` + (pair[1].required ? "*" : "")}
                name={pair[1].name}
                margin="normal"
                type={pair[1].type}
                size="small"
                helperText={pair[1].required ? "This field is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {pair[1].icon}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
                label={`${pair[2].label}` + (pair[2].required ? "*" : "")}
                name={pair[2].name}
                margin="normal"
                type={pair[2].type}
                size="small"
                helperText={pair[2].required ? "This field is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {pair[2].icon}
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="flex md:flex-row sm:flex flex-col xs:flex-col justify-around">
              <TextField
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
                label={`${pair[3].label}` + (pair[3].required ? "*" : "")}
                name={pair[3].name}
                margin="normal"
                type={pair[3].type}
                size="small"
                helperText={pair[3].required ? "This field is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {pair[3].icon}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="lg:w-[60%] md:w-[60%] sm:w-full xs:w-full"
                label={`${pair[4].label}` + (pair[4].required ? "*" : "")}
                name={pair[4].name}
                margin="normal"
                type={pair[4].type}
                size="small"
                helperText={pair[4].required ? "This field is required" : ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {pair[4].icon}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <hr className="mt-2 mb-2" />
          </div>
        );
      })}
      <div className="flex flex-row justify-evenly mt-4">
        <Button variant="outlined" size="small">
          Previous
        </Button>
        <Button variant="contained" size="small">
          Next
        </Button>
      </div>
    </form>
  );
};

export default Education;
