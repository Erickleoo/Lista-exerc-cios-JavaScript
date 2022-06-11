/* 2 - Dado um array V de 10 posições:
Utilizando Reduce, imprima no console o resultado da média dos valores de V */

let arrayV = [0, 1, 4, 7, 1, 2, 1, 4, 25, 3, 7]

const media = arrayV.reduce((acc, atu) => {
  return acc + atu / 11
})

console.log(media)
