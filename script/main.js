console.log('Js ok');
/*
* Snack 1
L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.
*/

/*
// Dichiaro le variabili
var firstWord = prompt('Inserisci la prima parola').trim();
console.log('Come prima parola hai scelto: ' + firstWord);

var secondWord = prompt('Inserisci la seconda parola').trim();
console.log('Come seconda parola hai scelto: ' + secondWord);
*/

/*
// Soluzione senza function
if (firstWord.length > secondWord.length) {
  console.log('La parola più lunga tra quelle che hai scelto è: ' + firstWord);
}
else if (secondWord.length > firstWord.length) {
  console.log('La parola più lunga tra quelle che hai scelto è: ' + secondWord);
}
else {
  console.log('Le due parole da te scelte hanno lunghezza uguale');
}
/*

/*
// Soluzione con function
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
*/



/*
* Snack 2
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

/*
// Dichiaro le variabili
var userNumber = parseInt(prompt('Inserisci un numero'));
while (isNaN(userNumber)) {
  userNumber = parseInt(prompt('Inserisci un numero'));
}
console.log('Hai scelto il numero: ' + userNumber);
*/

/*
// Soluzione senza function
if (userNumber % 2 == 0) {
  console.log(userNumber + ' è pari');
}
else {
  console.log(userNumber + ' è dispari e stampo il numero successivo: ' + ++userNumber);
}
*/

/*
// Soluzione con function
// Invoco la funzione
var number = evenOdd(userNumber);
console.log(number);

// Definisco la funzione
function evenOdd (num) {
  result = '';

  if (num % 2 == 0) {
    result = num + ' è pari';
  }
  else {
    result = num + ' è dispari e stampo il numero successivo: ' + ++num;
  }

  return result;
};
*/



/*
* Snack 3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.
*/

/*
// Dichiaro le variabili
var names = ['Michele', 'Fabio', 'Roberto', 'Pippo', 'Omar', 'Katherine'];
var surnames = ['Forghieri', 'Papagni', 'Marazzini', 'INPS', 'Giugiangiugia', 'J. Junior'];
var list = [];
console.log(list);


// Creo nomi e cognomi col ciclo for
for (var i = 0; i < 5; i++) {
  var randomName = names[Math.floor(Math.random() * names.length)]
  var randomSurname = surnames[Math.floor(Math.random() * surnames.length)]

  var fullName = randomName + ' ' + randomSurname;

  list.push(fullName);
};

console.log(list);
*/



/*
* Snack 4
Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione.
*/
