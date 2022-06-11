// Crie um algoritmo em Javascript que gere um vetor de 8 posições, onde os valores decada posição seja o cubo de cada índice
function gerarArrays(quantidade) {
  const valor = []

  for(i = 0; i < quantidade; i++) {
    valor[i] = i ** 3
    console.log(valor[i]) 
  }
}

console.log(gerarArrays(8))

