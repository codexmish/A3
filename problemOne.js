function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const lastPrice = currentPrice - discountAmount;

  console.log(lastPrice);
  return lastPrice.toFixed(3);
}

newPrice(200, 5);
