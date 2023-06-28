/*Desarrolla una aplicación utilizando TypeScript que genere contraseñas seguras.
La aplicación debe seguir las siguientes pautas:
La aplicación debe generar una contraseña aleatoria de una longitud específica.
La contraseña debe incluir una combinación de letras mayúsculas, letras minúsculas,
números y caracteres especiales.
La contraseña generada debe ser mostrada en la consola.
Ten en cuenta las siguientes consideraciones:
Puedes utilizar cualquier librería de generación de contraseñas aleatorias que esté
disponible para TypeScript.
Asegúrate de que la aplicación sea fácil de usar y proporcione instrucciones claras al
usuario.
Puedes incluir características adicionales en tu aplicación,
como permitir al usuario especificar el conjunto de caracteres permitidos en la contraseña. 

class PasswordGenerator {
    generarContrasena(longitud: number): string {
        const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-';
  
        let contrasena = '';
        for (let i = 0; i < longitud; i++) {
            const indice = Math.floor(Math.random() * caracteresPermitidos.length);
            contrasena += caracteresPermitidos.charAt(indice);
        }
  
        return contrasena;
    }
}
  
class Application {
        passwordGenerator: PasswordGenerator;
  
    constructor() {
        this.passwordGenerator = new PasswordGenerator();
    }
  
    run(): void {
        console.log("Bienvenido al generador de contraseñas seguras");
        console.log("--------------------------------------------");
        console.log("Por favor, ingrese la longitud deseada para la contraseña:");
  
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
  
        rl.on('line', (input: string) => {
            const longitud = parseInt(input);
            if (isNaN(longitud)) {
                console.log("¡Error! La longitud debe ser un número válido. Por favor, inténtelo nuevamente.");
            } else {
                const contrasena = this.passwordGenerator.generarContrasena(longitud);
                console.log("Contraseña generada: " + contrasena);
                rl.close();
            }
        });
    }
}
  
const app = new Application();
app.run();


//NO FUNCIONA
*/