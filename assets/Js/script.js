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
            FalasBalão.innerHTML = ("Uou, deu ruim! E adivinha só? Você voltou para o nível 0. Zero, como suas chances de me vencer se continuar assim! Que tal começar de novo e tentar não ser um fracasso épico desta vez? Ou será que você gosta de viver esse ciclo infinito de humilhação? Vamos lá, campeão, você pode tentar... de novo!");
            break;
        case 1:
            FalasBalão.innerHTML = ("Ah, o início! Espero que sua matemática seja melhor do que a minha pontaria... que é perfeita, aliás.");
            break;
        case 2:
            FalasBalão.innerHTML = ("Dois mais dois... quatro! Ah, essas são as mais fáceis. Vamos ver até onde sua sorte vai.");
            break;
        case 3:
            FalasBalão.innerHTML = ("Três é o número mágico, mas pra você, pode ser o número do azar! Vamos lá, herói da matemática!");
            break;
        case 4:
            FalasBalão.innerHTML = ("Quatro. Um número simples, mas as chances de você errar são... bem, quase certas!");
            break;
        case 5:
            FalasBalão.innerHTML = ("Cinco! Meia década de nível! Mas isso não significa que você está mais perto da vitória.");
            break;
        case 6:
            FalasBalão.innerHTML = ("Seis é meia dúzia de problemas pra você! Vamos ver se você consegue passar");
            break;
        case 7:
            FalasBalão.innerHTML = ("Sete é o número da sorte, mas não pra você! Prepare-se para mais um desafio.");
            break;
        case 8:
            FalasBalão.innerHTML = ("Oito é o símbolo do infinito... ou é o número de vezes que você vai errar antes de acertar?");
            break;
        case 9:
            FalasBalão.innerHTML = ("Nove! Quase lá, mas ainda falta muito pra chegar no fim. Vamos, gênio dos números!");
            break;
        case 10:
            FalasBalão.innerHTML = ("Dez! Dedo-duro, mas no caso, você é o perdedor... Brincadeira! Ou será que não?");
            break;
        case 11:
            FalasBalão.innerHTML = ("Onze. Um mais um... ainda fácil demais! Mas o que vem depois? Spoiler: seu cérebro vai fritar.");
            break;
        case 12:
            FalasBalão.innerHTML = ("Doze... um número tão comum, mas pra você, pode ser a porta de entrada para o inferno matemático!");
            break;
        case 13:
            FalasBalão.innerHTML = ("Treze! Azar pra você e sorte pra mim. Vamos ver se você quebra essa maldição!");
            break;
        case 14:
            FalasBalão.innerHTML = ("Quatorze... o que você tem pra me dizer? Ah, nada! Continue tentando!");
            break;
        case 15:
            FalasBalão.innerHTML = ("Quinze. Só mais 85 níveis para você se sentir um completo inútil.");
            break;
        case 16:
            FalasBalão.innerHTML = ("Dezesseis! Um quadrado perfeito. Só que eu vou te deixar todo torto!");
            break;
        case 17:
            FalasBalão.innerHTML = ("Dezessete! Número primo, raro, assim como suas chances de passar dessa.");
            break;
        case 18:
            FalasBalão.innerHTML = ("Dezoito... Ah, a maioridade! Mas será que você está pronto pra encarar isso como um adulto?");
            break;
        case 19:
            FalasBalão.innerHTML = ("Dezenove! Tá quase no 20, mas não se empolgue. É aí que a diversão realmente começa.");
            break;
        case 20:
            FalasBalão.innerHTML = ("Vinte! Duas décadas de sofrimento! Vamos continuar, a diversão não pode parar!");
            break;
        case 21:
            FalasBalão.innerHTML = ("Vinte e um! Black Jack! Mas hoje quem vai ganhar sou eu.");
            break;
        case 22:
            FalasBalão.innerHTML = ("Vinte e dois. Um par de patos? Eu diria que é mais um par de fracassos.");
            break;
        case 23:
            FalasBalão.innerHTML = ("Vinte e três! Parece Jordan... mas você tá mais pra jogador de botão.");
            break;
        case 24:
            FalasBalão.innerHTML = ("Vinte e quatro. Você acha que tá no controle, mas eu tô só esquentando!");
            break;
        case 25:
            FalasBalão.innerHTML = ("Vinte e cinco! Um quarto de caminho... mas ainda tem muito chão pela frente!");
            break;
        case 26:
            FalasBalão.innerHTML = ("Vinte e seis! Já pensou em desistir? Eu não ia te culpar...");
            break;
        case 27:
            FalasBalão.innerHTML = ("Vinte e sete. Mais um número primo pra te deixar doido.");
            break;
        case 28:
            FalasBalão.innerHTML = ("Vinte e oito! Ah, a curva de dificuldade está só subindo. Aproveite o passeio!");
            break;
        case 29:
            FalasBalão.innerHTML = ("Vinte e nove! Quando você achar que está difícil, eu ainda vou te surpreender.");
            break;
        case 30:
            FalasBalão.innerHTML = ("Trinta! Bem-vindo à crise dos 30... mas a sua crise vai ser com a matemática.");
            break;
        case 31:
            FalasBalão.innerHTML = ("Trinta e um! Uma bela sequência de desastres matemáticos... continue!");
            break;
        case 32:
            FalasBalão.innerHTML = ("Trinta e dois. O dobro de dezesseis... e o dobro de desafios!");
            break;
        case 33:
            FalasBalão.innerHTML = ("Trinta e três! Isso é apenas um teste de paciência... sua paciência.");
            break;
        case 34:
            FalasBalão.innerHTML = ("Trinta e quatro. Prepare-se, estou prestes a virar esse jogo de cabeça pra baixo!");
            break;
        case 35:
            FalasBalão.innerHTML = ("Trinta e cinco! Metade do caminho para os 70... mas será que você chega lá?");
            break;
        case 36:
            FalasBalão.innerHTML = ("Trinta e seis! Um número quadrado. Vamos ver se sua lógica é tão sólida quanto!");
            break;
        case 37:
            FalasBalão.innerHTML = ("Trinta e sete! Outro primo pra deixar sua cabeça girando... ou será que sou eu?");
            break;
        case 38:
            FalasBalão.innerHTML = ("Trinta e oito! Eu diria que estamos esquentando, mas parece que você já está fervendo.");
            break;
        case 39:
            FalasBalão.innerHTML = ("Trinta e nove! Quase nos 40. Cuidado com a crise da meia-idade!");
            break;
        case 40:
            FalasBalão.innerHTML = ("Quarenta! Estamos no nível de especialista. Pena que você ainda parece um iniciante.");
            break;
        case 41:
            FalasBalão.innerHTML = ("Quarenta e um! É aqui que a verdadeira diversão começa... pelo menos pra mim.");
            break;
        case 42:
            FalasBalão.innerHTML = ("Quarenta e dois! A resposta para a vida, o universo e tudo mais... Só que aqui não!");
            break;
        case 43:
            FalasBalão.innerHTML = ("Quarenta e três! Estou ficando sem piadas... mentira! Vamos nessa!");
            break;
        case 44:
            FalasBalão.innerHTML = ("Quarenta e quatro! Me pergunto quanto tempo você vai durar... apostando em pouco.");
            break;
        case 45:
            FalasBalão.innerHTML = ("Quarenta e cinco! Metade de 90, mas parece que você está a zero de chances.");
            break;
        case 46:
            FalasBalão.innerHTML = ("Quarenta e seis! Se você achou que isso ia ficar mais fácil... errou feio.");
            break;
        case 47:
            FalasBalão.innerHTML = ("Quarenta e sete! Um dos meus números primos favoritos. Mas você não tem nada de favorito aqui.");
            break;
        case 48:
            FalasBalão.innerHTML = ("Quarenta e oito! Chegando perto dos 50... mas não relaxe, as coisas só vão piorar.");
            break;
        case 49:
            FalasBalão.innerHTML = ("Quarenta e nove! Outro quadrado perfeito. Mas você parece mais um círculo vicioso de erros.");
            break;
        case 50:
            FalasBalão.innerHTML = ("Cinquenta! Metade do caminho! Mas só pra te avisar, a descida é mais difícil que a subida.");
            break;
        case 51:
            FalasBalão.innerHTML = ("Cinquenta e um! Não é só uma bebida. Aqui, vai te deixar mais tonto do que qualquer coisa.");
            break;
        case 52:
            FalasBalão.innerHTML = ("Cinquenta e dois! Se você chegou até aqui, parabéns! Agora é que a festa começa.");
            break;
        case 53:
            FalasBalão.innerHTML = ("Cinquenta e três! Meu número favorito pra zoar jogadores. Continue tentando!");
            break;
        case 54:
            FalasBalão.innerHTML = ("Cinquenta e quatro! Três vezes dezoito... e, em breve, três vezes mais problemas.");
            break;
        case 55:
            FalasBalão.innerHTML = ("Cinquenta e cinco! Um lindo número capicua, mas não se deixe enganar pela simetria.");
            break;
        case 56:
            FalasBalão.innerHTML = ("Cinquenta e seis! Acho que você já passou do ponto de desistir, hein?");
            break;
        case 57:
            FalasBalão.innerHTML = ("Cinquenta e sete! Um número primo diferente, assim como seu estilo... diferente e desastroso.");
            break;
        case 58:
            FalasBalão.innerHTML = ("Cinquenta e oito! Se você ainda está comigo, é porque gosta de sofrer.");
            break;
        case 59:
            FalasBalão.innerHTML = ("Cinquenta e nove! Quase nos 60... mas não relaxe, os números ainda vão te pegar.");
            break;
        case 60:
            FalasBalão.innerHTML = ("Sessenta! Parabéns, você chegou ao nível dos seniores. Mas ainda não vai ganhar nada.");
            break;
        case 61:
            FalasBalão.innerHTML = ("Sessenta e um! Vamos lá, só mais um pouco até você perder o juízo.");
            break;
        case 62:
            FalasBalão.innerHTML = ("Sessenta e dois! Dois ao quadrado vezes três ao quadrado... você é bom com isso?");
            break;
        case 63:
            FalasBalão.innerHTML = ("Sessenta e três! Um número primo e o início do seu colapso mental");
            break;
        case 64:
            FalasBalão.innerHTML = ("Sessenta e quatro! Dois à sexta potência. Será que seu cérebro aguenta?");
            break;
        case 65:
            FalasBalão.innerHTML = ("Sessenta e cinco! Um quarto de 260... mas quem se importa? É só mais um nível pra você perder.");
            break;
        case 66:
            FalasBalão.innerHTML = ("Sessenta e seis! Ah, o número do demônio dos números. Acho que ele gosta de você!");
            break;
        case 67:
            FalasBalão.innerHTML = ("Sessenta e sete! Mais um primo pra te deixar desorientado. Aproveite!");
            break;
        case 68:
            FalasBalão.innerHTML = ("Sessenta e oito! Você está a dois níveis do melhor número. Vamos ver se chega lá.");
            break;
        case 69:
            FalasBalão.innerHTML = ("Sessenta e nove! Opa, o número favorito de todos... mas será que vai ser o seu favorito também?");
            break;
        case 70:
            FalasBalão.innerHTML = ("Setenta! A crise dos 70 chegou! Mas sua crise é tentar resolver isso.");
            break;
        case 71:
            FalasBalão.innerHTML = ("Setenta e um! Mais um número primo, e mais um obstáculo pra você!");
            break;
        case 72:
            FalasBalão.innerHTML = ("Setenta e dois! Nove vezes oito... mas nada disso vai te ajudar aqui.");
            break;
        case 73:
            FalasBalão.innerHTML = ("Três é o número mágico, mas pra você, pode ser o número do azar! Vamos lá, herói da matemática!");
            break;
        case 74:
            FalasBalão.innerHTML = ("Setenta e quatro! Se eu fosse você, começava a ficar preocupado.");
            break;
        case 75:
            FalasBalão.innerHTML = ("Setenta e cinco! Três quartos do caminho... mas essa última parte vai ser brutal.");
            break;
        case 76:
            FalasBalão.innerHTML = ("Setenta e seis! Será que você chega nos 100? Eu duvido, mas estou aqui pra ver.");
            break;
        case 77:
            FalasBalão.innerHTML = ("Setenta e sete! O número de sorte... ou será que é de azar?");
            break;
        case 78:
            FalasBalão.innerHTML = ("Setenta e oito! Você ainda está aí? Corajoso, ou só teimoso?");
            break;
        case 79:
            FalasBalão.innerHTML = ("Setenta e nove! Um primo antes dos 80... e só pra esquentar.");
            break;
        case 80:
            FalasBalão.innerHTML = ("Oitenta! Parabéns, você está a 20 níveis de se considerar um gênio. Mas vamos ver se chega lá.");
            break;
        case 81:
            FalasBalão.innerHTML = ("Oitenta e um! Nove ao quadrado. Mas acho que a única coisa quadrada aqui é a sua cabeça.");
            break;
        case 82:
            FalasBalão.innerHTML = ("Oitenta e dois! Já começou a duvidar de si mesmo? Bem-vindo ao clube.");
            break;
        case 83:
            FalasBalão.innerHTML = ("Oitenta e três! Outro número primo pra fazer sua cabeça explodir.");
            break;
        case 84:
            FalasBalão.innerHTML = ("Oitenta e quatro! O mesmo número do livro que previu o futuro... e parece que o seu é sombrio.");
            break;
        case 85:
            FalasBalão.innerHTML = ("Oitenta e cinco! Três quartos de caminho percorridos. Mas as coisas só vão piorar!");
            break;
        case 86:
            FalasBalão.innerHTML = ("Oitenta e seis! Bem, estamos quase lá. Só mais um pouco de sofrimento.");
            break;
        case 87:
            FalasBalão.innerHTML = ("Oitenta e sete! Mais um número primo pra você odiar. E com razão!");
            break;
        case 88:
            FalasBalão.innerHTML = ("Oitenta e oito! O dobro de 44... mas suas chances de passar ainda estão pela metade.");
            break;
        case 89:
            FalasBalão.innerHTML = ("Oitenta e nove! Um dos últimos primos antes do fim. Será que você aguenta?");
            break;
        case 90:
            FalasBalão.innerHTML = ("Noventa! Uau, você está quase lá... mas a reta final é a mais difícil.");
            break;
        case 91:
            FalasBalão.innerHTML = ("Noventa e um! Treze vezes sete. Mas não adianta ficar fazendo as contas agora.");
            break;
        case 92:
            FalasBalão.innerHTML = ("Noventa e dois! Só mais um pouco até o fim... se é que você vai conseguir.");
            break;
        case 93:
            FalasBalão.innerHTML = ("Noventa e três! Sabe o que vem depois, né? Uma grande dor de cabeça.");
            break;
        case 94:
            FalasBalão.innerHTML = ("Noventa e quatro! Eu realmente não esperava que você chegasse até aqui... mas não estou impressionado.");
            break;
        case 95:
            FalasBalão.innerHTML = ("Noventa e cinco! Já começou a ver a luz no fim do túnel? Pena que ela pode ser um trem.");
            break;
        case 96:
            FalasBalão.innerHTML = ("Noventa e seis! Se você chegou aqui, é porque gosta de desafios... ou de sofrimento.");
            break;
        case 97:
            FalasBalão.innerHTML = ("Noventa e sete! Um dos últimos primos... mas ainda tem um pouco de tortura por vir.");
            break;
        case 98:
            FalasBalão.innerHTML = ("Noventa e oito! Quase lá... mas eu ainda posso acabar com seus sonhos.");
            break;
        case 99:
            FalasBalão.innerHTML = ("Cem! Você conseguiu! Mas não pense que acabou... talvez eu tenha mentido sobre esse ser o fim.");
            break;
        default:
            FalasBalão.innerHTML = ("De novo aqui, hein? Não vai cansar nunca? Boa sorte... ou seria má sorte?");
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
        alert('Resposta correta!, Olha só, acertou! Quem diria, hein?');
        Calculations()
        Pontos += 1;
        response_student.value = ("");
    }
    else{
        if (Resposta == '0') {
            Pontos = Pontos - Pontos;
            alert(`Resposta errada!, Sério? Você tropeçou na tabuada do 0? Isso é tipo esquecer como respirar! Deixa eu te dar uma dica: qualquer número vezes 0 é... tcharam... 0! Até um taco de beisebol sabe disso. Tá difícil aí? Quer que eu chame o Jardim de Infância pra dar uma mãozinha? Acho que eles podem te ajudar com essa matemática de nível pré-alguma-coisa!`)
        }
        else{
            Pontos = Pontos - Pontos;
            alert(`Resposta errada!, ${Numero_um}x${Numero_dois} e... você errou?! Sério?! Isso é matemática de contagem de dedos, meu chapa! Até um abacaxi sabe que é ${Resposta}! Quer que eu desenhe ou vai continuar achando que ${Numero_um}x${Numero_dois} é algum código secreto do universo? Meu Deus, até meu cachorro conseguiria essa!`);
            response_student.value = ("");
        }
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