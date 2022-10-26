"use: script";

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const dispariNum = [];

for (let i = 0; i <= 6; i++) {
    const numInput = Number(prompt("Inserisci un numero!"));

    if(numInput % 2 === 1){
        dispariNum.push(numInput);
    }
}
console.log(dispariNum);