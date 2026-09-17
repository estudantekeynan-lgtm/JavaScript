const readline =require('readline-sync');

const qtdComprada = readline.questionInt("Qual foi a quantidade comprada?: ")


const preco = readline.questionFloat("Qual é o preco por unidade?: ")

const total = qtdComprada * preco


console.log(`=== relatorio === \n Voce comprou : ${qtdComprada} produtos \n Preco por Unidade: R$${preco} \n E o total foi de R$${total.toFixed(2)} `)