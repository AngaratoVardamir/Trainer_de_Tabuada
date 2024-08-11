const Random_Numbers = document.getElementById('Random_Numbers');
const response_student = document.getElementById('Res');
const confirmButton = document.getElementById('confirm');
const Acertos = document.getElementById('Acertos');
var Resposta = 0;
let Numero_um;
let Numero_dois;
let Pontos = 0;



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
}



confirmButton.addEventListener('touchstart',() => {
    confirm_Calculations()
});