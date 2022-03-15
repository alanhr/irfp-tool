import {readFile} from 'fs/promises'
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { convertFileToStocks } from './convert-file-to-stocks.mjs';
import { mapIrfp } from "./map-irfp.mjs";
import { tap } from './utils.mjs';


const rootDir = dirname(fileURLToPath(import.meta.url));

readFile(resolve(rootDir, "data.csv"), "utf8")
  .then(convertFileToStocks)
  .then(tap(console.table))
  .then(mapIrfp)
  .then(tap(console.table))
  .catch(console.error);
