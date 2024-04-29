'use strict';

// INPUTS
// - definizione costante di prezzo al km (0.21 € al km) //priceKm
const priceKm = 0.21;
// - definizione costante sconto minorenni (20%) //minorSale 
const saleMinor = 20;
// - definizione costante sconto minorenni (20%) //minorSale 
const saleOver65 = 40;

let userAge = 0;
let kmToTravel = 0;
let userName = '';
let totalPrice = 0;

const buttonGenerate = document.getElementById('generate');

buttonGenerate.addEventListener('click', function () {
    const elementAge = document.getElementById('age');
    const elementKm = document.getElementById('km');
    const elementName = document.getElementById('name');

    // - definizione costante per input età passeggero //userAge
    userAge = Number(elementAge.value);

    // - definizione costante per input numero di km //kmToTravel
    kmToTravel = Number(elementKm.value);

    userName = elementName.value;
    console.log(userName);

    console.log(userAge);
    console.log(kmToTravel);

    // - definizione variabile calcolo del prezzo totale (km * priceKm) //totalPrice 
    totalPrice = kmToTravel * priceKm;
    console.log(totalPrice);

    // - calcolo eventuali sconti in base all'età
    //     - 20% per i minorenni
    //     - 40% per gli over 65
    if (userAge < 18) {
        totalPrice = totalPrice - (totalPrice * (saleMinor / 100));
    }
    else if (userAge > 65) {
        totalPrice = (totalPrice / 100) * (100 - saleOver65);
    }
    console.log(totalPrice);
    console.log(Math.round(totalPrice * 100) / 100);

    document.getElementById('totalprice').innerHTML = Math.round(totalPrice * 100) / 100;

    // elementName.innerHTML = userName;
    document.getElementById('name').innerHTML = userName;

    // TICKET VISUALIZATION
    const ticketTitle = document.getElementById('ticket-title');
    const ticket = document.getElementById('ticket');

    ticketTitle.classList.toggle('d-none');
    ticket.classList.toggle('d-none');




}
)


// OUTPUT
document.getElementById('pricekm').innerHTML = priceKm;
document.getElementById('minorsale').innerHTML = saleMinor;
document.getElementById('over65sale').innerHTML = saleOver65;
// - visualizzo il prezzo del biglietto arrotondando a due cifre decimali





