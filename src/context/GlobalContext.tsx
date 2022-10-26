import { createContext, useContext } from "react";
import { API_GLOBAL } from "../api/http";
import { useFetchAPISingle } from "../hooks/useFetchAPISingle";
import { Context, Global_Data } from "../types";

type IGlobalContext = {
  data: {
    data: Global_Data;
  };
};

const GlobalData = createContext({} as IGlobalContext);

export const GlobalContext = ({ children }: Context) => {
  const { data } = useFetchAPISingle(API_GLOBAL());

  return <GlobalData.Provider value={{ data }}>{children}</GlobalData.Provider>;
};

export const GlobalState = () => useContext(GlobalData);
