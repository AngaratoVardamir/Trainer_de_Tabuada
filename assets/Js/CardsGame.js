"use strict";

// XP Atual do Jogandor
let level = 1;
var CURRENTXP = 0;
let TotalLevelXp = 1000;
let Percentage = 0;
// Variables
const Main = document.querySelector('main');
const ButtonMenu = document.getElementById('ButtonMenu');
const MoldableWindow = document.getElementById('MoldableWindow');
const Conta = document.getElementById("Account");
const Game = document.getElementById('Game');
const ButtonNumber = [...document.getElementsByClassName("number")];
const XPGainedResult = document.getElementById("XPGained");
//Level sistema
const LogoLevel = document.getElementById('LevelIcon');
const Nowlevel = document.getElementById('Currentlevel');
const Afterlevel = document.getElementById('NextLevel');
const XPPercentage = document.getElementById('XPAll');

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
// Sistema de Niveis para subir de nivel

function TotalLevelSystem() {
    function LevelUp() {
        level++;
        console.log(`Level Up! Nível ${level}`);
        TotalLevelXp = (TotalLevelXp + 1000);
        Percentage = 0;
        CURRENTXP = 0;
        VisionLevel()
    }
    if (CURRENTXP > TotalLevelXp) {
        LevelUp()
    }
}

// Resultado da conta no botão
function ResultadoButton(Res, XPGained) {
    // Criando os resultados Falsos
    ButtonNumber.map((Button) => {
        let ResRandom = Math.floor(Math.random()*(Res+ButtonNumber.length));
        Button.innerHTML = (`${ResRandom+1}`);
    })


    // escolhendo um botão aleatorio para ganhar o resultado verdadeiro
    const ButtonRandom = Math.floor(Math.random()*ButtonNumber.length);

    ButtonNumber[ButtonRandom].innerHTML = (`${Res}`);
    // Calculando Percentagem de XP
    XPPercentage.style.width = (`${Percentage}%`);
    // Abrindo Janela Moldavel
    TotalLevelSystem()
    ButtonNumber.map((Button)=>{
        Button.addEventListener("click", ()=>{
            if (Button.innerHTML== Res) {
                MoldableWindow.style.display = 'flex';
                XPGainedResult.innerHTML = (`${XPGained}xp Ganho`);
                CURRENTXP = (CURRENTXP + XPGained);
                Percentage = ((CURRENTXP/TotalLevelXp)*100);
            }
            else {
                MoldableWindow.style.display = 'flex';
                XPGainedResult.innerHTML = (``);
            }
        })
    })
}
// Criando as contas para o jogandor

function ContaNumber(Simbol, SimbolReal, XPG) {
    function NumeroRandom() {
        return Math.floor(Math.random()*9);
    }

    const Numero1 = NumeroRandom();
    const Numero2 = NumeroRandom();

    const ContaAll = (`${Numero1} ${Simbol} ${Numero2}`);
    const ContaAllReal = (`${Numero1} ${SimbolReal} ${Numero2}`);

    const ResultadoConta = eval(`${ContaAll}`);
    ResultadoButton(ResultadoConta, XPG);
    Conta.innerHTML = (`${ContaAllReal}`);
}

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
        switch (Card.classList[1]) {
            case "Addition":
                OpeningWindow_ClosingCards()
                ContaNumber("+","+", 100)
                break;
            case "Subtraction":
                OpeningWindow_ClosingCards()
                ContaNumber("-","-", 150)
                break;
            case "Division":
                OpeningWindow_ClosingCards()
                ContaNumber("/","÷", 300)
                break;
            case "Multiplication":
                ContaNumber("*","x", 250)
                OpeningWindow_ClosingCards()
                break;

            default:
                console.log("Pobrema na Carta");
                break;
        }
    })
})

// Abrindo Cartas e fechando as Janelas Moldal e Game
function ClosingCards_OpeningWindow() {
    Game.style.display = 'none';
    MoldableWindow.style.display = 'none';
    Cartas.map((CartaX) =>{
        CartaX.style.display = 'flex';
    })
}

ButtonMenu.addEventListener("click",()=>{
    ClosingCards_OpeningWindow()
})

function VisionLevel() {
    // Mostrando o Level do Jogador na tela
    LogoLevel.innerText = (`Lv ${level}`);
    Nowlevel.innerText = (`Lv ${level}`);
    Afterlevel.innerText = (`Lv ${level+1}`);
}
VisionLevel()