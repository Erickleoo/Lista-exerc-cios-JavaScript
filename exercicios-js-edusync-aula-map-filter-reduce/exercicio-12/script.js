/* 5)Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0 */


function soma(numberA, numberB) {
  let valor = 0
  for(i = 0; i < numberB; i++) {
    valor += numberA
  }
  return valor
}

console.log(soma(3, 5))
