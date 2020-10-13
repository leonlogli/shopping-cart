const toUSD = (value: number) => {
  return `${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
  })} USD`
}

export { toUSD }
