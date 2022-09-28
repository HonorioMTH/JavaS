let min, hours 

hours = prompt("Qual o primeiro digito da sua hora? ");
min = prompt("Quantos minutos são? ");

hours = hours - 12

convert (hours, min);

function convert(horas, minutos){
     alert(horas +":"+ minutos) 
}