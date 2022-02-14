


const NUMERO =(prompt('inserisci un n umero a 4 cifre...')) ;

const NUMERI = NUMERO.split('');

   

console.log(NUMERI)
let somma = 0 ;
for (let i = 0; i < NUMERI.length; i++) {
    
    
   var numInt = parseInt(NUMERI[i]) 
    
    somma += numInt ;
    
}

console.log(somma)