export class Pessoa{

    nome: string;
    dia: number;
    mes: number;
    ano: number;                                
    dataNascimento: string;
    altura: number;

    constructor(
        
    nome: string,
    dia: number,
    mes: number,
    ano: number,
    dataNascimento: string,
    altura: number,
    ){
        this.nome = nome
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.dataNascimento = dataNascimento
        this.altura = altura
    }
    
}