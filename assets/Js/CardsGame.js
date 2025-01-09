"use strict";
//Som
let ativadorSom = 0;
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
let botãoSelector = [];
function ResultadoButton(Res, XPGained) {
    // Criando os resultados Falsos
    ButtonNumber.map((Button) => {
        let ResRandom = Math.floor(Math.random()*(99));
        Button.innerHTML = (`${ResRandom}`);
    })


    // escolhendo um botão aleatorio para ganhar o resultado verdadeiro
    const ButtonRandom = Math.floor(Math.random()*ButtonNumber.length);

    ButtonNumber[ButtonRandom].innerHTML = (`${Res}`);
    // Calculando Percentagem de XP
    XPPercentage.style.width = (`${Percentage}%`);
    // Abrindo Janela Moldavel
    TotalLevelSystem()
    ButtonNumber.map((Button)=>{
        Button.addEventListener("click", (el)=>{
            Sonsclick();
            if (Button.innerHTML== Res) {
                MoldableWindow.style.display = 'flex';
                XPGainedResult.innerHTML = (`${XPGained}xp Ganho`);
                CURRENTXP = (CURRENTXP + XPGained);
                Percentage = ((CURRENTXP/TotalLevelXp)*100);
                botãoSelector[0].style.display = 'flex';
            }
            else {
                MoldableWindow.style.display = 'flex';
                XPGainedResult.innerHTML = (`Você Errou!`);
            }
        })
    })
}
// Criando as contas para o jogandor

function ContaNumber(Simbol, SimbolReal, XPG) {
    function NumeroRandom() {
        // Sistema de dificuldade aumentado
        let digitosTotais = 9;
        if (level == 50) {
            digitosTotais = 99;
        }
        return Math.floor(Math.random()*digitosTotais);
    }

    const Numero1 = NumeroRandom();
    const Numero2 = NumeroRandom();

    const ContaAll = (`${Numero1} ${Simbol} ${Numero2}`);
    const ContaAllReal = (`${Numero1} ${SimbolReal} ${Numero2}`);

    const ResultadoConta = eval(`${ContaAll}`);
    ResultadoButton(parseFloat(ResultadoConta).toFixed(0), XPG);
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
        // som de clique
        Sonsclick();
        // Ativado som de Fundo
        ativadorSom++;
        if (ativadorSom == 1) {
            SonsBackground();
        }
        // Manipulação das cartas de escolha
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
// Vendo se o Botão Menu foi aberto nas skills
let SkillsMenu = false;

ButtonMenu.addEventListener("click",()=>{
    ClosingCards_OpeningWindow()
    Sonsclick();
    ButtonNumber.map((e)=>{
        e.style.display = 'flex';
    })
    if (SkillsMenu == true) {
        SkillsClose()
        SkillsMenu = false;
    }
})

function VisionLevel() {
    // Mostrando o Level do Jogador na tela
    LogoLevel.innerText = (`Lv ${level}`);
    Nowlevel.innerText = (`Lv ${level}`);
    Afterlevel.innerText = (`Lv ${level+1}`);
}
VisionLevel()

// Sons
const Som = new Audio();
const SomBack = new Audio();
function Sonsclick() {
    Som.src = ('../../assets/Audio/clicksoundeffect.mp3');
    Som.play();
}
function SonsBackground() {
    SomBack.src = ('../../assets/Audio/background.mp3');
    SomBack.loop = true;
    SomBack.play();
    SomBack.volume = .4;
}
// Skills Icones
const JanelaSkills = document.getElementById("WindowXP");
const Locked = [...document.getElementsByClassName("Locked")];
const SkillsWindow = document.getElementById("Skills");
function SkillsOpen() {
    MoldableWindow.style.display = 'flex';
    JanelaSkills.style.height = "350px";
    XPGainedResult.innerHTML = "Skills";
    SkillsWindow.style.display = "flex";
    XPGainedResult.style.fontSize = "2em";

    // Botão Menu das Skills
    SkillsMenu = true;
}
function SkillsClose() {
    MoldableWindow.style.display = 'none';
    JanelaSkills.style.height = "210px";
    XPGainedResult.innerHTML = "";
    SkillsWindow.style.display = "none";
    XPGainedResult.style.fontSize = "1.5em";
}
// Ligandor de Habilidades
function AddSkill(idnum, icon) {
    Locked[idnum].classList.add("skill");
    Locked[idnum].classList.remove("Locked");
    const skillicons = [...document.getElementsByClassName("skill")];
    skillicons[idnum].innerHTML = (icon);
}
// Habilidades Ativas
function SkillsActive() {
    if (level >= 10){
        AddSkill(0, (`<i class="fa-solid fa-dice-d20"></i>`))
    }
    if (level >= 50){
        AddSkill(1, (`<i class="fa-solid fa-eye"></i>`))
    } 
    if (level >= 90){
        AddSkill(2, (`<i class="fa-solid fa-4"></i>`))
    }
}
LogoLevel.addEventListener("click",()=>{
    Sonsclick()
    SkillsOpen();
    SkillsActive()
})