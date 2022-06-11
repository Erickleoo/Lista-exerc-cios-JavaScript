/* 4 - Elaborar um algoritmo em Javascript para calcular o IMC ideal de uma pessoa. Tendo 
como dados de entrada a altura e o sexo utilizando as seguintes fórmulas:
- para homens: (72.7*h)-58
- para mulheres: (62.1*h)-44.7
Exiba o resultado no console: */

const altura = prompt('Qual a sua altura?');
const sexo = prompt('Qual o seu sexo? M = Masculino F = Feminino');

function imc() {
  
  if(sexo == 'm') {
    return (72.7 / altura)- 58;
  } else if(sexo == 'f') {
    return (62.1 / altura) - 44.7
  } else {
    return 'Você não escreveu nada!'
  }

}

console.log(imc())