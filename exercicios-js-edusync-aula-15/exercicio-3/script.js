/* 3 - Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X.
Logo após, imprimir o vetor M. Gere os resultados no console.*/

const gerarArrays = (x) => {
  let a = []

  for(i = 0; i < 10; i++) {
    a[i] = i + i
    console.log(a[i])
}

  const m = a.map(n => n * x)
  console.log(m)
  
}

console.log(gerarArrays(10))




