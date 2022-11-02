import { createContext, useContext } from "react";
import { API_COIN } from "../api/http";
import { useFetchAPISingle } from "../hooks/useFetchAPISingle";
import { CoinContextParams, TCoinContext, TCoinData } from "../types";

const CoinData = createContext({} as TCoinContext);

export const CoinContext = ({ children, id }: CoinContextParams) => {
  const { data } = useFetchAPISingle(API_COIN(id as string));
  const coin: TCoinData = {
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

  return <CoinData.Provider value={{ coin }}>{children}</CoinData.Provider>;
};

export const CoinState = () => useContext(CoinData);
