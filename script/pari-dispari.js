/**
 *  Pari e dipari
 */

// 1 L’utente sceglie pari o dispari e un numero da 1 a 5. 

var scelta = prompt('Pari o Dispari?');

var numeroUtente = parseInt(prompt('inserici un numero da 1 a 5'));

// 2 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

 var numberPC = getRandomNumber(1,5);

 console.log(numberPC);
 
function getRandomNumber (min, max) { 
    var random = Math.floor(Math.random() * (max - min +1) ) + min;
    return random;
    
}

// 3 Sommiamo i due numeri

var somma = numeroUtente + numberPC;

console.log(somma);

// 4 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariDispari (numero) {
    if (numero % 2 == 0) {
        return 'pari';
    }

    return 'dispari';
}

// 5 Dichiariamo chi ha vinto.

if (pariDispari(somma) == scelta) {
    console.log('Hai perso');
    
} else {
    console.log('Hai vinto');   
}
