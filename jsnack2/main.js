"use:script";

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Inserire parola");
const word2 = prompt("Inserire parola");

if(word1.length > word2.length){
    console.log(word1, word2);
}
else{
    console.log(word2, word1);
}
