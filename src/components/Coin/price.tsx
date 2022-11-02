import React from "react";
import { symbol } from "../../constants";
import { CoinState } from "../../context/CoinContext";
import { GlobalState } from "../../context/GlobalContext";
import { TPrice, TSymbol } from "../../types";

const CoinPrice = () => {
  const { coin } = CoinState();
  const { currency } = GlobalState();

  return (
    <div>
      {symbol[currency as keyof TSymbol]}
      {coin.price[currency as keyof TPrice]}
    </div>
  );
};

export default CoinPrice;
