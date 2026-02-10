function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }else if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const lastPrice = Math.floor(currentPrice - discountAmount);

  // console.log(lastPrice)
  return lastPrice;
}

// newPrice(222,5.31)