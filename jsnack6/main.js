"use: script";

// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

// dichiarazione array e variabile somma
const listNum = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
let sum = 0;

// ciclo
for (let i=0; i < listNum.length; i++){
    if(i % 2 != 0){
        sum = sum + listNum[i];
    }
}

console.log(sum);