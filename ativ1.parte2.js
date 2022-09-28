let num1, num2, num3

num1 = prompt("Digite o primeiro valor: ");
num2 = prompt("Digite o segundo valor: ");
num3 = prompt("Digite o terceiro valor: ");

maior(num1, num2, num3);

function maior(n1, n2, n3){

if(n1 > n2 && n1 > n3){
   alert("O primeiro valor é o maior número")
}else if(n2 > n1 && n2 > n3){
    alert("O segundo valor é o maior número")
}else if(n3 > n1 && n3 > n2){
    alert("O terceiro valor é o maior número")
}else{
    return alert("ERROR!")
}
}

menor(num1, num2, num3)

function menor(n1, n2, n3){

    if(n1 < n2 && n1 < n3){
       alert("O primeiro valor é o menor número")
    }else if(n2 < n1 && n2 < n3){
        alert("O segundo valor é o menor número")
    }else if(n3 < n1 && n3 < n2){
        alert("O terceiro valor é o menor número")
    }else{
        return alert("ERROR!")
    }
}