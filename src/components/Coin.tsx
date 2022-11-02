import { Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { API_COIN } from "../api/http";
import { useFetchAPISingle } from "../hooks/useFetchAPISingle";

const Coin = () => {
  const { id } = useParams();
  const { data } = useFetchAPISingle(API_COIN(id as string));
  const coin = {
    name: data?.name,
    id: data?.id,
    categories: data?.categories,
    description: data?.description.en,
    algorithm: data?.hashing_algorithm,
    image: data?.image.large,
    blockchain_site: data?.links.blockchain_site,
    homepage: data?.links.homepage,
    price: {
      usd: data?.market_data.current_price.usd,
      php: data?.market_data.current_price.php,
      cny: data?.market_data.current_price.cny,
    },
  };

  console.log(coin);

  return (
    <>
      <Row>
        <Col span={8}>col-18 col-push-6</Col>
        <Col span={16}>col-6 col-pull-18</Col>
      </Row>
    </>
  );
};

export default Coin;
