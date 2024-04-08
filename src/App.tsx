import React from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "./routes";
import "./App.less";

const App: React.FC<React.PropsWithChildren> = () => {
  const routes = useRoutes(routesConfig);

  return <div className="middleContent">{routes}</div>;
};

export default App;
