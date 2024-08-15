/* eslint-disable react-refresh/only-export-components */
import { SignUp } from "@/pages/SignUp/index.jsx";
import { Home } from "@/pages/Home.jsx";
import { Activation } from "@/pages/Activation/index.jsx";
import { User } from "@/pages/Users/component/User";
import App from "@/App.jsx";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <>Not found</>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/activation/:token",
        Component: Activation,
      },
      {
        path: "/users/:id",
        Component: User,
      },
      // for the Class component as example
      // {
      //   path: "/user/:id",
      //   Component: User,
      // },
    ],
  },
]);
