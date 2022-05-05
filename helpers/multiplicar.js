const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const crearArchivo = async( base = 5, listar = false , hasta = 10 ) => {

    try {

        let salida = '';
    
        for(let i = 1; i <= hasta; i++){
         salida += `${base} x ${ i } = ${ base * i}\n`
        }
        
        if( listar ){
            console.log('==========================='.magenta);
            console.log(colors.bold('Tabla de: '), colors.yellow.bold(base));
            console.log('==========================='.blue);
            
            console.log(salida.rainbow);       
        }

        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
        
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}