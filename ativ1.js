let n1, n2, result;

n1 = prompt("Qual número você quer saber a porcentagem? ");
n2 = prompt("Qual a porcenta você quer saber do primeir valor? ");

multi(n1, n2);

function multi(n5, n4){
result = parseFloat(n5) * parseFloat(n4) / 100
return alert(result);
}