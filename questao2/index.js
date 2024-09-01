function isFibonacciNumber(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    if (num === a || num === b) return true;

    while (b <= num) {
        let next = a + b;
        a = b;
        b = next;

        if (b === num) return true;
    }

    return false;
}

const numberToCheck = 21; // Número definido
// Output esperado: "21 pertence à sequência de Fibonacci."
if (isFibonacciNumber(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
