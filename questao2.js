const numero = 33
let cont = 0
let Fibonacci = [0, 1]

for (; ;) {
    const proximoNumero = Fibonacci[cont] + Fibonacci[cont + 1]
    if (numero === proximoNumero) {
        return console.log("Pertence a sequencia de Fibonacci")
    }
    if (numero < proximoNumero) {
        return console.log("Não Pertence a sequencia de Fibonacci")
    }
    Fibonacci.push(proximoNumero)
    cont++

}