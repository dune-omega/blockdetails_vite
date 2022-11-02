import React from "react";
import { CoinState } from "../../context/CoinContext";

const CoinName = () => {
  const { coin } = CoinState();
  return <div>{coin.name}</div>;
};

export default CoinName;
