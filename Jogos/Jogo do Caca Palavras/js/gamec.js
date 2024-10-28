const words = [
    "papel", "plastico", "vidro", "metal", "compostagem", 
    "reciclar", "sustentavel", "bioenergia", "residuos", 
    "natureza", "lixo", "desperdicio", "organico", "inorganico", 
    "selo", "reciclavel", "composto", "economia", "verde", 
    "limpeza"
];

const gridSize = 12;
const board = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
let selectedCells = [];
let totalWordsFound = 0; // Contador de palavras encontradas
let totalTime = 0; // Tempo em segundos

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            board[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
    }

    words.forEach(word => {
        placeWord(word);
    });
}

function placeWord(word) {
    const direction = Math.random() < 0.5; // Horizontal ou Vertical
    let row, col;

    if (direction) {
        row = Math.floor(Math.random() * gridSize);
        col = Math.floor(Math.random() * (gridSize - word.length));
    } else {
        row = Math.floor(Math.random() * (gridSize - word.length));
        col = Math.floor(Math.random() * gridSize);
    }

    for (let i = 0; i < word.length; i++) {
        board[row + (direction ? 0 : i)][col + (direction ? i : 0)] = word[i];
    }
}

function drawGrid() {
    const gameBoard = document.getElementById('game');
    gameBoard.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = colIndex;

            cellElement.addEventListener('click', () => handleCellClick(cellElement));
            gameBoard.appendChild(cellElement);
        });
    });

    const wordList = document.getElementById('words');
    wordList.innerHTML = '';
    words.forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;
        wordElement.dataset.word = word;
        wordElement.classList.add('word'); // Adiciona classe para estilização
        wordList.appendChild(wordElement);
    });
}

function handleCellClick(cellElement) {
    if (selectedCells.includes(cellElement)) {
        // Se a célula já foi selecionada, não faz nada
        return;
    } else {
        // Adicione a célula selecionada
        selectedCells.push(cellElement);
        cellElement.classList.add('selected');

        const selectedWord = selectedCells.map(cell => cell.textContent).join('');
        if (words.includes(selectedWord)) {
            markWord(selectedWord);
            selectedCells = []; // Limpa a seleção
        } else if (selectedWord.length > 0 && !words.some(word => word.startsWith(selectedWord))) {
            resetSelection();
        }
    }
}

function markWord(word) {
    const wordElements = document.querySelectorAll('.word');
    wordElements.forEach(element => {
        if (element.dataset.word === word) {
            element.classList.add('correct'); // Riscado na lista
            totalWordsFound++; // Aumenta a contagem de palavras encontradas

            // Verifica se todas as palavras foram encontradas
            if (totalWordsFound === words.length) {
                clearInterval(timerInterval); // Para o temporizador
                alert("Você encontrou todas as palavras!"); // Notificação
                window.location.href = 'resultado.html'; // Redireciona para a página de resultados
            }
        }
    });
}

function resetSelection() {
    selectedCells.forEach(cell => {
        cell.classList.remove('selected');
    });
    selectedCells = [];
}

document.getElementById('reset').addEventListener('click', () => {
    generateGrid();
    drawGrid();
    resetTimer();
});

// Inicializa o temporizador
const timerInterval = setInterval(() => {
    totalTime++;
    const minutes = String(Math.floor(totalTime / 60)).padStart(2, '0');
    const seconds = String(totalTime % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}, 1000);

// Reinicia o jogo e o temporizador
function resetTimer() {
    totalTime = 0;
    totalWordsFound = 0;
    document.getElementById('timer').textContent = "00:00";
}

// Inicializa o jogo
generateGrid();
drawGrid();
