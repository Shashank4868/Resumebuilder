import React, { useState } from "react";

import {
  TextField,
  IconButton,
  Button,
  Snackbar,
  Typography,
} from "@mui/material";

import { AiOutlineCloseCircle } from "react-icons/ai";

let i = 1;

const allExperiences = [
  {
    title: `Experience ${i++}`,
    label: "Institute/Organisation*",
    position: "Position*",
    duration: "Duration*",
    description: "Description",
  },
];

const Projects = () => {
  const [experiences, setExperiences] = useState(allExperiences);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const addMoreProjectsHandler = () => {
    const newExperience = {
      title: `Experience ${i++}`,
      label: "Institute/Organisation*",
      position: "Position*",
      duration: "Duration*",
      description: "Description",
    };
    setExperiences([...experiences, newExperience]);
  };

  const deleteLastProjectHandler = () => {
    if (experiences.length === 1) {
      setShowSnackBar(true);
      return;
    }
    const newExperiences = experiences.slice(0, -1);
    i--;
    setExperiences(newExperiences);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackBar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiOutlineCloseCircle size={20} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {experiences.map((experience) => {
        return (
          <div
            key={Math.random() * 100}
            className="mt-4 flex flex-col justify-items-center"
          >
            <Typography variant="h6" textAlign={"center"}>
              {experience.title}
            </Typography>
            <div className="flex md:flex-row sm:flex flex-col xs:flex-col justify-around">
              <TextField
                label={experience.label}
                size="small"
                margin="normal"
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
              />
              <TextField
                label={experience.position}
                size="small"
                margin="normal"
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
              />
              <TextField
                label={experience.duration}
                type="date"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                className="lg:w-[30%] md:w-[30%] sm:w-full xs:w-full"
              />
            </div>

            <div className="m-auto w-[80%]">
              <TextField
                label={experience.description}
                size="small"
                margin="normal"
                className="w-full"
              />
            </div>

            <hr className="mt-8" />
          </div>
        );
      })}
      <div className="flex flex-row justify-evenly mt-4">
        <Button
          variant="outlined"
          size="small"
          onClick={deleteLastProjectHandler}
        >
          Delete Last
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={addMoreProjectsHandler}
        >
          Add More
        </Button>
      </div>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Project cannot be deleted"
        color={"error"}
        action={action}
      />
    </React.Fragment>
  );
};

export default Projects;
