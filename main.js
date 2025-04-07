const dadoone = Math.round(Math.random() * 5) + 1;
const dadotwo = Math.round(Math.random() * 5) + 1;

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isInArray(haystack, needle) {
  for (let i = haystack.length - 1; i >= 0; i--) {
    needle += haystack[i];

    if (needle === haystack) {
      return true;
    }
  }

  return false;
}
const parola = prompt("dimmi una parola");
console.log(parola);

let parolapali = [];
console.log("palindromo", isInArray(parola, parolapali));

//   return parolapali;
// }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
