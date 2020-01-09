//Requires: Hay 3 tipos
const { crearArchivo } = require('./multiplicar/multiplicar.js'); //poniendo llaves tras el const, desestructuro lo que hay dentro

//let base = 'a';
//console.log(process.argv);
//crearArchivo(base).then(archivo => { console.log(`Archivo creado en la siguiente ruta: ${archivo}`); }).catch(e => console.log(e))

//Recogiendo parámetros de la consola :D
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);
crearArchivo(base).then(archivo => { console.log(`Archivo creado en la siguiente ruta: ${archivo}`); }).catch(e => console.log(e))