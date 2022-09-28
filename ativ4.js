let altu, peso;

altu = prompt("Qual a sua altura? ");
peso = prompt("Qual o seu peso? ");

imc(altu, peso);

function imc(altura, pes){
    result = parseFloat(pes/parseFloat(altura*altura))
    alert("Seu imc é: " + result.toFixed(1))
}