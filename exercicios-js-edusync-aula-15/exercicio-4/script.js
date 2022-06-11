/* 4 - Escreva um algoritmo que permita a leitura dos nomes de 5 pessoas e armazene os nomes
lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de um nome qualquer de
pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos
anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. Gere os resultados no
console. */


const nomes = ['Maria', 'Joao', 'Alice', 'Jose', 'Eduardo'];

function lerNomesArray(nome) {
  let nomeEncontrado = false;
  for(i = 0; i < 5; i++) {
    if(nomes[i] == nome) 
      nomeEncontrado = true;  
  }
  if(nomeEncontrado == true){
    console.log('Achei!')
  }else {
    console.log('Nao achei!')
  }  
  
}
console.log(lerNomesArray('Maria'))