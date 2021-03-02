
const argv = require('./config/yargs');
const colors = require('colors/safe')
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

 crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, colors.green('creado')))
    .catch( err => console.log(err));
