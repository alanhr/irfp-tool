function convertNumberToCurrency(number) {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export { convertNumberToCurrency };