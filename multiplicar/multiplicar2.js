//Requires
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base "${base}" imputada no es un númerod.`)
            return;
        } else if (!Number(limite)) {
            reject(`La limite "${limite}" imputada no es un número.`)
            return;
        }
        let data = '';
        console.log("=================================".rainbow);
        console.log(`========== Tabla de ${base} ===========`.rainbow);
        console.log("=================================".rainbow);
        for (let i = 1; i < limite + 1; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base "${base}" imputada no es un número.`)
            return;
        } else if (!Number(limite)) {
            reject(`La limite "${limite}" imputada no es un número.`)
            return;
        }
        let data = '';
        for (let i = 1; i < limite + 1; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-con-limite-en-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tablas/tabla-${base}-con-limite-en-${limite}.txt`)
            }
        });

    });
}

//Exportamos el objeto crearArchivo mediante la función exports de module
module.exports = {
    crearArchivo: crearArchivo, //podemos poner solo crearArchivo
    listarTabla: listarTabla
}

//Podríamos ponerlo así también en la línea 5:
// module.exports.crearArchivo..