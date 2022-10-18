import { useRoutes } from "react-router-dom";
import Home from "./home";

const Root = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
};

export default Root;
