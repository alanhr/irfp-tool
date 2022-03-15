function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function multiply(a,b) {
  return a/b
}

export { roundToTwo, multiply };