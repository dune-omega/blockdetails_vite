import { Input, Select, Space } from "antd";
import { createContext, useContext, useState } from "react";
import { API_GLOBAL } from "../api/http";
import { currencyArr, symbol } from "../constants";
import { useFetchAPISingle } from "../hooks/useFetchAPISingle";
import { Context, TSymbol, TTotalMarketCap } from "../types";

type IGlobalContext = {
  currency: string;
};

const GlobalData = createContext({} as IGlobalContext);

const { Option } = Select;

export const GlobalContext = ({ children }: Context) => {
  const { data } = useFetchAPISingle(API_GLOBAL());
  const [currency, setCurrency] = useState("usd");

  let global = data?.data;

  return (
    <>
      <Space align="center">
        <div>
          <span>Cryptos: </span>
          <span>{global?.active_cryptocurrencies || "-"}</span>
        </div>
        <div>
          <span>Market Cap: </span>
          <span>
            {symbol[currency as keyof TSymbol]}
            {global?.total_market_cap[currency as keyof TTotalMarketCap] || "-"}
          </span>
        </div>
        <div>
          <span>Volume: </span>
          <span>
            {symbol[currency as keyof TSymbol]}
            {global?.total_volume[currency as keyof TTotalMarketCap] || "-"}
          </span>
        </div>
        <Select
          showSearch
          onChange={(value) => setCurrency(value)}
          onSearch={(value) => setCurrency(value)}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          size="middle"
          placeholder="Select a currency: "
          style={{ width: 200 }}
          defaultValue={"usd"}
        >
          {currencyArr.map((symbol) => (
            <Option value={symbol.value} key={symbol.name}>
              {symbol.name}
            </Option>
          ))}
        </Select>
        <Input placeholder="Basic usage" />
      </Space>
      <GlobalData.Provider value={{ currency }}>{children}</GlobalData.Provider>
    </>
  );
};

export const GlobalState = () => useContext(GlobalData);
