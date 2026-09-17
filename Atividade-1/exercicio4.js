const readline = require('readline-sync');

const temp = readline.questionFloat("Temperatura: ")



if(temp <=60){
    console.log("Normal")
}else if(temp >60 && temp <=80){
    console.log("Atencao")
}else{
    console.log("CRITICO")
}
