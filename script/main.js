'use strict'

// INPUTS
// - definizione costante per input numero di km //kmToTravel
const kmToTravel = Number(prompt('Inserisci i km da percorrere'));
console.log(kmToTravel);
// - definizione costante per input età passeggero //userAge
const userAge = Number(prompt('Inserisci l\'età del passeggero'));
console.log(userAge);
// PROGRAM
// - definizione costante di prezzo al km (0.21 € al km) //priceKm
const priceKm = 0.21;
// - definizione costante sconto minorenni (20%) //minorSale 
const saleMinor = 20;
// - definizione costante sconto minorenni (20%) //minorSale 
const saleOver65 = 40;

// - definizione variabile calcolo del prezzo totale (km * priceKm) //totalPrice 
let totalPrice = kmToTravel * priceKm;
console.log(totalPrice);

// - calcolo eventuali sconti in base all'età
//     - 20% per i minorenni
//     - 40% per gli over 65
if (userAge < 18) {
    totalPrice = (totalPrice / 100) * (100 - saleMinor);
}
else if (userAge > 65) {
    totalPrice = (totalPrice / 100) * (100 - saleOver65);
}
console.log(totalPrice);

// OUTPUT
document.getElementById('distance').innerHTML = kmToTravel;
document.getElementById('age').innerHTML = userAge;
document.getElementById('pricekm').innerHTML = priceKm;
document.getElementById('minorsale').innerHTML = saleMinor;
document.getElementById('over65sale').innerHTML = saleOver65;
// - visualizzo il prezzo del biglietto arrotondando a due cifre decimali
document.getElementById('totalprice').innerHTML = Math.round(totalPrice * 100) / 100;
