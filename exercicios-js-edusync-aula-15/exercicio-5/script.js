/* 5 - Crie um algoritmo que leia um vetor Q de 10 posições (aceitar somente números pares).
O algoritmo deverá escrever o valor do maior elemento de Q e a respectiva posição que ele
ocupa no vetor. Gere os resultados no console. */

function gerarArrays(){
  let vetorq = []
  pos = 0
  for(i = 0; i < 10; i++){
    vetorq[i] = i + i
    if(vetorq[i] % 2 > 0){
      i--
    }
    if(vetorq[i] > vetorq[pos]){
      pos = i
    }
  } 
  
  console.log(vetorq)
  console.log(pos)

}

console.log(gerarArrays())
