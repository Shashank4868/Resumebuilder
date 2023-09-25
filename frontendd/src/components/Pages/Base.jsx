import React, { useState } from "react";

import Projects from "./Projects";
import Layout from "../Layout/Layout";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";

const Base = () => {
  const [page, setPage] = useState(1);

  return (
    <React.Fragment>
      <Layout title="Profile">
        {/* <Profile /> */}
        {/* <Education /> */}
        {/* <Projects /> */}
        <Experience />
      </Layout>
    </React.Fragment>
  );
};

export default Base;
