import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Coin = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Coin;
