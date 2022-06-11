/*1 - Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: X = A + B / C. Exiba o resultado no console.*/

const a = 4;
const b = 6;
const c = 2;
const x = (a + b) / c;

console.log(`O valor de x é = ${x}`)

/*2 - Faça um algoritmo em Javascript que dada (atribuição) as 3 notas de um aluno, calcule a 
média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente. Exiba o resultado no console.*/
const nota1 = 6
const nota2 = 7
const nota3 = 5
const mediaPonderada = (nota1*2,3) + (nota2*5) + (nota3*5);
const mediaFinal = mediaPonderada / 10;
console.log(`O valor da media final do aluno é ${mediaFinal}`) 



/*3 - Faça um algoritmo em Javascript que dado (atribuição) o tempo de duração de um evento em uma fábrica expressa em segundos e mostre o resultado no console expresso em horas, minutos e segundos.*/

function duracaoEvento(segundos, horas, minutos) {
  function duasCasasDecimais(numero) {
    if (numero <= 9) {
      numero = "0" + numero;
    }
    return numero
  }
  horas = duasCasasDecimais(parseInt(segundos / 3600));
  minutos = duasCasasDecimais(parseInt((segundos % 3600)/ 60));
  return `A duração do evento foi de ${horas} horas e ${minutos} minutos.`
}
console.log(duracaoEvento(38900))
  
/*4 - Escreva um algoritmo em Javascript que calcule a área de um triângulo equilátero. */

function areaTriangulo(base, altura) {
  const area = (base * altura) / 2
  return `A area do triângulo é de ${area}`
}

console.log(areaTriangulo(15, 50))

/*5 - Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e positivos
(A, B, C) e calcule a seguinte expressão: X = (A + B)² + C. Exiba o resultado no console.*/

function calculo(a, b, c) {
  const x = Math.pow(a + b, 2) + c;
  return x
}

console.log(calculo(5, 3, 2))


/*6 - Escreva um algoritmo em Javascript que dado um valor escreva no console o dobro de
seu antecessor .*/

function antecessor(numero) {
  const antecessor = numero - 1;
  return antecessor * 2
}


console.log(antecessor(10))


/*7 - Escreva um algoritmo em Javascript que dado o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. Exiba o resultado no console.*/
function eleicoesMunicipio(totalDeVotos, votosBrancos, votosNulos, votosValidos) {  
  
  const percenVotosBrancos =  (votosBrancos * 100) / totalDeVotos;
  const percenVotosNulos =  (votosNulos * 100) / totalDeVotos;
  const percenVotosValidos =  (votosValidos * 100) / totalDeVotos;  
  return `
  O total de votos foi ${totalDeVotos}.
  O percentual de votos brancos foi ${percenVotosBrancos}%
  O percentual de votos nulos foi ${percenVotosNulos}%
  O percentual de votos validos foi ${percenVotosValidos}%`
}
console.log(eleicoesMunicipio(500, 200, 100, 200))



/*8 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 30% e os impostos de 45%, escrever um algoritmo em Javascript que
dado (atribuição) o custo de fábrica de um carro e escreva, no console o custo ao consumidor. */

function fabricaConsumidor (percDistribuidor, percImpostos) {
  percDistribuidor = 30;
  percImpostos = 45;
  const custoFabrica = 1000;
  let valorDistribuidor = custoFabrica + (custoFabrica * percDistribuidor / 100);
  let valorImposto = custoFabrica + (custoFabrica * percImpostos / 100);
  let custoConsumidor = custoFabrica + valorDistribuidor + valorImposto;
  
  return `O custo ao consumidor é ${custoConsumidor}`
   
}

console.log(fabricaConsumidor())


const segundos = 28000;
const minutos = parseInt(segundos % 3600/ 60);
const hora = segundos / 3600;

console.log(minutos)