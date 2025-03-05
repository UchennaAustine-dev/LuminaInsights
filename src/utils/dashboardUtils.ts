export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
    num
  );
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`;
};

export const getRandomColor = () => {
  return `hsl(${Math.random() * 360}, 70%, 50%)`;
};
