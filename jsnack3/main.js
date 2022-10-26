"use:script";

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
for (let i = 0; i<=4; i++){
    const num = prompt("Inserire numero");
    console.log(num);
    sum = num + num;
}

console.log(`La somma di tutti i numeri inseriti è ${sum}`);