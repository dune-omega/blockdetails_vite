import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Space } from "antd";
import { useRef, useState } from "react";
import { API_COIN_LIST } from "../../api/http";
import { GlobalState } from "../../context/GlobalContext";
import { useFetchAPISingle } from "../../hooks/useFetchAPISingle";
import "./index.module.scss";

export type TTableCoin = {
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
  ];

  const { data: coins } = useFetchAPISingle(
    API_COIN_LIST(currency, pageSize, page)
  );

  console.log(coins);

  return (
    <>
      <ProTable
        search={false}
        options={false}
        columns={columns}
        dataSource={coins}
        actionRef={actionRef}
        pagination={{
          onChange: (page, pageSize) => {
            setPage(page);
            setPagesize(pageSize);
          },
        }}
      />
    </>
  );
};

export default Home;
