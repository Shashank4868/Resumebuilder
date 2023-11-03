import React, { useContext, useState } from "react";

import PageContext from "../../context/PageContext";
import Layout from "../Layout/Layout";

import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const titles = ["Profile", "Education", "Experience", "Projects", "Skills"];

const Base = () => {
  const pageContext = useContext(PageContext);

  const [page, setPage] = useState(pageContext.page);

  return (
    <React.Fragment>
      <Layout title={titles[page - 1]}>
        {page === 1 && <Profile setPage={setPage} />}
        {page === 2 && <Education setPage={setPage} />}
        {page === 3 && <Experience setPage={setPage} />}
        {page === 4 && <Projects setPage={setPage} />}
        {page === 5 && <Skills setPage={setPage} />}
      </Layout>
    </React.Fragment>
  );
};

export default Base;
