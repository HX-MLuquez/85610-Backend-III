// npm i commander <- Librería para crear CLI y manejar comandos
//! ╔══════════════════════════════════════════════════╗
//* ║═════════════════                ═════════════════║
//* ║   >>>   🔵🟢🔵   CODIGO AQUÍ   🔵🟢🔵   <<<   ║
//* ║═════════════════                ═════════════════║
//! ╚══════════════════════════════════════════════════╝

// npm i commander <- Librería para crear CLI y manejar comandos
const { Command, Option } = require('commander');
const program = new Command();

//                Palabra clave         Descripción           Valor por defecto
program.option("-p, --port <PORT>", "Puerto donde escuchará el server", 3000);
program.option("-d, --debug", "Activa mode debug", false)
program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev", "test"]).default("prod"))


/*
program {
p || port: 3000 || value lo que viene luego,
d || debug: false || value lo que viene luego,
m || mode: dev || value lo que viene luego
}

*/

program.allowUnknownOption() // permite los comandos desconocidos
program.allowExcessArguments()  //  Permite argumentos excesivos

program.parse()

const opts = program.opts()
console.log("-opts->", opts);
/*
* Por defecto toma los valores por defecto
 opts -> { port: '3000', mode: 'prod', debug: false }

 * ->comando que ejecutamos --> node index.js --mode dev --debug --port 10000
    opts -> { port: '10000', mode: 'dev', debug: true } 

*/