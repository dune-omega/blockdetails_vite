import numeral from "numeral";

/**
 * for example formatMoney(12345678) => $ 123,456,789
 * @param amount the number that will be formatted
 * @param symbol symbol beside
 * @param format format if currency or date
 * @returns
 */
export const formatMoney = (
  amount: number,
  symbol: string = "$",
  format: string = "0,00"
) => {
  if (symbol) {
    return symbol + numeral(amount).format(format);
  } else {
    return numeral(amount).format(format);
  }
};
