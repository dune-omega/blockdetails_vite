import { useRoutes } from "react-router-dom";
import HeaderGlobal from "../components/HeaderGlobal";
import { GlobalContext } from "../context/GlobalContext";
import Home from "./home";

const Root = () => {
  return (
    <>
      <GlobalContext>
        <HeaderGlobal />
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
