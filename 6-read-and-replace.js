/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */

const fs = require('fs');

// Ejercicio 1
// function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {

//     const fileContent = fs.readFileSync(htmlFilePath, "utf-8");
//     if (fileContent.includes(textToSearch)){
//         let fileResult = fileContent.replace(textToSearch, textToReplace);
//         fs.writeFileSync("result.html", fileResult, "utf-8");
//     } else {
//         console.log(`El texto ${textToSearch} no ha sido encontrado`);
//     }
// }
// replaceTextInFile("./index.html", "FFC371", "ADD8E6");
// replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
// replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");



// BONUS
/**
* BONUS: Crea un script que permita parametrizar los 3 argumentos de la función.
* Es decdir, que el script pueda ser invocado des de el terminal así:
* node 6-read-amd-replace.js ./index.html FFC371 ADD8E6
*
* Si implementas este BONUS recuerda borrar las líneas 15, 16 y 17
*/

// process.argv[2] => archivo original
// process.argv[3] => texto a buscar
// process.argv[4] => texto por el cual se reemplaza

    const fileContent = fs.readFileSync(process.argv[2], "utf-8");
    if (fileContent.includes(process.argv[3])){
        let fileResult = fileContent.replace(process.argv[3], process.argv[4]);
        fs.writeFileSync("result.html", fileResult, "utf-8");
    } else {
        console.log(`El texto ${process.argv[3]} no ha sido encontrado`);
    }




