const questions = [
    {
        question: "Qual o primeiro passo para reduzir o lixo produzido?",
        options: ["Jogar tudo fora", "Comprar mais produtos", "Aumentar a reciclagem", "Reduzir o consumo"],
        answer: "Reduzir o consumo"
    },
    {
        question: "Qual é a principal vantagem da reciclagem de alumínio?",
        options: ["Reduz o custo de produção", "Aumenta o consumo de energia", "Produz mais resíduos", "Diminui a durabilidade do material"],
        answer: "Reduz o custo de produção"
    },
    {
        question: "Qual é o impacto da reciclagem no aquecimento global?",
        options: ["Aumenta as emissões de carbono", "Reduz as emissões de gases de efeito estufa", "Diminui a qualidade do ar", "Não tem impacto"],
        answer: "Reduz as emissões de gases de efeito estufa"
    },
    {
        question: "Qual material é 100% reciclável e pode ser reciclado infinitas vezes?",
        options: ["Papel", "Plástico", "Alumínio", "Vidro"],
        answer: "Alumínio"
    },
    {
        question: "O que é upcycling?",
        options: ["Coletar lixo", "Descarte de materiais recicláveis", "ATransformar materiais em produtos de maior valor", "Reciclar plástico"],
        answer: "Transformar materiais em produtos de maior valor"
    },
    {
        question: "Quantas vezes o alumínio pode ser reciclado sem perder qualidade? ",
        options: ["1 vez"," 5 vezes","10 vezes", "Infinitas vezes"],
        answer: "Infinitas vezes"
    },
    {
        question: "O que deve ser feito com embalagens de alimentos?",
        options: ["Limpar e reciclar", "Jogar fora", "Reutilizar apenas", "Não reciclar"],
        answer: "Limpar e reciclar"
    },
    {
        question: "Qual a quantidade de energia economizada ao reciclar uma lata de alumínio?",
        options: ["10%", " 50%", "75%", "95%"],
        answer: "95%"
    },
    {
        question: "O que são sacos plásticos biodegradáveis?",
        options: ["Sacos que podem ser reciclados", "Sacos que são feitos de papel", "Sacos que se decompõem naturalmente", "Sacos que não se decompõem"],
        answer: "Sacos que se decompõem naturalmente"
    },
    {
        question: "Qual é um exemplo de eco-design?",
        options: ["Criar produtos com foco na sustentabilidade", " Fazer produtos mais bonitos", "Reduzir o preço dos produtos", "Aumentar o uso de plástico"],
        answer: "Criar produtos com foco na sustentabilidade"
    },
    {
        question: "Qual é o impacto ambiental de não reciclar?",
        options: ["Reduz o uso de recursos", "Aumenta a quantidade de lixo em aterros", "Aumenta a reciclagem", "Não tem impacto"],
        answer: "Aumenta a quantidade de lixo em aterros"
    },
    {
        question: "Qual é o ciclo de vida de um produto reciclável?",
        options: ["Produção e descarte", "Uso e descarte apenas", "Produção, uso e descarte", "Produção, uso, reciclagem e nova produção"],
        answer: "Produção, uso, reciclagem e nova produção"
    },
    {
        question: "Por que as garrafas PET são populares para reciclagem?",
        options: ["Elas são leves e fáceis de processa", "Elas são muito caras", "Elas ocupam muito espaço", "Elas não podem ser recicladas"],
        answer: "Elas são leves e fáceis de processa"
    },
    {
        question: "O que deve ser feito com latas de conserva vazias?",
        options: ["Jogar no lixo comum", "Reutilizar como decoração", "Reciclar", "Queimar"],
        answer: "Reciclar"
    },
    {
        question: "Qual a principal consequência do acúmulo de lixo em aterros?",
        options: ["Melhoria do meio ambiente", "Diminuição de resíduos", "Aumento de produtos recicláveis", "Contaminação do solo e da água"],
        answer: "Contaminação do solo e da água"
    },
    {
        question: "Qual é um benefício da reciclagem de metais?",
        options: ["Aumenta a poluição", "Reduz a necessidade de extração de novos minerais", "Não tem benefício", "Diminui a eficiência energética"],
        answer: "Reduz a necessidade de extração de novos minerais"
    },
    {
        question: "O que é biomaterial?",
        options: ["Metal reciclado", "Plástico comum", "Material feito de fontes biológicas", "Material não reciclável"],
        answer: "Material feito de fontes biológicas"
    },
    {
        question: "Qual é uma maneira eficaz de ensinar reciclagem para crianças?",
        options: ["Fazer palestras longas", "Usar jogos e atividades práticas", "Não permitir perguntas", "Ignorar o assunto"],
        answer: "Usar jogos e atividades práticas"
    },
    {
        question: "O que deve ser feito com garrafas de vidro sujas?",
        options: ["Limpar e reciclar", "Reutilizar como decoração", "Jogar no lixo comum", "Queimar"],
        answer: "Limpar e reciclar"
    },
    {
    question: "Por que as empresas devem adotar práticas sustentáveis?",
    options: ["Para ignorar as leis", "Para aumentar o desperdício", "Para aumentar os lucros", "Para reduzir o impacto ambiental"],
    answer: "Para reduzir o impacto ambiental"
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
            <a href="../pages/jogoquiz20.html"><button class="restart-button" onclick="restartQuiz()">Jogar Novamente</button></a>
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
    