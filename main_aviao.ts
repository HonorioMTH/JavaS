import { Aviao } from "./src/aviao";

let aero = new Aviao("AirBus", "Boing", 50000, "LATAM")
console.log(`Marca: ${aero.marca} Modelo: ${aero.modelo} Potencia: ${aero.potencia} Empresa: ${aero.empresa}`)
