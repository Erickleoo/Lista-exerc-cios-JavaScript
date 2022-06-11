/* 5 - Com base no mesmo array do exercício anterior (n. 4), utilize filter e map, para
retornar uma lista dos ids dos filmes com nota (rating) 5.0:
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

const notas = filmes.map(x => x)
.filter((notas) => notas.rating == 5)

console.log(notas)

