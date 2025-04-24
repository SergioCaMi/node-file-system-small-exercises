/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */

const fs = require('fs');
const directory = '.';

fs.readdir(directory, (err, files) =>{
    console.log('Archivos en directorio:', files);
});
