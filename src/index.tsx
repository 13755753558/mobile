import { createRoot } from "react-dom/client";
import { StoreProvider } from "./stores";
import { BrowserRouter } from "react-router-dom";
import "nprogress/nprogress.css";
import App from "./App";

import React from "react";

const element = document.getElementById("root");
const root = createRoot(element!);

root.render(
  <StoreProvider>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StoreProvider>
);
