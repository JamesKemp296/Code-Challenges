// The conversion rate you should use is 6.75 CNY for every 1 USD

function usdcny(usd) {
  return `${(Math.round(usd * 6.75 * 100) / 100).toFixed(2)} Chinese Yuan`
}
