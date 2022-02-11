
const NUMERI = []


for (let i = 0; i < 5; i++) {
    
    const numero = parseFloat(prompt('inserisci un numero'))
    

    NUMERI.push(numero)
    console.log(numero)


    
    
}
const RESULT = NUMERI.join('+')
console.log (RESULT)
console.log (NUMERI)