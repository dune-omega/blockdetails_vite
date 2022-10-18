import React from "react";
import { useRoutes } from "react-router-dom";
import TestComponent from "../TestComponent";

const Root = () => {
  return useRoutes([
    {
      path: "/",
      element: <TestComponent />,
    },
  ]);
};

export default Root;
