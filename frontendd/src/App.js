import React, { useContext, useState } from "react";

import MainNavigation from "./components/Navigation/MainNavigation";
import Base from "./components/Pages/Base";
import Progress from "./utils/Progress";
import PageContext from "./context/PageContext";
import { ProgressContext } from "./context/ProgressContext";

const App = () => {
  const pageContext = useContext(PageContext);
  const progressContext = useContext(ProgressContext);

  const setPage = (newPage) => {
    pageContext.page = newPage;
  };

  const setProgress = (newProgress) => {
    progressContext.progress = newProgress;
    setPrg(progressContext.progress);
  };

  const [prg, setPrg] = useState(progressContext.progress);

  return (
    <PageContext.Provider value={{ page: pageContext.page, setPage: setPage }}>
      <ProgressContext.Provider
        value={{ progress: progressContext.progress, setProgress: setProgress }}
      >
        <MainNavigation />
        <Progress progress={prg} />
        <Base />
      </ProgressContext.Provider>
    </PageContext.Provider>
  );
};

export default App;
