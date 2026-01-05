function calculadora(a, b, operacion) {
    switch (operacion) {
        case 'sumar':
            return a + b;
        case 'restar':
            return a - b;
        case 'multiplicar':
            return a * b;
        case 'dividir':
            return a / b;
        default:
            return 'Operación no válida';
    }
}

// Testear
console.log(calculadora(10, 5, 'sumar'));        // 15
console.log(calculadora(10, 5, 'restar'));      // 5