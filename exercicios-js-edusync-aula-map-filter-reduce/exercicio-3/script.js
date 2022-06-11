/* 3 - Dado um array A de 5 posições:
Utilizando map, imprima no console um array gerado a partir de A, onde seus valores são o
cubo dos valores de A.
*/

const array = [3, 4, 8, 9, 15];

const newArray = array.map((item) => {
  return item ** 3
});

console.log(newArray)


