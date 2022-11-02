import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import CoinName from "./name";
import CoinPrice from "./price";

const Coin = () => {
  const { id } = useParams();

  return (
    <CoinContext id={id as string}>
      <Row>
        <Col span={8}>
          <CoinName />
        </Col>
        <Col span={16}>
          <CoinPrice />
        </Col>
      </Row>
    </CoinContext>
  );
};

export default Coin;
