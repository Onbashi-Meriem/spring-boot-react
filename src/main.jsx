import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import { SignUp } from "./pages/SignUp/index.jsx";
import "./locales/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);
