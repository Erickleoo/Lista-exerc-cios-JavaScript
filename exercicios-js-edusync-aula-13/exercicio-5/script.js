/* 5 - Elaborar um algoritmo em Javascript que dado dois valores e exiba no console uma das 
três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo 
‘Segundo maior’, caso o segundo seja maior que o primeiro. */

function valores(valor1, valor2) {
  if(valor1 == valor2) {
    return 'Números iguais!'
  } else if (valor1 > valor2) {
    return 'O primeiro é maior!'
  }else {
    return 'O segundo é maior!'
  }
}

console.log(valores(6, 7));