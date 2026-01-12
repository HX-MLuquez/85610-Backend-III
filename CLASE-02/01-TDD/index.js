
//* TDD (Desarrollo guiado por pruebas) -> Testear la lógica en cuanto a:
//* tal entrada x función -> tal salida 
//* Test UNITARIOS - Test de INTEGRACIÓN 
//* Test UNITARIO: Es algo puro, simple, único y AISLADO - usaremos MOCHA 
//* Test de INTEGRACIÓN: Es la combinación de varias partes que interactúan entre sí - usaremos MOCHA + SUPERTEST

//* BDD (Behavior Driven Development) -> Testear el COMPORTAMIENTO de la aplicación

/*
* Crear calculadora con las 4 operaciones básicas ... suma, resta, multiplicación y división
* Cada operación debe ser una función independiente
* Cada función debe recibir dos parámetros
* Cada función debe devolver el resultado de la operación
* Crear tests para cada función

function calculadora
input -> operador, numA, numB
output -> resultado <- number con no más de 2 decimales
*/

function testCalculadora(cbCalc, operador, numA, numB) {
    let resultado = cbCalc(operador, numA, numB);
    return resultado;
}

function it_me(descripcion, testCalculadora, cbCalc, operador, numA, numB, esperado) {
    let resultado = testCalculadora(cbCalc, operador, numA, numB);
    if (resultado === esperado) {
        console.log(`%c ✔️ ${descripcion}`, 'color:green');
    } else {
        console.error(`%c ❌ ${descripcion} - Resultado: ${resultado}, Esperado: ${esperado}`, 'color:red');
    }
}

console.log(it_me("Suma de 2 + 3 = 5", testCalculadora, miCalculadora, "+", 2, 3, 5));
console.log(it_me("Multiplicación de 2 * 3 = 6", testCalculadora, miCalculadora, "*", 2, 3, 6));
console.log(it_me("División de 12 / 3 = 4", testCalculadora, miCalculadora, "/", 12, 3, 4));
console.log(it_me("División de 12 / 2 = 6", testCalculadora, miCalculadora, "/", 12, 2, 6));



function miCalculadora(operador, numA, numB) {
    if(operador === "+") {
        return parseFloat((numA + numB).toFixed(2));
    }
}