let N, E, S, Tot
		

N = prompt("Qual o número de horas trabalhadas? ");

S = N * 10
alert("Seu salário é: " + S);

if (N > 50){
E = N - 50
Tot = E * 20
alert("\nSeu valor em horas extras é: " + Tot)
alert("\nVocê receberá "+ (Tot + S)  )}