const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number', 
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
})
.option('l',{
    alias: 'list',
    type: 'boolean', 
    default: false,
    describe: 'Flag que imprime en consola el resultado'
})
.option('h',{
    alias: 'hasta',
    type: 'number', 
    default: 10,
    describe: 'Valor limite de tabla'
})
.check((argv, options) =>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }return true
})
.argv;

module.exports =argv;