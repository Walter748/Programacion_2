/*Como estamos en año electoral vamos a realizar este Trabajo Practico Definir las clases necesarias para representar un
Sistema de Voto Electrónico que permita manejar: los partidos
políticos, los candidatos, las listas, los votantes, votos.
Tener en cuenta que el sistema debe servir para poder realizar elecciones legislativas,
provinciales y nacionales*/

class VotoElectronico {
    static agregarPartidoPolitico(partido1: PartidoPolitico) {
        throw new Error("Method not implemented.");
    }
    static agregarVotante(votante2: Votante) {
        throw new Error("Method not implemented.");
    }
    partidosPoliticos: PartidoPolitico[];
    votantes: Votante[];
    votos: Voto[];

    constructor() {
        this.partidosPoliticos = [];
        this.votantes = [];
        this.votos = [];
    }

    agregarPartidoPolitico(partidoPolitico: PartidoPolitico) {
        this.partidosPoliticos.push(partidoPolitico);
    }

    agregarVotante(votante: Votante) {
        this.votantes.push(votante);
    }

    agregarVoto(voto: Voto) {
        this.votos.push(voto);
    }
}

class PartidoPolitico {
    nombre: string;
    listas: Lista[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.listas = [];
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
    }

    toString() {
        return `Partido político: ${this.nombre}, Listas: ${JSON.stringify(this.listas, null, 2)}`;
    }
}

class Candidato {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


class Lista{
    nombre:string;
    candidatos: Candidato[];
    
    constructor(nombre:string){
        this.nombre = nombre;
        this.candidatos = [];
    }

    agregarCandidato(candidato: Candidato) {
        this.candidatos.push(candidato);
    }
}

class Votante{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    toString() {
        return `Votante: ${this.nombre}, Edad: ${this.edad}`;
    }
}

class Voto{

}

const votacionPrueba = new VotoElectronico();

const partido1 = new PartidoPolitico("Partido A");
const partido2 = new PartidoPolitico("Partido B");

const lista1 = new Lista('Lista 1');
const lista2 = new Lista('Lista 2');

const candidato1 = new Candidato("Candidato 1", 35);
const candidato2 = new Candidato("Candidato 2", 42);
const candidato3 = new Candidato("Candidato 3", 28);
const candidato4 = new Candidato("Candidato 4", 39);

lista1.agregarCandidato(candidato1);
lista1.agregarCandidato(candidato2);
lista2.agregarCandidato(candidato3);
lista2.agregarCandidato(candidato4);

partido1.agregarLista(lista1);
partido2.agregarLista(lista2);

const votante1 = new Votante("Jose", 25);
const votante2 = new Votante("Alberto", 33);

votacionPrueba.agregarPartidoPolitico(partido1);
votacionPrueba.agregarPartidoPolitico(partido2);
votacionPrueba.agregarVotante(votante1);
votacionPrueba.agregarVotante(votante2);

//console.log(JSON.stringify(objeto, replacer, space));
/*sirve para mostrar todo completo en formato de texto
replacer = Permite personalizar la serialización del objeto
space = Controla la cantidad de espacio de sangría utilizado en la cadena JSON resultante*/