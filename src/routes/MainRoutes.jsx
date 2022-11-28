import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { isLoggedIn } from "../services/isLoggedIn";
import App from "../App";
import Login from "../views/auth/Login";

export default function MainRoutes() {
  const routes = [
    { path: "", element: isLoggedIn() ? <App /> : <Navigate to="login" /> },
    { path: "login", element: <Login /> },
    { path: "*", element: isLoggedIn() ? <App /> : <Navigate to="login" /> },
  ];

  return useRoutes(routes);
}
