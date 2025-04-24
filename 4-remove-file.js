/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */

const fs = require('fs');

fs.unlink("borrame.txt", err =>{
    console.log("fichero borrado!");
});
