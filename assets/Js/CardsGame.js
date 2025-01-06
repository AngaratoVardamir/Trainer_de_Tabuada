"use strict";
const Main = document.querySelector('main');
const Cartas = document.querySelectorAll('.Cards');

// Fazendo as cartas com Js

const ClassCards = [ "Addition", "Subtraction", "Division", "Multiplication" ]; //Classe das Cartas
const ClassIcones = ["fa-solid fa-plus", "fa-solid fa-minus", "fa-solid fa-divide", "fa-solid fa-xmark"];

const AmountCards = ClassCards.length; //Quantidade de Cartas =  4

for (let index = 0; index < AmountCards; index++) {
    // Criando a Carta
    const NewCard = document.createElement("div");
    NewCard.setAttribute("class", `Cards ${ClassCards[index]}`);
    // Criando frente da Carta
    const NewFront = document.createElement("div");
    NewFront.setAttribute("class", "front");
    NewCard.appendChild(NewFront);
    // Criando Verso da Carta
    const NewBack = document.createElement("div");
    NewBack.setAttribute("class", "Back");
    NewCard.appendChild(NewBack);

    // Criando Icones da Carta
    const NewIcon = document.createElement("i");
    NewIcon.setAttribute("class", `${ClassIcones[index]}`);
    NewFront.appendChild(NewIcon);
    // Colocando a Carta no Corpo
    Main.appendChild(NewCard);
}