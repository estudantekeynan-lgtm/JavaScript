const readline = require('readline-sync');

const peso = readline.questionFloat("Digite o peso da peca: ");


if(peso >=95 && peso <=105){
    console.log("Aprovada")
}else{
    console.log("Reprovada ")
}