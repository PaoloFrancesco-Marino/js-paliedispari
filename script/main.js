/**
 * Palindroma
 */

// 1 Chiedere all’utente di inserire una parola

var parola = prompt('inserisci una parola').toLocaleLowerCase();
console.log(parola);


// 2 Creare una funzione per capire se la parola inserita è palindroma

var invertiParola = reverseParola(parola);
console.log(invertiParola);



if ( parola == invertiParola) {
    console.log('La parola è palindroma');
    
} else {
    console.log('la parola non è palindroma');
    
}


function reverseParola (word) {
    var reverse = '';

    for (var i = word.length -1; i >= 0; i--) {
        reverse += word[i];
    }

    return reverse;
}



/**
 *  Pari e dipari
 */

// 1 L’utente sceglie pari o dispari e un numero da 1 a 5. 

// var scelta = prompt('Pari o Dispari?');

// var numeroUtente = parseInt(prompt('inserici un numero da 1 a 5'));

// // 2 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

//  var numberPC = getRandomNumber(1,5);

//  console.log(numberPC);
 
// function getRandomNumber (min, max) { 
//     var random = Math.floor(Math.random() * (max - min +1) ) + min;
//     return random;
    
// }

// // 3 Sommiamo i due numeri

// var somma = numeroUtente + numberPC;

// console.log(somma);

// // 4 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// function pariDispari (numero) {
//     if (numero % 2 == 0) {
//         return 'pari';
//     }

//     return 'dispari';
// }

// // 5 Dichiariamo chi ha vinto.

// if (pariDispari(somma) == scelta) {
//     console.log('Hai perso');
    
// } else {
//     console.log('Hai vinto');   
// }