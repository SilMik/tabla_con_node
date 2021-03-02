const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe:'Muestra tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe: 'hasta el numero que se calculará la multiplicación'
                })
                .check((argv, options )=> {
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un número'
                    }    
                    return true;            
                })
                .argv;

module.exports = argv;