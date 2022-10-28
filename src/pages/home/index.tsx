import { ProColumns, ProTable } from "@ant-design/pro-components";
import axios from "axios";
import { useRef, useState } from "react";
import { API_COINS_LIST } from "../../api/http";
import { symbol } from "../../constants";
import { GlobalState } from "../../context/GlobalContext";
import { useFetchAPISingle } from "../../hooks/useFetchAPISingle";
import { TSymbol } from "../../types";
import "./index.module.scss";

export type TTableCoin = {
  current_price: number;
  id: string;
  image: string;
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
      dataIndex: "market_cap_rank",
    },
    {
      title: "Name",
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
          <img src={record.image} width={20} />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: "Price",
      render: (_, record) => (
        <div>
          <span>{symbol[currency as keyof TSymbol]}</span>
          <span>{record.current_price}</span>
        </div>
      ),
    },
  ];

  const { data: coins } = useFetchAPISingle(
    API_COINS_LIST(currency, page, pageSize)
  );

  return (
    <>
      <ProTable<TTableCoin>
        search={false}
        options={false}
        columns={columns}
        dataSource={coins}
        actionRef={actionRef}
      />
    </>
  );
};

export default Home;
