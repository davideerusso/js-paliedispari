// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// function isInArray(haystack, needle) {
//   for (let i = haystack.length - 1; i >= 0; i--) {
//     needle += haystack[i];

//     if (needle === haystack) {
//       return true;
//     }
//   }

//   return false;
// }
// const parola = prompt("dimmi una parola");
// console.log(parola);

// let parolapali = [];
// console.log("palindromo", isInArray(parola, parolapali));

//   return parolapali;
// }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function isInArray(numberRandom, somma) {
  somma = numberUser + numberRandom;

  if (somma % 2 === 0) {
    return True;
  }

  return False;
}
// const risultatoDispari = false;
const numberPc = Math.round(Math.random() * 5) + 1;
const pariDispari = prompt("pari o dispari?", "pari");
const numberUser = prompt("Inserisci un numero da 1 a 5", "3");

console.log("numero user", numberUser);
console.log("numero pc", numberPc);

console.log("Sommapari ", isInArray(numberPc, risultatoDispari));

// console.log(parola);

// console.log(isInArray(userOne, userTwo));

// console.log("risultato", isInArray(pari, dispari));
