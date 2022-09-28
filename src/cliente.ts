export class Cliente{
    nome: string;
    idade: number;
    cpf: string;
    bairro: string;

    constructor(
    nome: string,
    idade: number,
    cpf: string,
    bairro: string,
    ){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.bairro = bairro
    }
}