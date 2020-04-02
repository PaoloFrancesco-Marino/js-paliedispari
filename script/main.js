/**
 * Palindroma
 */


// 1 Chiedere all’utente di inserire una parola

var parola = prompt('inserisci una parola');


// 2 Creare una funzione per capire se la parola inserita è palindroma


var invertiParola = reverseParola(parola);


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