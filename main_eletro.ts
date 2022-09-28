import { celular } from "./src/eletro";

let eletronico1 = new celular("Apple", "iPhone", 4.3, 13.2);
console.log(`Marca: ${eletronico1.marca} \nModelo: ${eletronico1.modelo} \nTamanho da tela: ${eletronico1.polegadas} \nMegaPixels: ${eletronico1.cameras}`)