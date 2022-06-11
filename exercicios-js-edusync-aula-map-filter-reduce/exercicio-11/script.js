/* 4)Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(valor, quantidade) {
  return Array(quantidade).fill(valor)
}

console.log(repetir(2, 9))