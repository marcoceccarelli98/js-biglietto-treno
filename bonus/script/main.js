'use strict';

// INPUTS
// - definizione costante per input pari o dispari //choiceEvenOrOdds
const choiceEvenOrOdds = prompt('Scegli pari o dispari');
// - definizione costante per input numero tra 1 e 9 //myNumber
const myNumber = Number(prompt('Scegli un numero da 1 a 9'));

let cpuChoice = '';
let result = '';

// PROGRAM
// - definizione costante per numero casuale tra 1 e 9 //cpuNumber
const cpuNumber = Math.floor(Math.random() * 9) + 1;
console.log(cpuNumber);

// - calcolo la somma dei due valori
const sum = myNumber + cpuNumber;
console.log(sum);

// - stabilisco la scelta del computer solo per la visualizzazione
if (choiceEvenOrOdds == 'pari') {
    cpuChoice = 'dispari'
} else {
    cpuChoice = 'pari'
}

// - stabilisco il vincitore
if ((choiceEvenOrOdds == 'pari' && sum % 2 === 0) || (choiceEvenOrOdds == 'dispari' && sum % 2 === 1)) {
    result = 'hai vinto!'
} else {
    result = 'hai perso!'
}


// OUTPUT
//ME
document.getElementById('mychoice').innerHTML = choiceEvenOrOdds;
document.getElementById('mynumber').innerHTML = myNumber;

//CPU
document.getElementById('cpuchoice').innerHTML = cpuChoice;
document.getElementById('cpunumber').innerHTML = cpuNumber;

// - visualizzo il vincitore
document.getElementById('result').innerHTML = result;
