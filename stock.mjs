import { multiply } from "./maths.mjs";
import { roundToTwo } from "./maths.mjs";


function getType(type) {
    if(type.startsWith('F')) return 'FII'
    else if(type.startsWith('A')) return 'ACOES'

    throw new Error(`Tipo invalido ${type}`)
}
function isSub(type){
    if(type.endsWith('S')) return true
    return false
}

function stock({ id,name, code, type, broker, total, amount }){
  return {
    id,
    name,
    code,
    type: getType(type),
    broker,
    isSub: isSub(type),
    total,
    amount,
    averagePrice: roundToTwo(multiply(amount, total)),
  };
};

export {stock}