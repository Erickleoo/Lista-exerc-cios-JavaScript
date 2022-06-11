/* 10 - Faça uma função que informe a quantidade de dígitos de um determinado número inteiro
informado. */

function verificarQuantidade(a) {
  a = prompt('Digite um número: ')
  return a.length
}

console.log(verificarQuantidade())