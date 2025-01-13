function MenuBackground() {
    // O Corpo Html
    const Corpo = document.querySelector('body');
    // Criação do fundo Menu
    const createMenuback = document.createElement('div');
    createMenuback.setAttribute('id', 'MenuBackground');
    Corpo.appendChild(createMenuback);
    // Criação do Titulo
    const CreateTitle = document.createElement('span');
    CreateTitle.setAttribute('id', 'Title-Menu');
    CreateTitle.innerText = ('Times Table Trainer');
    createMenuback.appendChild(CreateTitle);
    // Criação do Menu
    const CreateMenu = document.createElement('div');
    CreateMenu.setAttribute('id', 'Menu');
    createMenuback.appendChild(CreateMenu);
    // Criação dos Links do Menu
    const LinksdosButton = ['Assets/Pages/NewGame.html','Assets/Pages/LoadGame.html','Assets/Pages/Tutorial.html'];
    const textLinks = ['Novo Jogo','Carregar Jogo','Tutorial'];
    LinksdosButton.map((link, idlink) =>{
        const Link = document.createElement('a');
        Link.setAttribute('href', `${link}`);
        Link.setAttribute('class', 'button');
        Link.innerText = textLinks[idlink];
        CreateMenu.appendChild(Link);
        // circulo do Fundo para efeitos hover
        const circle = document.createElement('div');
        circle.setAttribute('class', 'Cicle');
        Link.appendChild(circle);
    });

}
MenuBackground();