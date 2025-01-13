function Rain() {
    // Criando RainZone
    const Corpo = document.querySelector('body');
    const createRainzone = document.createElement('div');
    createRainzone.setAttribute('id', 'RainZone');
    Corpo.appendChild(createRainzone);
    // Função para criar as gotas de chuva
    function DropCreation() {
        // Obtendo o elemento onde as gotas serão inseridas
        const RainZone = document.getElementById('RainZone');
        
        // Definindo a quantidade de gotas de chuva
        const QuantityOfDrops = 60;

        // Loop para criar e adicionar cada gota de chuva ao DOM
        for (let gotas = 1; gotas <= QuantityOfDrops; gotas++) {
            
            // Criando um novo elemento <div> para representar a gota
            const NovaGota = document.createElement('div');
            
            // Adicionando a classe CSS 'Rain' ao elemento
            NovaGota.setAttribute('class', 'Rain');
            NovaGota.innerText = gotas;
            // Adicionando o elemento criado como filho de RainZone
            RainZone.appendChild(NovaGota);
        }
    }

    // Função para configurar a animação das gotas
    function Animation() {
        // Selecionando todas as gotas criadas com a classe 'Rain'
        const Rains = document.querySelectorAll(".Rain");

        // Função auxiliar para gerar números aleatórios em um intervalo
        const getRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // Configurando as animações para cada gota
        Rains.forEach(rain => {
            // Definindo a duração da animação aleatória entre 1s e 5s
            rain.style.animationDuration = getRandomNumber(6, 19) + "s";
            
            // Definindo um atraso aleatório na animação entre 0ms e 2000ms
            rain.style.animationDelay = getRandomNumber(0, 2000) + "ms";
            
            // Posicionando a gota de forma aleatória no eixo X (de 0% a 100% da largura da tela)
            rain.style.left = getRandomNumber(0, 100) + "%";
        });
    }

    // Chamando as funções para criar as gotas e iniciar a animação
    DropCreation(); // Cria as gotas de chuva no DOM
    Animation();    // Configura e inicia as animações das gotas
}
Rain();
