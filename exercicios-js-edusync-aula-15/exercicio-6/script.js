/* 6 - Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os
dias de uma semana. Calcular e escrever no console:
a) Menor temperatura da semana
b) Maior temperatura da semana
c) Temperatura média semanal
d) O número de dias da semana em que a temperatura foi inferior a média semanal */

function medirTemperatura(maior, menor, media){
  const temperaturaVetor = [];
  let tempTotal = 0;
  let tempInferioraMedia = 0
  let maiorTemperatura = 0;
  let menorTemperatura;

  for(i = 0; i < 7; i++) {
    temperaturaVetor[i] = parseInt(prompt("Informe a temperatura do dia: ", i + 1))
    if (temperaturaVetor[i] > maiorTemperatura){
      maiorTemperatura = temperaturaVetor[i];
    }     
    menorTemperatura = Math.min(temperaturaVetor[i])
    tempTotal = tempTotal + temperaturaVetor[i];
    media = tempTotal / 7
  }

  temperaturaVetor.forEach(temperatura => {
    if (temperatura < media){
      tempInferioraMedia += 1

    }
  })

  console.log(`A maior temperatura da semana foi: ${maiorTemperatura}`)  
  console.log(`A menor temperatura da semana foi: ${menorTemperatura}`)
  console.log(`A media das temperaturas na semana foi: ${media}`)
  console.log(`Em ${tempInferioraMedia} dias, a temperatura ficou abaixo da temperatura media semanal`)
  

}

console.log(medirTemperatura())

