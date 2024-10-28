const lixos = [
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_plastico.png', type: 'plastico' },
    { src: '../img/lixo_papel.png', type: 'papel' },
    { src: '../img/lixo_vidro.png', type: 'vidro' }
];

const lixosNovos = [
    { src: '../img/lixo_novo_papel.png', type: 'papel' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_vidro.png', type: 'vidro' },
    { src: '../img/lixo_novo_organico.png', type: 'organico' }
];

const lixeiras = [
    { src: '../img/lixeira_azul.png', type: 'papel' },
    { src: '../img/lixeira_verde.png', type: 'vidro' },
    { src: '../img/lixeira_amarela.png', type: 'plastico' },
    { src: '../img/lixeira_roxa.png', type: 'organico' },
    { src: '../img/lixeira_vermelha.png', type: 'hospitalar' },
    { src: '../img/lixeira_marrom.png', type: 'eletronico' },
    { src: '../img/lixeira_cinza.png', type: 'solido' },
    { src: '../img/lixeira_branca.png', type: 'geral' },
    { src: '../img/lixeira_laranja.png', type: 'toxico' },
    { src: '../img/lixeira_preta.png', type: 'inerto' }
];

let pontos = 0;
let tempo = 0;
let timerId;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const lixoRow = document.getElementById('lixoRow');
const binRow = document.getElementById('binRow');
const pointsDisplay = document.getElementById('pointsDisplay');

function iniciarJogo() {
    pontos = 0;
    tempo = 0;
    scoreDisplay.innerText = `Pontuação: ${pontos}`;
    timerDisplay.innerText = `Tempo: ${tempo}`;
    pointsDisplay.innerText = '';
    lixoRow.innerHTML = '';
    binRow.innerHTML = '';
    criarLixeiras();
    criarLixosFixos();
    timerId = setInterval(atualizarTempo, 1000);
}

function criarLixosFixos() {
    while (lixoRow.children.length < 12) {
        adicionarLixo();
    }
}

function criarLixeiras() {
    lixeiras.forEach(lixeira => {
        const divLixeira = document.createElement('div');
        divLixeira.className = 'bin';

        divLixeira.ondragover = (e) => {
            e.preventDefault(); // Permite que o lixo seja solto
        };

        divLixeira.ondrop = (e) => {
            const tipoLixo = e.dataTransfer.getData('text/plain');
            const imgLixo = e.dataTransfer.getData('image');
            verificarLixo(tipoLixo, lixeira.type, imgLixo);
        };

        const imgLixeira = document.createElement('img');
        imgLixeira.src = lixeira.src;
        imgLixeira.className = 'lixeira-img';

        divLixeira.appendChild(imgLixeira);
        binRow.appendChild(divLixeira);
    });
}

function verificarLixo(tipoLixo, tipoCorreto, imgLixo) {
    const lixoSelecionado = Array.from(lixoRow.children).find(l => l.src === imgLixo);
    
    // Log para verificação
    console.log(`Tipo Lixo: ${tipoLixo}, Tipo Correto: ${tipoCorreto}, imgLixo: ${imgLixo}`);

    if (tipoLixo === tipoCorreto) {
        pontos += 20;
        pointsDisplay.innerText = '+20';
        
        if (lixoSelecionado) {
            console.log(`Removendo lixo: ${lixoSelecionado.src}`);
            lixoSelecionado.remove(); // Remove o lixo correto da tela
            adicionarLixoNovo(); // Adiciona um novo lixo no lugar
        }
    } else {
        pontos -= 5;
        pointsDisplay.innerText = '-5';
        setTimeout(() => {
            if (lixoSelecionado) {
                lixoSelecionado.src = imgLixo; // Retorna o lixo ao lugar
            }
        }, 500);
    }

    scoreDisplay.innerText = `Pontuação: ${pontos}`;

    // Remove a mensagem de pontos após 1 segundo
    setTimeout(() => {
        pointsDisplay.innerText = '';
    }, 1500);
}


function adicionarLixo() {
    const lixo = lixos[Math.floor(Math.random() * lixos.length)];
    const lixoImg = document.createElement('img');
    lixoImg.src = lixo.src;
    lixoImg.className = 'lixo';
    lixoImg.draggable = true;

    lixoImg.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', lixo.type);
        e.dataTransfer.setData('image', lixo.src);
    };

    lixoRow.appendChild(lixoImg);
}

function adicionarLixoNovo() {
    const lixoNovo = lixosNovos[Math.floor(Math.random() * lixosNovos.length)];
    const lixoNovoImg = document.createElement('img');
    lixoNovoImg.src = lixoNovo.src;
    lixoNovoImg.className = 'lixo';
    lixoNovoImg.draggable = true;

    lixoNovoImg.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', lixoNovo.type);
        e.dataTransfer.setData('image', lixoNovo.src);
    };

    lixoRow.appendChild(lixoNovoImg);
}


function atualizarTempo() {
    tempo++;
    timerDisplay.innerText = `Tempo: ${tempo}`;
}

// Iniciar o jogo
iniciarJogo();
