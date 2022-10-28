export const API_GLOBAL = () => "https://api.coingecko.com/api/v3/global";

export const API_GLOBAL_DEFI = () =>
  "https://api.coingecko.com/api/v3/global/decentralized_finance_defi";

export const API_COIN_LIST = (
  currency: string,
  pageSize: number,
  page: number
) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${pageSize}&page=${page}&sparkline=false`;
