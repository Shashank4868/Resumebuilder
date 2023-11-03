import React, { useState } from "react";
import {
  Typography,
  IconButton,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";

import { AiOutlineCloseCircle } from "react-icons/ai";

const Achievements = (props) => {
  const [textFields, setTextFields] = useState([""]);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const previousPageHandler = () => {
    props.setPage(3);
  };

  const addMoreAchievementHandler = () => {
    const newTextField = "";
    setTextFields([...textFields, newTextField]);
  };

  const deleteLastAchievementHandler = () => {
    if (textFields.length === 1) {
      setShowSnackBar(true);
      return;
    }
    const newTextField = textFields.slice(0, -1);
    setTextFields(newTextField);
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
      <Typography
        variant="h5"
        fontWeight={"bold"}
        fontFamily={"monospace"}
        sx={{ mb: 3 }}
        margin={2}
      >
        Achievements
      </Typography>
      {textFields.map((textField, index) => {
        return (
          <TextField
            label={`Achievement ${index + 1}`}
            variant="standard"
            size="small"
            margin="normal"
            className="w-full"
            key={index}
          />
        );
      })}

      <div className="flex flex-row justify-evenly mt-4">
        <Button
          variant="outlined"
          size="small"
          onClick={deleteLastAchievementHandler}
        >
          Delete Last
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={addMoreAchievementHandler}
        >
          Add More
        </Button>
      </div>
      <div className="flex flex-row justify-evenly mt-4">
        <Button variant="outlined" size="small" onClick={previousPageHandler}>
          Previous
        </Button>
        <Button variant="contained" size="small" disabled>
          CREATE RESUME
        </Button>
      </div>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Achievement cannot be deleted"
        color={"error"}
        action={action}
      />
    </React.Fragment>
  );
};

export default Achievements;
