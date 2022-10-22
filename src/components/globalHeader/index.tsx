import { Col, Row, Space } from "antd";
import React from "react";
import { API_GLOBAL, API_GLOBAL_DEFI } from "../../api/http";
import { Global_Data } from "../../constants";
import { useFetchAPIMultiple } from "../../hooks/useFetchAPIMultiple";

const GlobalHeader = () => {
  const { data } = useFetchAPIMultiple([API_GLOBAL(), API_GLOBAL_DEFI()]);
  let global: Global_Data = data[0]?.data;
  let global_defi = data[1]?.data;

  return (
    <Row>
      <Col className="gutter-row">
        <span>Cryptos: </span> <span>{global?.active_cryptocurrencies}</span>
      </Col>
      <Col>
        <span>Cryptos: </span> <span>{global?.active_cryptocurrencies}</span>
      </Col>
      <Col>
        <span>Cryptos: </span> <span>{global?.active_cryptocurrencies}</span>
      </Col>
    </Row>
  );
};

export default GlobalHeader;
