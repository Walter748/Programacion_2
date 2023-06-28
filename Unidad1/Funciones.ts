function suma (a, b:number): number {
    return a + b;
}

console.info("La suma de 3 + 2 es " + suma(2, 3));

console.info("La suma de 3 + 2 es " + suma("hola", 3));

const restar = (a, b) => {
   return a - b;
};
console.info(`La resta de 4 -1 es ${restar(4,2)}`);

const multiplicar = (a, b) => a * b; // esto es una arrow function 
console.info(multiplicar(2, 4));

//Sintaxis condición ? expr1 : expr2 //esto es un operador ternario

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Permitido" : "Accesso Denegado";

console.log( access );