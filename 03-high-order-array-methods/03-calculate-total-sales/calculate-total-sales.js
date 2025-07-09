function calculateTotalSalesWithTax(arr, rate) {
  const sales = arr
    .map((p) => p.price * p.quantity)
    .reduce((sum, total) => sum + total, 0);
  return sales + sales * (rate / 100);
}

module.exports = calculateTotalSalesWithTax;
