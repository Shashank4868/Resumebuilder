import React, { useState } from "react";

import { TextField, IconButton, Button, Snackbar } from "@mui/material";

import { AiOutlineCloseCircle } from "react-icons/ai";

const allProjects = [
  {
    title: "Title*",
    Link: "Project Link*",
    Description: "Description",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(allProjects);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const addMoreProjectsHandler = () => {
    const newProject = {
      title: "Title*",
      Link: "Link*",
      Description: "Description",
    };
    setProjects([...projects, newProject]);
  };

  const deleteLastProjectHandler = () => {
    if (projects.length === 1) {
      setShowSnackBar(true);
      return;
    }
    const newProjects = projects.slice(0, -1);
    setProjects(newProjects);
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
      {projects.map((project) => {
        return (
          <div
            key={Math.random() * 100}
            className="mt-4 flex flex-col justify-items-center"
          >
            <div className="flex md:flex-row sm:flex flex-col xs:flex-col justify-around">
              <TextField
                label={project.title}
                size="small"
                margin="normal"
                className="lg:w-[40%] md:w-[40%] sm:w-full xs:w-full"
              />
              <TextField
                label={project.Link}
                size="small"
                margin="normal"
                className="lg:w-[40%] md:w-[40%] sm:w-full xs:w-full"
              />
            </div>

            <div className="m-auto w-[80%]">
              <TextField
                label={project.Description}
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
