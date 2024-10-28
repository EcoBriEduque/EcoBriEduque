const questions = [
    {
        question: "Qual é a cor da lixeira destinada para recicláveis de papel?",
        options: ["Azul", "Verde", "Amarelo", "Preto"],
        answer: "Azul"
    },
    {
        question: "Qual é o símbolo internacional que representa a reciclagem?",
        options: ["Círculo azul", "Triângulo com setas", "Triângulo verde", "Círculo vermelho"],
        answer: "Triângulo com setas"
    },
    {
        question: "O que deve ser feito com resíduos orgânicos?",
        options: ["Jogar no lixo comum", "Queimar", "Reciclar", "Compostagem"],
        answer: "Compostagem"
    },
    {
        question: "Quantas vezes o papel pode ser reciclado, em média?",
        options: ["2 a 3 vezes", "5 a 7 vezes", "10 a 15 vezes", "20 vezes"],
        answer: "5 a 7 vezes"
    },
    {
        question: "Por que é importante reciclar?",
        options: ["Para reduzir o desperdício", "Para economizar energia", "Para conservar recursos naturais", "Todas as opções acima"],
        answer: "Todas as opções acima"
    },
    {
        question: "Qual item é considerado lixo eletrônico?",
        options: ["Lata de alumínio", "Computador antigo", "Papel usado", "Garrafa de vidro"],
        answer: "Computador antigo"
    },
    {
        question: "Como o vidro é reciclado?",
        options: ["É derretido e moldado em novos produtos", "É queimado para gerar energia", "É triturado e usado como aterro", "É jogado fora sem processamento"],
        answer: "É derretido e moldado em novos produtos"
    },
    {
        question: "Qual é a função dos pontos de coleta seletiva?",
        options: ["Para facilitar a separação de recicláveis", "Para descartar lixo orgânico", "Para aumentar a quantidade de resíduos", "Para promover a conscientização ambiental"],
        answer: "Para facilitar a separação de recicláveis"
    },
    {
        question: "Como os plásticos são classificados para reciclagem?",
        options: ["Por cor", "Por tamanho", "Por peso", "Por tipo de resina"],
        answer: "Por tipo de resina"
    },
    {
        question: "Qual dos seguintes itens é considerado resíduo perigoso?",
        options: ["Papelão", "Lata de refrigerante", "Produtos químicos de limpeza", "Garrafa PET"],
        answer: "Produtos químicos de limpeza"
    }
    ];
    
    let currentQuestionIndex = 0;
    let timer;
    let questionTimer;
    let timeLeft = 40;
    let score = 0;
    let totalTime = 0; // Tempo total gasto no quiz
    let gameStartTime; // Tempo em que o jogo começou
    
    function startGame() {
        gameStartTime = Date.now(); // Armazena o tempo de início do jogo
        loadQuestion();
    }
    
    function startTimer() {
        timeLeft = 40;
        document.getElementById('time').innerText = timeLeft;
    
        questionTimer = setInterval(() => {
            timeLeft--;
            document.getElementById('time').innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(questionTimer);
                checkAnswer(null); // Considera que a resposta não foi dada
            }
        }, 1000);
    }
    
    function loadQuestion() {
        clearInterval(questionTimer);
        startTimer();
    
        const questionContainer = document.getElementById('question-container');
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            ${question.options.map(option => `
                <div class="option" onmouseover="this.classList.add('hover')" onmouseout="this.classList.remove('hover')" onclick="checkAnswer('${option}')">${option}</div>
            `).join('')}
        `;
    }
    
    function checkAnswer(selectedOption) {
        clearInterval(questionTimer);
        const correctAnswer = questions[currentQuestionIndex].answer;
        const options = document.querySelectorAll('.option');
    
        options.forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            } else if (option.textContent === selectedOption) {
                option.classList.add('incorrect');
            }
            option.style.pointerEvents = 'none';
        });
    
        if (selectedOption === correctAnswer) {
            score++;
        }
    
        document.getElementById('next-button').style.display = 'block';
    }
    
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            document.getElementById('next-button').style.display = 'none';
        } else {
            endQuiz();
        }
    }
    
    function endQuiz() {
        clearInterval(questionTimer); // Para o cronômetro ao finalizar o quiz
        const gameEndTime = Date.now(); // Tempo em que o jogo terminou
        const totalTimePlayed = Math.floor((gameEndTime - gameStartTime) / 1000); // Tempo total em segundos
    
        document.querySelector('.quiz-container').innerHTML = `
            <h1>Parabéns! Você completou o quiz!</h1>
            <p>Pontuação: ${score}/${questions.length}</p>
            <p>Tempo total jogando: ${totalTimePlayed} segundos</p> <!-- Mostra o tempo total jogando -->
            <a href="../pages/jogoquiz10.html"><button class="restart-button" onclick="restartQuiz()">Jogar Novamente</button></a>
        `;
    }
    
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        totalTime = 0; // Reseta o tempo total ao reiniciar o quiz
        shuffleQuestions();
        startGame();
    }
    
    // Função para embaralhar as perguntas
    function shuffleQuestions() {
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
    }
    
    // Inicializar o quiz
    startGame();
    