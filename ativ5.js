let indi;

indi = prompt("Qual o índice de poluição atual? ");

if(indi == 0.3){
alert("Grupo 1, suspendam imediatamente suas atividades!");
}else if(indi == 0.4){
alert("Grupos 1 e 2, suspendam imediatamente suas atividades");
}else if(indi >= 0.5){
alert("Todos os grupos suspendam suas atividades imediatamente!");
}