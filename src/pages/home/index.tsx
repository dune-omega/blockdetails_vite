import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Space, Typography } from "antd";
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
  max_supply: number;
  name: string;
  market_cap_rank: number;
};

const Home = () => {
  const actionRef = useRef();
  const { currency } = GlobalState();
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(100);
  const columns: ProColumns<TTableCoin>[] = [
    {
      title: "#",
      align: "center",
      dataIndex: "market_cap_rank",
    },
    {
      title: "Name",
      align: "center",
      dataIndex: "name",
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
      align: "center",
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
      title: (
        <>
          <div>Circulating Supply</div>
          <div>Max Supply</div>
        </>
      ),
      align: "center",
      render: (_, record) => (
        <>
          <div>{formatMoney(record.circulating_supply, "")}</div>
          <div>{formatMoney(record.max_supply, "")} </div>
        </>
      ),
    },
  ];
  const navigate = useNavigate();

  const { data: coins } = useFetchAPISingle(
    API_COINS_LIST(currency, page, pageSize)
  );

  console.log(coins);

  return (
    <>
      <ProTable<TTableCoin>
        search={false}
        options={false}
        columns={columns}
        dataSource={coins}
        actionRef={actionRef}
        pagination={{
          showSizeChanger: true,
        }}
      />
    </>
  );
};

export default Home;
