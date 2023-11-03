import { createContext } from "react";

export const ProgressContext = createContext({
  progress: 20,
  setProgress: () => {},
});
