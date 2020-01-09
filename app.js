//Requires: Hay 3 tipos
const fs = require('fs'); //<- Este está incluido en node
//const nombreVariable = require('express) <- Este es externo, es un módulo aparte
//const nombreVariable2 = require('./modulo') <- Este es mío y lo he creado yo


/* Imprimir por pantalla la tabla del 2
2*1 = 2
2*2 = 4
...
*/
let base = 8;

let data = '';
for (let i = 1; i < 11; i++) {
    //console.log(`2 * ${i} = ${2*i}`);
    data += `${base} * ${i} = ${base*i}\n`;
}



fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('¡El archivo se ha creado!');
});