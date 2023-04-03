const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listFlag = false, hasta =10) => {
    try {
        let salida ='';
        let consola ='';
        
        
        for(let i=1; i<=hasta;i++){
            salida+=`${i} ${'x'.green} ${base} ${'='.green} ${i*base}\n`
            consola+=`${i} ${'x'} ${base} ${'='} ${i*base}\n`
        }
        if(listFlag){
            console.log('================'.green);
            console.log(`Tabla del`.green, colors.blue(base));
            console.log('================'.green);
            console.log(salida);
        }
        
        fs.writeFile(`./salida/tabla-${base}.txt`,consola,(e)=>{
            if(e){
                throw e
            }
        }) 
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }  
}

module.exports = {crearArchivo}