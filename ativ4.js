let num;

num = prompt("Digite seu número: ");

if(num % 2 == 0 && num >= 0){
    alert("Seu número é Par e Positivo");
}else if(num % 2 == 0 && num < 0){
    alert("Seu número é par e negativo");
}else if(num % 1 == 0 && num >= 0){
    alert("Seu número é impar e Positivo");
}else if(num % 1 == 0 && num < 0){
    alert("Seu número é impar e negativo");
}