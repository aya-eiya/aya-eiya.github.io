export function currencyFormat(amount: number): string {
  return String(amount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
