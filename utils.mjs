const tap = (arg) => (data) => {
    if (typeof arg === "function") {
        arg(data)
    } else {
      console.log(arg);
    }
    return data
}


export {tap}