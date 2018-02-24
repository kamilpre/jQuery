'use strict';
var tekst = 'jakis tekst';

// tworzenie znaczników
var paragraf = document.createElement('p');

document.getElementById('kontener').appendChild(paragraf);

//paragraf.appendChild(tekst);

paragraf.innerHTML = tekst;

// pobieranie tekstu
console.log(document.getElementById('string').innerText);

var paragraf2= document.createElement('p');

document.body.appendChild(paragraf2);

paragraf2.innerHTML = document.getElementById('string').innerHTML;
