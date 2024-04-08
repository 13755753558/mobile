import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));

const FallBackElement = (
  <div
    style={{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "2000px",
    }}
  >
    <span style={{ marginTop: "160px" }}>loading...</span>
  </div>
);

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <Home />,
  },

  {
    path: "",
    element: <Navigate to="/" />,
  },
];

export default routes;
