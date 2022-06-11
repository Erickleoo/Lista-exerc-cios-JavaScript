/* Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo
deve ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. Gere os
resultados no console. */

function vetorOrdenado(aux){
  let numeros = [];

  for(i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt('Digite o numero!'))
    console.log(numeros[i])
  }

  for(i = 0; i < 10; i++) {
    for(j = i+1; j < 10; j++){
      if(numeros[i] > numeros[j]) {
        aux = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] =  aux;
      }
    }
  }
  console.log('Vetor Ordenado')
  for(i = 1; i < 10; i++){
    console.log(numeros[i])
  }

}

console.log(vetorOrdenado())