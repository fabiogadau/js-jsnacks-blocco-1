console.log('Js ok');
/*
* Snack 1
L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.
*/
// Dichiaro le variabili
var firstWord = prompt('Inserisci la prima parola').trim();
console.log('Come prima parola hai scelto: ' + firstWord);

var secondWord = prompt('Inserisci la seconda parola').trim();
console.log('Come seconda parola hai scelto: ' + secondWord);

// Invoco la funzione
var longerWord = wordsRuler(firstWord, secondWord);
console.log(longerWord);

// Definisco la funzione
function wordsRuler (word1, word2) {
  result = '';

  if (word1 > word2) {
    result = 'La parola più lunga tra quelle che hai scelto è: ' + word1;
  }
  else if (word2 > word1) {
    result = 'La parola più lunga tra quelle che hai scelto è: ' + word2;
  }
  else {
    result = 'Le due parole da te scelte hanno lunghezza uguale';
  }

  return result;
};

/*
* Snack 2
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

/*
* Snack 3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.
*/

/*
* Snack 4
Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione.
*/
