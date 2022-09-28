let taxa, cust;

taxa = prompt("Qual a taxa do imposto? ");
cust = prompt("Qual o preço de custo do produto? ");
 
calcular(taxa, cust);

function calcular(taxaImposto, custo){
    final = parseFloat(custo) + parseFloat(custo*taxa/100)
    alert("Preço final do seu produto é: R$" + final)
}