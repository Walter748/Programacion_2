const SERVIDOR = "Mi Servidor";

let mensaje = "Mensaje con \"conmmillas\" dobles. I'm a teacher.";
console.info(mensaje);

mensaje = 'Cadena con "comilla" \' simple';
console.info(mensaje);

mensaje = `Mensaje "con" 'comilla' invertida`;
console.info(mensaje);

const m1 = "El servidor se llama '" + SERVIDOR + "' y se ejecuta en el puerto 3000";
console.info(m1);

const m2 = 'El serv se llama ' + SERVIDOR + ' bla bla';
console.info(m2);

const m3 = `El servidor se llama ${SERVIDOR} y \n\n se ejecuta en ...`;
console.info(m3);

const m4 = `
<html>
    <body>
      <h1>${SERVIDOR}</h1>
    </body>
</html>
`;
console.info(m4);