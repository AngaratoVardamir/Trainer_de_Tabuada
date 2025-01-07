const SoundClickGlobal = [...document.getElementsByClassName("SoundClickGlobal")];

const soundClick = new Audio();
//soundClick.src = ('./../Audio/SomClique.mp3');
soundClick.loop = true;

SoundClickGlobal.map((SCG)=>{
    console.log(SCG);
    SCG.addEventListener("click",()=>{
        soundClick.play();
        console.log(SCG);
    })
})