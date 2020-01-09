// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: 'true',
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crear un archivo de tabla de multiplicar con un limite', {
//         base: {
//             demand: 'true',
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar2.js'); //poniendo llaves tras el const, desestructuro lo que hay dentro

//let argv2 = process.argv
//console.log('Limite', argv.limite, );
//console.log(argv2);

let comando = argv._[0]; //Con esto saco el comando que llega en el array de comandos de argv y, concretamnte, la posición 0.

switch (comando) {
    case 'listar':
        console.log("Listando");
        listarTabla(argv.base, argv.limite).then(archivo => { console.log(`Archivo creado en la siguiente ruta: ${archivo}`); }).catch(e => console.log(e))
        break;
    case 'crear':
        console.log("Creando");
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log('Archivo creado en la siguiente ruta:' +
                ` ${archivo}`.blue);
        }).catch(e => console.log(e))
        break;
    default:
        console.log("Comando no reconocido");
}