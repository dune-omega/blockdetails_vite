import { createContext, useContext, useState } from "react";
import { API_GLOBAL } from "../api/http";
import { useFetchAPISingle } from "../hooks/useFetchAPISingle";
import { Context, TGlobalData } from "../types";

type IGlobalContext = {
  data: {
    data: TGlobalData;
  };
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalData = createContext({} as IGlobalContext);

export const GlobalContext = ({ children }: Context) => {
  const { data } = useFetchAPISingle(API_GLOBAL());
  const [currency, setCurrency] = useState("usd");

  return (
    <GlobalData.Provider value={{ data, currency, setCurrency }}>
      {children}
    </GlobalData.Provider>
  );
};

export const GlobalState = () => useContext(GlobalData);
