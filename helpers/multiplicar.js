const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( mult = 5, listar = false, hasta = 10) => {

    try{
        let salida = '';
        for(let i = 1; i<=hasta; i++)
            salida += (`${mult} x ${i} = ${i*mult}\n`)
            
        if( listar ){
            console.log('==================='.green);
            console.log('   Tabla del:', colors.blue(mult));
            console.log('==================='.green);

            console.log(salida)
        }
        fs.writeFileSync( `./salida/tabla-${mult}.txt`, salida);
        return `tabla-${mult}`;

    } catch (err){

        throw err;

    }
        // return new Promise((resolve, reject)=>{
        //     let salida = '';
        //     for(let i = 1; i<=10; i++)
        //         salida += (`${mult} x ${i} = ${i*mult}\n`)
            
        //     console.log(salida);
            
        //     fs.writeFileSync( `tabla-${mult}.txt`, salida);
            
        //     resolve(`tabla-${mult} creada`);
        // })
}

module.exports = {
    crearArchivo
}