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

const elementNameInput = document.getElementById('name-input');
const elementAge = document.getElementById('age');
const elementKm = document.getElementById('km');
const buttonGenerate = document.getElementById('generate');
const buttonAbort = document.getElementById('abort');

// ----------------
// BUTTON GENERATE
// ----------------
buttonGenerate.addEventListener('click', function () {
    // const elementNameInput = document.getElementById('name-input');
    // const elementAge = document.getElementById('age');
    // const elementKm = document.getElementById('km');
    let ticketType = 'Biglietto Standard';
    const cpCode = Math.floor(Math.random() * 99999);

    // - definizione costante per input età passeggero //userAge
    userAge = Number(elementAge.value);

    // - definizione costante per input numero di km //kmToTravel
    kmToTravel = Number(elementKm.value);

    userName = elementNameInput.value;
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
        ticketType = 'Sconto Minori';
    }
    else if (userAge > 65) {
        totalPrice = (totalPrice / 100) * (100 - saleOver65);
        ticketType = 'Sconto Over 65';
    }
    console.log(totalPrice);
    console.log(Math.round(totalPrice * 100) / 100);

    document.getElementById('totalprice').innerHTML = Math.round(totalPrice * 100) / 100;

    // elementName.innerHTML = userName;

    // TICKET VISUALIZATION
    const ticketTitle = document.getElementById('ticket-title');
    const ticket = document.getElementById('ticket');

    ticketTitle.classList.remove('d-none');
    ticket.classList.remove('d-none');


    document.getElementById('name').innerHTML = userName;
    document.getElementById('offer').innerHTML = ticketType;
    document.getElementById('cp').innerHTML = cpCode;
    document.getElementById('totalprice').innerHTML = totalPrice;
});

// ----------------
// BUTTON ABORT
// ----------------
buttonAbort.addEventListener('click', function () {
    elementNameInput.value = '';
    elementKm.value = '';
    elementAge.value = '';
});

// OUTPUT
document.getElementById('pricekm').innerHTML = priceKm;
document.getElementById('minorsale').innerHTML = saleMinor;
document.getElementById('over65sale').innerHTML = saleOver65;
