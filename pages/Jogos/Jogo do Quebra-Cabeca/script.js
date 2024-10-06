// script.js

const board = document.getElementById('board');
const piecesContainer = document.getElementById('pieces-container');
const timerDisplay = document.getElementById('timer');
const result = document.getElementById('result');
const finalTime = document.getElementById('final-time');

const totalRows = 4;
const totalCols = 4;
const totalPieces = totalRows * totalCols;
let pieces = [];
let emptySpot = { x: 3, y: 3 };
let startTime = null;
let timerInterval = null;

const imageUrl = 'puzzle-image.jpg'; // Substitua com o caminho da sua imagem

// Cria as peças e embaralha
function createPieces() {
    pieces = [];
    let pieceNumber = 0;
    for (let y = 0; y < totalRows; y++) {
        for (let x = 0; x < totalCols; x++) {
            if (pieceNumber === totalPieces - 1) {
                // Deixe o espaço vazio
                continue;
            }

            const piece = document.createElement('div');
            piece.classList.add('piece');
            piece.style.backgroundImage = `url(${imageUrl})`;
            piece.style.backgroundPosition = `-${x * 100}px -${y * 100}px`;
            piece.dataset.x = x;
            piece.dataset.y = y;
            piece.style.left = `${x * 100}px`;
            piece.style.top = `${y * 100}px`;

            pieces.push(piece);
            piecesContainer.appendChild(piece);
            piece.setAttribute('draggable', true);

            piece.addEventListener('dragstart', handleDragStart);
            piece.addEventListener('dragend', handleDragEnd);
        }
    }
    shufflePieces();
}

// Embaralha as peças
function shufflePieces() {
    const shuffledPieces = [...pieces];
    shuffledPieces.sort(() => Math.random() - 0.5);
    piecesContainer.innerHTML = '';
    shuffledPieces.forEach(piece => piecesContainer.appendChild(piece));
}

// Lida com o início do arrasto da peça
function handleDragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.x + ',' + event.target.dataset.y);
}

// Lida com o fim do arrasto da peça
function handleDragEnd(event) {
    const [startX, startY] = event.dataTransfer.getData('text').split(',').map(Number);
    const piece = event.target;
    const targetX = emptySpot.x;
    const targetY = emptySpot.y;

    // Verifique se a peça foi colocada no espaço vazio
    if (Math.abs(startX - targetX) <= 1 && Math.abs(startY - targetY) <= 1) {
        piece.dataset.x = targetX;
        piece.dataset.y = targetY;
        emptySpot = { x: startX, y: startY };

        piece.style.left = `${targetX * 100}px`;
        piece.style.top = `${targetY * 100}px`;
    }

    // Verifica se o jogador ganhou
    checkWin();
}

// Checa se todas as peças estão no lugar correto
function checkWin() {
    let isWon = true;
    pieces.forEach(piece => {
        const x = parseInt(piece.dataset.x);
        const y = parseInt(piece.dataset.y);
        const left = parseInt(piece.style.left) / 100;
        const top = parseInt(piece.style.top) / 100;

        if (x !== left || y !== top) {
            isWon = false;
        }
    });

    if (isWon) {
        stopTimer();
        finalTime.innerText = `Tempo final: ${timerDisplay.innerText}`;
        result.style.display = 'block';
    }
}

// Inicia o cronômetro
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Para o cronômetro
function stopTimer() {
    clearInterval(timerInterval);
}

// Inicia o jogo
function startGame() {
    createPieces();
    startTimer();
}

startGame();
