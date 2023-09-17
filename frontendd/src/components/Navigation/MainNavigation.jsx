import React from "react";

import { Link } from "@mui/material";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <div className="bg-blue-500 text-white text-center">
        <Link
          href="/"
          underline="none"
          color="inherit"
          className="hover:cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Resume Builder
        </Link>
      </div>
    </React.Fragment>
  );
};

export default MainNavigation;
