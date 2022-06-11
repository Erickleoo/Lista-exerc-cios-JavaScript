/* 1 - Faça um algoritmo em Javascript para calcular a média aritmética das 3 notas de um 
aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja 
igual ou superior a 6, ou a mensagem "reprovado", caso contrário. Exiba os resultados no 
console */

function mediaNotas(nota1, nota2, nota3) {
 const media = (nota1 + nota2 + nota3)/ 3;  
  console.log(`Sua media foi ${media.toFixed(1)}`)
  if(media >= 6) {
    return 'Aprovado!'
  } else {
    return "Reprovado"
  }
} 

console.log(mediaNotas(5, 6, 8))

