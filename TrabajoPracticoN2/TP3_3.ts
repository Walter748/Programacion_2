/*Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y
sacar fondos

• Si le asignamos más de 500000 disparamos una alarma
• Si intentamos sacar más de lo que disponemos disparamos otra alarma
• Si intentamos sacar más de 100000 disparamos otra alarma*/

class CuentaBancaria {
    fondos: number;
  
    constructor() {
        this.fondos = 0;
    }
  
    asignarFondos(cantidad: number): void {
        this.fondos += cantidad;
        if (cantidad > 500000) {
            this.dispararAlarma("Se ha asignado una cantidad alta de fondos");
        }
    }
  
    sacarFondos(cantidad: number): void {
        if (cantidad > this.fondos) {
            this.dispararAlarma("No hay suficientes fondos disponibles para realizar el retiro");
        } else if (cantidad > 100000) {
            this.dispararAlarma("Se ha intentado retirar una cantidad alta de fondos");
        } else {
            this.fondos -= cantidad;
        }
    }
  
    dispararAlarma(mensaje: string): void {
        console.log("¡ALARMA! " + mensaje);
    }
}
  
// Ejemplo de uso de la clase CuentaBancaria
const cuenta = new CuentaBancaria();
cuenta.asignarFondos(200000);
console.log("Fondos actuales: " + cuenta.fondos);
cuenta.sacarFondos(150000);
console.log("Fondos actuales: " + cuenta.fondos);
cuenta.asignarFondos(600000);
console.log("Fondos actuales: " + cuenta.fondos);
cuenta.sacarFondos(200000);
console.log("Fondos actuales: " + cuenta.fondos);
  