/*

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

*/

/*

1 - Creo un for dove genero i numero da 1 a 100
2 - Faccio il primo controllo per i numeri divisibili sia per 3 che per 5
3 - Controllo solo i numeri divisibili per 3
4 - Controllo solo i numeri divisibili per 5
5 - Se non è divisibile per nessuno dei punti sopra elencati lo stampo normalmente

*/

// *Variabili

// *Ciclo for che genera 100 numeri
for (i = 1; i < 101; i++) {

    // *Uso .createElement per generare una p per ogni valore di i
    var display = document.createElement('h2');
    document.getElementById("numbers").appendChild(display);

    // *Se è divisibili sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {
        display.textContent = "FizzBuzz";
    }

    // *Se è divisibile solo per 3
    else if (i % 3 == 0) {
        display.textContent = "Fizz";
    }

    // *Se è divisibile solo per 5
    else if (i % 5 == 0) {
        display.textContent = "Buzz";
    }

    // *Se non rispetta le regole sopra elencate, allora stampa il numero direttamente
    else {
        display.textContent = i;
    }
}