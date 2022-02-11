
const NUMERI = []

let somma = 0
for (let i = 0; i < 5; i++) {
    
    const numero = parseFloat(prompt('inserisci un numero'))
    

    NUMERI.push(numero)

    somma += NUMERI[i]
    console.log(numero)


    
    
}

console.log (somma)
console.log (NUMERI)