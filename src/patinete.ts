export class Pati{
    modelo: string;
    cor: string;
    preco: number;

    constructor(
    modelo: string,
    cor: string,
    preco: number
    ){
        this.modelo = modelo
        this.cor = cor
        this.preco = preco
    }
verModelo () {
    console.log (`Modelo: ${this.modelo}`)
}
}