import { irfp } from "./irfp.mjs"

function mapIrfp(stocks) {
    return stocks.map(irfp);
}

export { mapIrfp };