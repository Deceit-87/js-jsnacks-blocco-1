



// const NUMERI = []



// for (let i = 0; i < 6; i++) {
//  let numero = parseInt( prompt('inserisci un numero'))

//  console.log(numero)
    
//  if (numero % 2 === 0){
//    console.log('numero pari')

//  }
//   else{

//     console.log('numero dispari')
//     NUMERI.push(numero)
//   }

   

//  }

// console.log(NUMERI);


                          // WITH BOOLEAN


const NUMERI = []

let DISPARI = true

for (let i = 0; i < 6; i++) {
 let numero = parseInt( prompt('inserisci un numero'))

 console.log(numero)
    
 if (numero % 2 === 0){
   console.log('numero pari')

   DISPARI = false

 }
 else{
    
   
    console.log('numero dispari')
    
    NUMERI.push(numero)
  }

   

 }

console.log(NUMERI);