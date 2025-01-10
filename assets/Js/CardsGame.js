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
    // Define as classes das cartas
    const ClassCards = ["Addition", "Subtraction", "Division", "Multiplication"];
    // Define os ícones correspondentes às classes
    const ClassIcones = ["fa-solid fa-plus", "fa-solid fa-minus", "fa-solid fa-divide", "fa-solid fa-xmark"];

    // Obtém a quantidade de cartas (baseada no comprimento do array ClassCards)
    const AmountCards = ClassCards.length;

    // Loop para criar cada carta
    for (let index = 0; index < AmountCards; index++) {
        // Criando a estrutura principal da carta
        const NewCard = document.createElement("div");
        NewCard.setAttribute("class", `Cards ${ClassCards[index]}`);

        // Criando o lado da frente da carta
        const NewFront = document.createElement("div");
        NewFront.setAttribute("class", "front");
        NewCard.appendChild(NewFront);

        // Criando o lado de trás da carta
        const NewBack = document.createElement("div");
        NewBack.setAttribute("class", "Back");
        NewCard.appendChild(NewBack);

        // Criando o ícone para a frente da carta
        const NewIcon = document.createElement("i");
        NewIcon.setAttribute("class", `${ClassIcones[index]}`);
        NewFront.appendChild(NewIcon);

        // Adicionando a carta criada ao elemento principal (assumindo que 'Main' está definido)
        Main.appendChild(NewCard);
    }
}
CreatingLetters()
const Cartas = [...document.querySelectorAll('.Cards')];

// Sistema de Níveis para subir de nível
function TotalLevelSystem() {

    // Função responsável por realizar a operação de subir de nível
    function LevelUp() {
        level++; // Incrementa o nível atual
        console.log(`Level Up! Nível ${level}`); // Exibe mensagem de progresso no console

        TotalLevelXp += 1000; // Aumenta o total de experiência necessária para o próximo nível
        Percentage = 0; // Reseta a porcentagem de progresso no nível atual
        CURRENTXP = 0; // Reseta a experiência atual do jogador

        VisionLevel(); // Atualiza a visão do nível (assumindo que a função já está definida em outro lugar)
    }

    // Verifica se a experiência atual é maior que a necessária para subir de nível
    if (CURRENTXP > TotalLevelXp) {
        LevelUp(); // Chama a função para subir de nível
    }
}


// Resultado da conta no botão
let botãoSelector = [];
function ResultadoButton(Res, XPGained) {
    // Gerando resultados falsos para todos os botões
    ButtonNumber.map((Button) => {
        let ResRandom = Math.floor(Math.random() * 99); // Gera um número aleatório entre 0 e 98
        Button.innerHTML = `${ResRandom}`; // Atribui o número aleatório ao botão
    });

    // Escolhendo um botão aleatório para conter o resultado correto
    const ButtonRandom = Math.floor(Math.random() * ButtonNumber.length);
    ButtonNumber[ButtonRandom].innerHTML = `${Res}`; // Define o resultado verdadeiro no botão selecionado

    // Atualizando a barra de progresso de XP
    XPPercentage.style.width = `${Percentage}%`;

    // Chamando o sistema de níveis
    TotalLevelSystem();

    // Adicionando eventos de clique a cada botão
    ButtonNumber.map((Button) => {
        Button.addEventListener("click", (el) => {
            Sonsclick(); // Toca o som de clique (assumindo que a função está definida)

            if (Button.innerHTML == Res) { // Verifica se o botão clicado tem o resultado correto
                MoldableWindow.style.display = 'flex'; // Mostra a janela moldável
                XPGainedResult.innerHTML = `${XPGained}xp Ganho`; // Exibe a quantidade de XP ganho

                // Atualizando os valores de XP e porcentagem
                CURRENTXP += XPGained; 
                Percentage = (CURRENTXP / TotalLevelXp) * 100;

                // Exibe o botão seletor (assumindo que botãoSelector é um array)
                botãoSelector[0].style.display = 'flex';
            } else {
                // Caso o jogador erre, mostra a mensagem de erro
                MoldableWindow.style.display = 'flex';
                XPGainedResult.innerHTML = `Você Errou!`;
            }
        });
    });
}

// Criando as contas para o jogandor
function ContaNumber(Simbol, SimbolReal, XPG) {
    // Função para gerar números aleatórios com base no nível do jogador
    function NumeroRandom() {
        let digitosTotais = 9; // Valor padrão para números aleatórios entre 0 e 9

        // Aumenta a dificuldade ao atingir o nível 50
        if (level === 50) {
            digitosTotais = 99; // Números aleatórios entre 0 e 99
        }

        return Math.floor(Math.random() * digitosTotais); // Retorna um número aleatório dentro do intervalo
    }

    // Gerando dois números aleatórios
    const Numero1 = NumeroRandom();
    const Numero2 = NumeroRandom();

    // Montando a conta para exibição (ex.: "5 + 3")
    const ContaAll = `${Numero1} ${Simbol} ${Numero2}`;

    // Montando a conta real com o símbolo correto (ex.: "5 + 3")
    const ContaAllReal = `${Numero1} ${SimbolReal} ${Numero2}`;

    // Calculando o resultado da conta
    const ResultadoConta = eval(`${ContaAll}`);

    // Chamando a função ResultadoButton com o resultado arredondado e a XP ganha
    ResultadoButton(parseFloat(ResultadoConta).toFixed(0), XPG);

    // Exibindo a conta no elemento Conta
    Conta.innerHTML = `${ContaAllReal}`;
}

// Função para abrir a janela do jogo e ocultar as cartas
function OpeningWindow_ClosingCards() {
    // Exibe a janela do jogo
    Game.style.display = 'flex';

    // Oculta todas as cartas
    Cartas.map((CartaX) => {
        CartaX.style.display = 'none';
    });
}



// Mudança de Página ao clicar em uma carta
Cartas.map((Card) => {
    Card.addEventListener("click", () => {
        // Toca o som de clique
        Sonsclick();

        // Ativa o som de fundo, garantindo que seja tocado apenas uma vez
        ativadorSom++;
        if (ativadorSom === 1) {
            SonsBackground(); // Chama a função para reproduzir o som de fundo
        }

        // Manipulação das cartas com base na escolha do jogador
        switch (Card.classList[1]) {
            case "Addition":
                OpeningWindow_ClosingCards(); // Abre a janela e fecha as cartas
                ContaNumber("+", "+", 100); // Configura a conta de adição com XP 100
                break;

            case "Subtraction":
                OpeningWindow_ClosingCards(); // Abre a janela e fecha as cartas
                ContaNumber("-", "-", 150); // Configura a conta de subtração com XP 150
                break;

            case "Division":
                OpeningWindow_ClosingCards(); // Abre a janela e fecha as cartas
                ContaNumber("/", "÷", 300); // Configura a conta de divisão com XP 300
                break;

            case "Multiplication":
                OpeningWindow_ClosingCards(); // Abre a janela e fecha as cartas
                ContaNumber("*", "x", 250); // Configura a conta de multiplicação com XP 250
                break;

            default:
                console.log("Problema na Carta"); // Mensagem de erro no console para casos não previstos
                break;
        }
    });
});

// Função para abrir as cartas e fechar as janelas modais e do jogo
function ClosingCards_OpeningWindow() {
    // Fecha a janela do jogo
    Game.style.display = 'none';

    // Fecha a janela modal (MoldableWindow)
    MoldableWindow.style.display = 'none';

    // Torna todas as cartas visíveis novamente
    Cartas.map((CartaX) => {
        CartaX.style.display = 'flex';
    });
}

// Verifica se o botão do menu foi aberto nas skills
let SkillsMenu = false;

// Adiciona evento de clique ao botão do menu
ButtonMenu.addEventListener("click", () => {
    // Fecha as cartas e janelas modais, e abre a janela principal
    ClosingCards_OpeningWindow();

    // Toca o som de clique
    Sonsclick();

    // Torna visíveis todos os botões em ButtonNumber
    ButtonNumber.map((e) => {
        e.style.display = 'flex';
    });

    // Verifica se o menu de skills está aberto
    if (SkillsMenu === true) {
        SkillsClose(); // Fecha o menu de skills
        SkillsMenu = false; // Atualiza o estado para indicar que o menu está fechado
    }
});


// Atualiza a exibição dos níveis do jogador na tela
function VisionLevel() {
    // Mostra o nível atual do jogador no elemento LogoLevel
    LogoLevel.innerText = `Lv ${level}`;

    // Mostra o nível atual no elemento Nowlevel
    Nowlevel.innerText = `Lv ${level}`;

    // Mostra o próximo nível (nível atual + 1) no elemento Afterlevel
    Afterlevel.innerText = `Lv ${level + 1}`;
}

VisionLevel()

// Declaração das variáveis para os sons
const Som = new Audio(); // Som do clique
const SomBack = new Audio(); // Som de fundo (ainda não utilizado na função)


// Função para tocar o som de clique
function Sonsclick() {
    // Define o caminho do arquivo de áudio para o som de clique
    Som.src = '../../assets/Audio/clicksoundeffect.mp3';
    
    // Reproduz o som de clique
    Som.play();
}

// Função para tocar o som de fundo
function SonsBackground() {
    // Define o caminho do arquivo de áudio para o som de fundo
    SomBack.src = '../../assets/Audio/background.mp3';
    
    // Define o som de fundo para ser repetido em loop
    SomBack.loop = true;

    // Reproduz o som de fundo
    SomBack.play();

    // Ajusta o volume do som de fundo para 40%
    SomBack.volume = 0.4;
}

// Elementos da interface relacionados às habilidades (Skills)
const JanelaSkills = document.getElementById("WindowXP"); // Janela de habilidades
const Locked = [...document.getElementsByClassName("Locked")]; // Elementos de habilidades bloqueadas
const SkillsWindow = document.getElementById("Skills"); // Janela de exibição das habilidades

// Função para abrir a janela de habilidades
function SkillsOpen() {
    // Exibe a janela modal (MoldableWindow)
    MoldableWindow.style.display = 'flex';

    // Ajusta a altura da janela de habilidades
    JanelaSkills.style.height = "350px";

    // Exibe a mensagem "Skills" no resultado de XP ganho
    XPGainedResult.innerHTML = "Skills";

    // Torna a janela de habilidades visível
    SkillsWindow.style.display = "flex";

    // Aumenta o tamanho da fonte do resultado de XP ganho
    XPGainedResult.style.fontSize = "2em";

    // Ativa o menu de habilidades
    SkillsMenu = true;
}

// Função para fechar a janela de habilidades
function SkillsClose() {
    // Oculta a janela modal (MoldableWindow)
    MoldableWindow.style.display = 'none';

    // Restaura a altura original da janela de habilidades
    JanelaSkills.style.height = "210px";

    // Limpa o conteúdo exibido no resultado de XP ganho
    XPGainedResult.innerHTML = "";

    // Oculta a janela de habilidades
    SkillsWindow.style.display = "none";

    // Restaura o tamanho da fonte do resultado de XP ganho
    XPGainedResult.style.fontSize = "1.5em";
}

// Função para ativar uma habilidade (desbloquear e adicionar ícones)
function AddSkill(idnum, icon) {
    // Adiciona a classe "skill" ao elemento da habilidade, indicando que foi desbloqueada
    Locked[idnum].classList.add("skill");

    // Remove a classe "Locked" do elemento, indicando que a habilidade não está mais bloqueada
    Locked[idnum].classList.remove("Locked");

    // Cria um array com todos os elementos de habilidades desbloqueadas (com a classe "skill")
    const skillicons = [...document.getElementsByClassName("skill")];

    // Substitui o conteúdo do elemento com a classe "skill" pelo ícone da habilidade
    skillicons[idnum].innerHTML = icon;
}

// Função para ativar habilidades com base no nível do jogador
function SkillsActive() {
    // Se o nível do jogador for 10 ou superior, desbloqueia a primeira habilidade
    if (level >= 10) {
        // Adiciona a habilidade com o ícone correspondente (d20)
        AddSkill(0, `<i class="fa-solid fa-dice-d20"></i>`);
    }

    // Se o nível do jogador for 50 ou superior, desbloqueia a segunda habilidade
    if (level >= 50) {
        // Adiciona a habilidade com o ícone correspondente (olho)
        AddSkill(1, `<i class="fa-solid fa-eye"></i>`);
    }

    // Se o nível do jogador for 90 ou superior, desbloqueia a terceira habilidade
    if (level >= 90) {
        // Adiciona a habilidade com o ícone correspondente (número 4)
        AddSkill(2, `<i class="fa-solid fa-4"></i>`);
    }
}

// Evento de clique no logo do nível do jogador
LogoLevel.addEventListener("click", () => {
    // Toca o som de clique quando o logo é clicado
    Sonsclick();

    // Abre a janela de habilidades
    SkillsOpen();

    // Ativa as habilidades do jogador com base no nível atual
    SkillsActive();
});