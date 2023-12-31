export const priceFormatter = ({
  currency = 'USD',
  style = 'currency',
  price = 0,
  formatProperties = {
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  },
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: style,
    currency: currency,
    ...formatProperties,
  });
  return formatter.format(price);
};
