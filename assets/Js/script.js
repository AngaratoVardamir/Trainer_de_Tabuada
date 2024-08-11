const Random_Numbers = document.getElementById('Random_Numbers');
const response_student = document.getElementById('Res');
const confirmButton = document.getElementById('confirm');
const Acertos = document.getElementById('Acertos');
const FalasBalão = document.getElementById('Balão');
var Resposta = 0;
let Numero_um;
let Numero_dois;
let Pontos = 0;

function Falas(){
    switch(Pontos){
        case 0:
            FalasBalão.innerHTML = ("Como você errou aquilo? Será que você não entendeu?");
            break;
        case 1:
            FalasBalão.innerHTML = ("Essa é fácil, até você consegue!");
            break;
        case 2:
            FalasBalão.innerHTML = ("Isso parece fácil, né? Espera só até ver a próxima, hahaha...");
            break;
        case 3:
            FalasBalão.innerHTML = ("Você está pensando muito devagar, vamos logo e faça!");
            break;
        case 4:
            FalasBalão.innerHTML = ("Quatro pontos, hein? Nada mal, mas ainda faltam 96 para você realmente ser o melhor!");
            break;
        case 10:
            FalasBalão.innerHTML = ("Sente saudades? Acho que não. Então corre mais, porque ainda faltam 90, seu burro!");
            break;
        case 20:
            FalasBalão.innerHTML = ("Olha só você todo feliz com 20 pontos! Isso não é nada, essas perguntas são para crianças, e você quebrou a cabeça para chegar até aqui. Faltam 80, então corre, animal!");
            break;
        case 30:
            FalasBalão.innerHTML = ("Trinta pontos, parabéns... só que não! Você ainda não está nem na metade. Você é uma lesma!");
            break;
        case 40:
            FalasBalão.innerHTML = ("Quarenta pontos, parabéns! Finalmente, você deixou de ser um animal e se tornou um inseto... O que foi? Não gosta de inseto? Então vai ser vírus! Agora corre, vírus!");
            break;
        case 50:
            FalasBalão.innerHTML = ("Parabéns, vírus! Como recompensa por chegar a 50 pontos, vou revelar meu nome... Mas não, você ainda é um lixo para mim! Chegue a 80 e talvez eu diga.");
            break;
        case 60:
            FalasBalão.innerHTML = ("Sessenta pontos, vírus! Você sabe qual é o animal mais lento do mundo? Não? Pois é, é você!");
            break;
        case 70:
            FalasBalão.innerHTML = ("Está com sono? Quer dormir? Pois não vai! Sua matemática precisa passar de lixo para novato, no mínimo!");
            break;
        case 80:
            FalasBalão.innerHTML = ("Noventa pontos! Não posso mais chamar você de vírus. Agora, você é um humano! Então, humano, prazer em te conhecer. Meu nome é Bipe!");
            break;
        case 90:
            FalasBalão.innerHTML = ("Vai, humano! Você está quase lá! Faltam só 10 pontos. Você é meu herói, e Bipe vai te beijar! Ah, mas eu não posso, hihihi!");
            break;
        case 100:
            FalasBalão.innerHTML = ("Cem pontos, humano! Agora você é um super-homem! Pode fazer tudo, moldar tudo à sua vontade. Você é um deus! Acho que eu diria algo assim... Mas não se exiba, isso foi só o nível 1. Agora vou te matar de pensar, hahahaha!");
            break;
        default:
            FalasBalão.innerHTML = ("Vai, Vai, tá Muito Lento!!!");
            break;
    }
}

function Random(){
    return Math.floor(Math.random()*10);
}
function Calculations() {
    Numero_um = (Random());
    Numero_dois = (Random());
    Random_Numbers.innerHTML = (`${Numero_um}x${Numero_dois}`);
    Random_Numbers.ariaLabel = (`${Numero_um}*${Numero_dois}`);
    Resposta =  eval(Random_Numbers.ariaLabel);
}
function confirm_Calculations() {
    if (Resposta == response_student.value){
        alert('Resposta correta!');
        Calculations()
        Pontos += 1;
    }
    else{
        Pontos = Pontos - Pontos;
        alert('Resposta errada!');
    }
    Acertos.innerHTML = Pontos;
    Falas()
}

let isTouchEvent = false;

// Função que será chamada ao clicar ou tocar no elemento
function handleClick(event) {
    // Se o evento foi acionado por um toque, marcar a variável
    if (event.type === 'touchstart') {
        isTouchEvent = true;
    }

    // Se o evento foi acionado por um clique após um toque, não fazer nada
    if (event.type === 'click' && isTouchEvent) {
        return;
    }

    //Função
    confirm_Calculations()
    // Resetar a variável após um curto período
    setTimeout(() => {
        isTouchEvent = false;
    }, 300);
}

// Adiciona o evento de toque para dispositivos móveis
confirmButton.addEventListener('touchstart', handleClick);

// Adiciona o evento de clique para desktop
confirmButton.addEventListener('click', handleClick);