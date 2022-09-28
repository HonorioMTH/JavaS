import { Animal } from "./animal";

export class Cavalo extends Animal{

    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade);
    }

    correr(): void {
        console.log("Correndo igual um cavalo");
    }

    som(): void {
        console.log("Irruuuu!");
    }
}