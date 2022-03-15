import { convertNumberToCurrency } from "./convert-number-to-currency.mjs"

function getContent(stock){
    return `${stock.total} ${stock.name} / ${stock.code} / PRECO MEDIO DE R$ ${convertNumberToCurrency(stock.averagePrice)} / ${stock.broker}`;
}

function getGroup(stock) {
    if(stock.isSub) return 99
    else if(stock.type === 'FII') return 7
    
    return 3
}

function getCode(stock) {
  if (stock.isSub) return 99;
  else if (stock.type === "FII") return 3;

  return 1;
}


function irfp(stock) {
  return {
    group: getGroup(stock),
    code: getCode(stock),
    cnpj: stock.id,
    description: getContent(stock),
    amount: convertNumberToCurrency(stock.amount)
  };
}

export { irfp };