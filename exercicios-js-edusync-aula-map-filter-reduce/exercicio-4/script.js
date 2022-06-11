/* 3 - Dado um vetor de objetos:
A. Com map, apresente os valores com 10% de desconto
B. Com filter, apresente os valores maiores que 10,00
C. Com map e reduce, apresente a média dos valores menores que 10,00
*/

const filmes = [
  {
  "id": 1,
  "title": "Die Hard",
  "valor": 12.00,
  "rating": 5.0
  },
  {
  "id": 2,
  "title": "Homem aranha 1",
  "valor":8.00,
  "rating": 4.0
  },
  {
  "id": 3,
  "title": "Homem de ferro",
  "valor": 7.00,
  "rating": 3.0
  },
  {
  "id": 4,
  "title": "Die Hard",
  "valor": 13.00,
  "rating": 5.0
  }
];

const objetos = filmes.map((x) => {
  let valores = (x.valor * 0.1) - x.valor
  valores = valores.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  return valores
});
console.log(objetos);

const valorMaior = filmes.filter((filmes) => {
  return filmes.valor > 10
});
console.log(valorMaior)


const valores = filmes.map(filmes => filmes.valor)
.filter((valores) => (valores < 10))
.reduce((acc, atua)=> (acc + atua) / 2) 
   
console.log(valores)

 


