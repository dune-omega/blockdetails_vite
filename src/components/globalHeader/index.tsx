import { Col, Select, Space } from "antd";
import { currencyArr } from "../../constants";
import { GlobalState } from "../../context/GlobalContext";
import { TTotalMarketCap } from "../../types";

const { Option } = Select;

const GlobalHeader = () => {
  const { data, currency, setCurrency } = GlobalState();
  let global = data?.data;

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    setCurrency(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  console.log(global?.total_market_cap);

  return (
    <>
      <Space align="center">
        <Col>
          <span>Cryptos: </span> <span>{global?.active_cryptocurrencies}</span>
        </Col>
        <Col>
          <span>Market Cap: </span>{" "}
          <span>
            {global?.total_market_cap[currency as keyof TTotalMarketCap]}
          </span>
        </Col>
        <Col>
          <span>Volume: </span>{" "}
          <span>{global?.total_volume[currency as keyof TTotalMarketCap]}</span>
        </Col>
      </Space>
      <Select
        showSearch
        onChange={onChange}
        onSearch={onSearch}
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

export default GlobalHeader;
