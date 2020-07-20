const formatCurrencyString = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const formatPrice = price => price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
export {
    formatCurrencyString,
    formatPrice
}