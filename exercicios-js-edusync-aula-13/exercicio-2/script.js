/* 2 - Elaborar um algoritmo em Javascript que dado 3 valores A, B, C, exiba no console o maior dos 3 valores e com a mensagem: "É o maior ". */

function maiorValor (a, b, c) {
  if(a > b && a > c) {
    return 'O valor A é o maior'
  } else if (b > a && b > c) {
    return 'O valor B é o maior'
  }else {
    return 'O valor C é o maior'
  }
}
console.log(maiorValor(5, 7, 6))
