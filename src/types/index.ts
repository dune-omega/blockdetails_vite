export type Context = {
  children: React.ReactNode;
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
