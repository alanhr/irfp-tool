import {stock} from './stock.mjs'

function convertFileToStocks(file){
    return file.split("\n").map((rows) => {
      const [type, name, code,id, total, amount, broker] = rows.split(",");
      return stock({
        id,
        code,
        name,
        type,
        broker,
        amount: parseFloat(amount),
        total: parseInt(total),
      })
    });
}

export { convertFileToStocks };