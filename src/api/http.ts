export const API_GLOBAL = () => "https://api.coingecko.com/api/v3/global";

export const API_GLOBAL_DEFI = () =>
  "https://api.coingecko.com/api/v3/global/decentralized_finance_defi";

export const API_COINS_LIST = (
  currency: string,
  page: number,
  per_page: number
) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=false`;

export const API_COIN = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false`;
