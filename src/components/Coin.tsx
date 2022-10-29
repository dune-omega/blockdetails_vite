import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Coin;
