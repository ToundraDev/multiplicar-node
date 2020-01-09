//Requires
const fs = require('fs');


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base "${base}" imputada no es un número.`)
            return;
        }
        let data = '';
        for (let i = 1; i < 11; i++) {
            //console.log(`2 * ${i} = ${2*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tablas/tabla-${base}.txt`)
            }

        });

    });
}

//Exportamos el objeto crearArchivo mediante la función exports de module
module.exports = {
    crearArchivo: crearArchivo //podemos poner solo crearArchivo
}

//Podríamos ponerlo así también en la línea 5:
// module.exports.crearArchivo..