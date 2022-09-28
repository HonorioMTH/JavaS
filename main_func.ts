import { Funcionario } from "./src/func";

let empregado1 = new Funcionario("matheus", "programador", "junior", "front");
console.log(`Seu nome: ${empregado1.nome} \nSeu setor: ${empregado1.setor} \nCargo: ${empregado1.cargo} \nSua função: ${empregado1.funcao}`)