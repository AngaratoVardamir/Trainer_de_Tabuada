"use strict";
const Main = document.querySelector('main');

// Fazendo as cartas com Js

function CreatingLetters() {
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
}
CreatingLetters()

const Cartas = [...document.querySelectorAll('.Cards')];
const Game = document.getElementById('Game');

// Abrindo Janela e fechando as Cartas
function OpeningWindow_ClosingCards() {
    Game.style.display = 'flex';
    Cartas.map((CartaX) =>{
        CartaX.style.display = 'none';
    })
}


// Mundaça de Pagina
Cartas.map((Card) => {
    Card.addEventListener("click", () =>{
        console.log(Card.classList[1])
        switch (Card.classList[1]) {
            case "Addition":
                OpeningWindow_ClosingCards()
                break;
            case "Subtraction":
                OpeningWindow_ClosingCards()
                break;
            case "Division":
                OpeningWindow_ClosingCards()
                break;
            case "Multiplication":
                OpeningWindow_ClosingCards()
                break;

            default:
                console.log("Pobrema na Carta");
                break;
        }
    })
})