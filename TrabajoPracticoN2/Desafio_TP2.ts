/*Supongamos que queremos crear un programa que trabaje con diferentes
formas geométricas, como rectángulos y círculos. Podemos utilizar interfaces para definir
las propiedades y métodos comunes que deben tener estas formas.

interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}
  
class Rectangulo implements FormaGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
  
    calcularArea(): number {
        return this.base * this.altura;
    }
  
    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}
  
class Circulo implements FormaGeometrica {
    radio: number;
  
    constructor(radio: number) {
        this.radio = radio;
    }
  
    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
  
    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}
  
// Ejemplo de uso
const rectangulo = new Rectangulo(5, 10);
console.log("Área del rectángulo: " + rectangulo.calcularArea());
console.log("Perímetro del rectángulo: " + rectangulo.calcularPerimetro());
  
const circulo = new Circulo(3);
console.log("Área del círculo: " + circulo.calcularArea());
console.log("Perímetro del círculo: " + circulo.calcularPerimetro());


//NO FUNCIONA
*/