const readline = require('readline-sync');

const pcsCiclos = readline.questionInt("Quantas pecas?: ")

for(let i = 1; i<=10;i++){
    const producao = pcsCiclos*i
    console.log(`CICLO: ${i}| ${producao} pecas produzidas`)
}