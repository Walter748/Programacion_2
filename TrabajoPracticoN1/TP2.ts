/* Dados 2 arreglos de números enteros de la misma
longitud, obtener un nuevo arreglo a partir de la suma de los
elementos de ambos arreglos en la misma posición, y mostrar el
arreglo resultante. Por ej.
=> [3, 4, 0, 3, 12, 2]
[2, 9, 0, 5, 22, 14]
[-1, 5, 0, 2, 10, 12] */

let arreglo_1: number[] = [6, 37, 53, 20, 0, 65, 84, 97];
let arreglo_2: number[] = [10, 26, 54, 79, 90, 59, 72, 49];
let arreglo_3: number[] = [];

for(let i=0; i < arreglo_1.length; i++){
    let aux: number = arreglo_1[i] + arreglo_2[i];
    arreglo_3[i] = aux;
}
console.info(arreglo_3);