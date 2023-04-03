const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yarg')
require('colors')
console.clear();
 crearArchivo(argv.base, argv.list, argv.hasta)
  .then( data => console.log(data.rainbow, 'creado'))
  .catch( e => console.log('Error ', e));