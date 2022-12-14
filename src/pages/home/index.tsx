import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Select, Typography } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_COINS_LIST } from "../../api/http";
import { symbol } from "../../constants";
import { GlobalState } from "../../context/GlobalContext";
import { useFetchAPISingle } from "../../hooks/useFetchAPISingle";
import { TSymbol, TTableCoin } from "../../types";
import { formatMoney } from "../../utils";
import "./index.module.scss";

const { Option } = Select;

const Home = () => {
  const actionRef = useRef();
  const { currency } = GlobalState();
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);
  const columns: ProColumns<TTableCoin>[] = [
    {
      title: "#",
      dataIndex: "market_cap_rank",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "market_cap_rank",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img src={record.image} width={20} alt={record.name} />
          <Typography.Link
            onClick={() => navigate(`/cryptocurrency/${record.id}`)}
          >
            {record.name}
          </Typography.Link>
        </div>
      ),
    },
    {
      title: "Price",
      render: (_, record) => (
        <span>
          {formatMoney(
            record.current_price,
            symbol[currency as keyof TSymbol],
            "0,00.00"
          )}
        </span>
      ),
    },
    {
      title: "Circulating Supply",
      render: (_, record) => formatMoney(record.circulating_supply, ""),
    },
    {
      title: "Max Supply",
      render: (_, record) => formatMoney(record.max_supply, ""),
    },
    {
      title: "Volume",
      align: "center",
      render: (_, record) => formatMoney(record.total_volume, ""),
    },
    {
      title: "Market Cap",
      align: "center",
      render: (_, record) => formatMoney(record.market_cap, ""),
    },
  ];
  const navigate = useNavigate();

  const { data: coins } = useFetchAPISingle(
    API_COINS_LIST(currency, page, pageSize)
  );

  return (
    <>
      <ProTable<TTableCoin>
        rowKey={"id"}
        search={false}
        options={false}
        columns={columns}
        dataSource={coins}
        actionRef={actionRef}
        pagination={false}
      />

      <Select
        onChange={(val) => setPagesize(val)}
        size="middle"
        style={{ width: 200 }}
        defaultValue={pageSize}
      >
        <Option value={20}>20</Option>
        <Option value={40}>40</Option>
        <Option value={100}>100</Option>
      </Select>

      <button onClick={() => setPage(page - 1)}>prev</button>
      <button onClick={() => setPage(page + 1)}>next</button>
    </>
  );
};

export default Home;
