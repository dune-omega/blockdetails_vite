import { ReactNode } from "react";

export type Context = {
  children: React.ReactNode;
};

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

export type TTotalMarketCap = { usd: string };

export type TGlobalData = {
  active_cryptocurrencies: number;
  market_cap_change_percentage_24h_usd: number;
  market_cap_percentage: { btc: number; eth: number };
  markets: number;
  total_market_cap: TTotalMarketCap;
  total_volume: { usd: number };
};

export type TSymbol = {
  usd: string;
  php: string;
  cny: string;
};

export type TPrice = {
  usd: number;
  php: number;
  cny: number;
};

export type TCoinData = {
  name: string;
  id: string;
  categories: string;
  description: string;
  algorithm: string;
  image: string;
  blockchain_site: string[];
  homepage: string[];
  price: TPrice;
};

export type TCoinContext = {
  coin: TCoinData;
};

export type CoinContextParams = {
  children: ReactNode;
  id: string;
};
