'use strict'

// INPUTS
// - definizione costante per input numero di km //kmToTravel
// const kmToTravel = prompt('Inserisci i km da percorrere');
// - definizione costante per input età passeggero //userAge
// const userAge = prompt('Inserisci l\'età del passeggero');

// PROGRAM
// - definizione costante di prezzo al km (0.21 € al km) //priceKm
const priceKm = 0.21;
// - definizione variabile calcolo del prezzo totale (km * priceKm) //totalPrice 
let totalPrice = kmToTravel * priceKm;

// - calcolo eventuali sconti in base all'età
//     - 20% per i minorenni
//     - 40% per gli over 65

// OUTPUT
// - visualizzo il prezzo del biglietto arrotondando a due cifre decimali