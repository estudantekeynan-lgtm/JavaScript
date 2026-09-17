const readline = require('readline-sync');


let acumulador = 0

for(let i = 1 ; i<=5;i++){
    const medicao = readline.questionFloat(`Digite o ${i}º valor: `)
    acumulador += medicao 
}
const media = acumulador/5

console.log(`Soma : ${acumulador} `)
console.log(`Media : ${media.toFixed(2)} `)