/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */

const fs = require('fs');

const texto = "Hello World!";
fs.writeFileSync("test.txt", texto, "utf-8");
console.log("Archivo escrito correctamente.");

