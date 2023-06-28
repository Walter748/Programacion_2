let string: string = "Pepe";
console.info("01 " + typeof string);

let number: number = 33; //se le agrega para que sea de tipo estatico
console.info("02 " + typeof number);

let float: number = 17.05;
console.info("03" + typeof float);

let boolean: boolean = true;
console.info("04" + typeof boolean);

let array: number[] = [1, 2, 3]; // es un array
array.push(4);
console.info("05 " + typeof array);

let VariableNull: null = null;
console.info("06 " + typeof VariableNull);

let x:undefined;
console.info("07 " + typeof x);

let sumar = function(a, b) { return a + b }
console.info(typeof sumar);

// se puede convertir un tipo de dato en otro

let num: number = 45;
let NumString: string = String(num);
console.info("08 " + typeof NumString);

interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

let planet: Planet = {
	name : "Earth",
	galaxy : "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};

console.log(planet.name);
console.log("\n");
console.log(planet.galaxy);
console.log("\n");