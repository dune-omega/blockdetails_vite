import { Input, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { currencyArr, symbol } from "../constants";
import { GlobalState } from "../context/GlobalContext";
import { TSymbol, TTotalMarketCap } from "../types";

const { Option } = Select;

const HeaderGlobal = () => {
  const navigate = useNavigate();

  return (
    <>
      <Input placeholder="Basic usage" />
    </>
  );
};

export default HeaderGlobal;
