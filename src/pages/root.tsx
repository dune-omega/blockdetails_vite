import { Navigate, useRoutes } from "react-router-dom";
import Coin from "../components/Coin";
import { GlobalContext } from "../context/GlobalContext";
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
