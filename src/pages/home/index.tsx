import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Typography } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_COINS_LIST } from "../../api/http";
import { symbol } from "../../constants";
import { GlobalState } from "../../context/GlobalContext";
import { useFetchAPISingle } from "../../hooks/useFetchAPISingle";
import { TSymbol } from "../../types";
import { formatMoney } from "../../utils";
import "./index.module.scss";

export type TTableCoin = {
  current_price: number;
  circulating_supply: number;
  id: string;
  image: string;
  market_cap: number;
  max_supply: number;
  name: string;
  market_cap_rank: number;
  total_volume: number;
};

const Home = () => {
  const actionRef = useRef();
  const { currency } = GlobalState();
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(100);
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
      render: (_, record) => formatMoney(record.total_volume, "", "0,00.00"),
    },
    {
      title: "Market Cap",
      align: "center",
      render: (_, record) => formatMoney(record.market_cap, "", "0,00.00"),
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
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
      />
    </>
  );
};

export default Home;
