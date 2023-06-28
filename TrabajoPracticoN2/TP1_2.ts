/*  Crear una clase de Auto con los atributos (marca, modelo, potencia,
    max. velocidad)
     Crear 5 autos en un array
     Iterar el array y mostrar los autos por pantalla
     Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda
    en forma óptima en recorrer x kms  */

class Auto {
    marca: string;
    modelo: string;
    potencia: number;
    maxVelocidad: number;
      
    constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }
      
    calcularTiempo(distancia: number): number {
        // Supongamos que la velocidad óptima es el 80% de la máxima velocidad del auto
        const velocidadOptima = this.maxVelocidad * 0.8;
        const tiempo = distancia / velocidadOptima;
        return tiempo;
    }
}
      
// Crear 5 autos en un array
const autos: Auto[] = [
    new Auto("Ford", "Mustang", 300, 250),
    new Auto("Chevrolet", "Camaro", 350, 270),
    new Auto("BMW", "M5", 400, 300),
    new Auto("Audi", "R8", 450, 320),
    new Auto("Mercedes-Benz", "AMG GT", 500, 350)
];
      
// Iterar el array y mostrar los autos por pantalla
autos.forEach(auto => {
    console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Potencia: ${auto.potencia}, Max. Velocidad: ${auto.maxVelocidad}`);
});
      
// Iterar los autos y calcular el tiempo para recorrer x kms (supongamos 100 kms)
const distancia = 100;
autos.forEach(auto => {
    const tiempo = auto.calcularTiempo(distancia);
    console.log(`El auto ${auto.marca} ${auto.modelo} tarda ${tiempo} horas en recorrer ${distancia} kms.`);
});
      