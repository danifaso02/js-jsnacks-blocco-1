"use: script";

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Lista Nomi
const  Names= ["Paperino", "Pucci", "FrancoPazzo", "LuigiStoRazzo"];

// Inserisci nome da tastiera
const userName = prompt("Dimmi il tuo nome");

// Verifica
let found = false;
for( let i = 0; i < Names.length; i++ ) {
    if( userName === Names[i] ) {
        found = true;
        break;
    }
}

if( found ) {
    alert("Entra");
} else {
    alert("Ciao Ciao");
}
