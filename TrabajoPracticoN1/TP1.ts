/* Dado un arreglo de números determinar cuál es el
mayor y mostrarlo, si existe el número cero una o más veces en el
arreglo también mostrar “Hay un cero”, pero una sola vez. Por ej.
=> [3, 4, ​0​, 3, ​0​, 9, ​12​, 5]
12
“Hay un cero”
=> [4, -4, 10, 23, 3, 4, 12, ​50​]
50   */

let arreglo: number[] = [6, 37, 53, 20, 0, 65, 84, 97];
let nume : number = 0;
let T: number = 0;
for(let i=0; i < arreglo.length; i++){
    if (nume < arreglo[i]){
        nume = arreglo[i];
    }
    if (arreglo[i] == 0){
        T = 1;
    }
};
console.info('El numero mayor es: ' + nume);
if(T == 1){
    console.info('Hay un cero');
};