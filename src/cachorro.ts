import { Animal } from "./animal";

export class Cachorro extends Animal{
    

    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade);
    }

    correr(): void {
        console.log("Correndo igual um cachorro");
    }

    som(): void {
        console.log("Au au!");
    }

}