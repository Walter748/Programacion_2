/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */

let notas: number[] = [7, 8, 5, 2, 9];
let auxi: number = 0
function notaFinal(a){
    for(let i=0; i < a.length; i++){
        auxi = auxi + a[i]
    }
    return auxi / a.length;
};
console.info(notaFinal(notas));