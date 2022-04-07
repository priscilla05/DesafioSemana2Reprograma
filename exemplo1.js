//1 - Solicite o preço de uma mercadoria e o percentual de desconto de 20%.
// Exiba no console o valor do desconto e o preço a pagar.

let precoMercadoria = 1500
const desconto = 0.20
let valorDoDesconto = precoMercadoria * 0.20
let precoPagarComDesconto = precoMercadoria - valorDoDesconto

console.log("O valor do desconto é de R$" + valorDoDesconto)  // O valor do desconto é de R$300
console.log("O preço a pagar é de R$" + precoPagarComDesconto) // O preço a pagar é de R$1200