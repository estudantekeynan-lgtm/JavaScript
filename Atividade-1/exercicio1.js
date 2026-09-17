 const readline = require('readline-sync');

 const qtdPorHora = readline.questionFloat("Quantas pecas foram feitas por hora?: ")

 const horasTurno = readline.questionInt("Quantas horas o turno?: ")


const prodTotal = qtdPorHora *horasTurno


console.log(`=== Relatorio === \n Foram produzidas ${prodTotal} pecas, em um turno de ${horasTurno} horas, \n Pecas por hora: ${qtdPorHora}`)