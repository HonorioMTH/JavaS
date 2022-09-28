import { Animal } from "./animal";

export class preguica extends Animal{


    constructor(
        nome: string,
        idade: number,

    ){
        super(nome, idade);
    }

    som(): void {
        console.log("ZzZzZ");
    }

    subindoArvore():void{
        console.log("Escalando uma árvore como uma preguiça... lentamente");
    }
}