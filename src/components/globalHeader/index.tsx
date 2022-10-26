import { Col, Select } from "antd";
import { GlobalState } from "../../context/GlobalContext";

const { Option } = Select;

const GlobalHeader = () => {
  const { data } = GlobalState();
  let global = data?.data;

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <>
      <Col className="gutter-row">
        <span>Cryptos: </span> <span>{global?.active_cryptocurrencies}</span>
      </Col>
      <Col>
        <span>Market Cap: </span> <span>{global?.total_market_cap?.usd}</span>
      </Col>
      <Col>
        <span>Cryptos: </span> <span>{global?.active_cryptocurrencies}</span>
      </Col>
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
        placeholder="Select a person"
        style={{ width: 200 }}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </>
  );
};

export default GlobalHeader;
