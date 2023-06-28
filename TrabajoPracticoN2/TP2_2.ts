/*Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se
le asignan Alumnos (2)*/

class Alumno {
    nombre: string;
  
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
  
class Curso {
    nombre: string;
    alumnos: Alumno[];
  
    constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
    }
    
    asignarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
}
  
class Escuela {
    cursos: Curso[];
  
    constructor() {
        this.cursos = [];
    }
  
    agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }
}
  
// Crear alumnos
const alumno1 = new Alumno("Juan");
const alumno2 = new Alumno("María");
  
// Crear cursos
const curso1 = new Curso("Matemáticas");
const curso2 = new Curso("Programacion");
  
// Asignar alumnos a los cursos
curso1.asignarAlumno(alumno1);
curso1.asignarAlumno(alumno2);
curso2.asignarAlumno(alumno1);
  
// Crear escuela y agregar cursos
const escuela = new Escuela();
escuela.agregarCurso(curso1);
escuela.agregarCurso(curso2);
  