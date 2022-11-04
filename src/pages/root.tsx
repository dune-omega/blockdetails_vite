import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Coin from "./coin";
import Home from "./home";

const Root = () => {
  return (
    <>
      <GlobalContext>
        {useRoutes([
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/cryptocurrency/:id",
            element: <Coin />,
          },
          {
            path: "*",
            element: <Navigate to={"/"} />,
          },
        ])}
      </GlobalContext>
    </>
  );
};

export default Root;
