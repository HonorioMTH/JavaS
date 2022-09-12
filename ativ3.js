let num1 = 0, num2 = 0, num3 = 0, num4 = 0

num1 = prompt("Digite o primeiro valor: ");
num2 = prompt("Digite o segundo valor: ");
num3 = prompt("Digite o terceiro valor: ");
num4 = prompt("Digite o quarto valor: ");

num1 = num1 * num1
num2 = num2 * num2
num3 = num3 * num3
num4 = num4 * num4

if(num3 >= 1000){
    alert("Resultado do terceiro valor: " + num3);
}else{
    alert("Resultado do primeiro valor: " + num1);
    alert("Resultado do segundo valor: " + num2);
    alert("Resultado do terceiro valor: " + num3);
    alert("Resultado do quarto valor: " + num4);
}