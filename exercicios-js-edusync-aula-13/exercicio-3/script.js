/* 3 - Elaborar um algoritmo em Javascript que dado 2 valores A e B e os exibam no console com a mensagem: "São múltiplos" ou "Não são múltiplos" */
function multiplos(a, b) {
  if(a % b == 0) {
    return 'São múltiplos!'
  } else {
    return 'Não são multiplos!'
  }

}
console.log(multiplos(10, 2))