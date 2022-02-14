


const listaInvitati =['mario rossi','mario bianchi','pinco pallino','walter fattore','emanuele strada'];


const nomeInvitato = prompt('inserisci il tuo nome..') ;


let findInvitato = false ;

for (let i = 0; i < listaInvitati.length; i++) {

    if (nomeInvitato === listaInvitati[i]) {

        findInvitato = true ;
        console.log('benvenuto alla festa')
    }
  else {

        console.log('invitato non trovato')      
    }
    
}

if ( findInvitato === true){

    alert('puoi partecipare alla festa')
}

else {
    alert('non puoi pqwrtecipare alla festa')
}
 