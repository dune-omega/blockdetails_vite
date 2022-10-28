import { Select, Space } from "antd";
import React from "react";
import { currencyArr, symbol } from "../constants";
import { GlobalState } from "../context/GlobalContext";
import { TSymbol, TTotalMarketCap } from "../types";

const { Option } = Select;

const HeaderGlobal = () => {
  const { data, currency, setCurrency } = GlobalState();
  let global = data?.data;

  const changeSearchCurrency = (value: string) => {
    setCurrency(value);
  };

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
      </Space>
      <Select
        showSearch
        onChange={changeSearchCurrency}
        onSearch={changeSearchCurrency}
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
    </>
  );
};

export default HeaderGlobal;
