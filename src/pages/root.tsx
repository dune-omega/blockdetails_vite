import { useRoutes } from "react-router-dom";
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
        ])}
      </GlobalContext>
    </>
  );
};

export default Root;
