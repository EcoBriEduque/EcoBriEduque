const questions = [
    {
        "question": "Qual é a principal causa do aquecimento global?",
        "options": ["Desmatamento", "Poluição dos oceanos", "Emissões de gases do efeito estufa", "Sobrepesca"],
        "answer": "Emissões de gases do efeito estufa"
    },
    {
        "question": "O que é reciclagem?",
        "options": ["Reutilização de materiais", "Descarte de resíduos", "Processo de transformar materiais usados em novos produtos", "Aumento da produção de lixo"],
        "answer": "Processo de transformar materiais usados em novos produtos"
    },
    {
        question: "Qual é a importância da biodiversidade?",
        options: ["Sustenta os ecossistemas", "Aumenta a poluição", "Diminui a produção de alimentos", "Reduz a qualidade do ar"],
        answer: "Sustenta os ecossistemas"
    },
    {
        question: "O que é um ecossistema?",
        options: ["Um conjunto de organismos em um habitat", "Um tipo de planta", "Um processo de reciclagem", "Uma forma de energia renovável"],
        answer: "Um conjunto de organismos em um habitat"
    },
    {
        question: "Qual é o principal gás responsável pelo efeito estufa?",
        options: ["Dióxido de carbono (CO2)", "Metano (CH4)", "Óxido nitroso (N2O)", "Vapor d'água"],
        answer: "Dióxido de carbono (CO2)"
    },
    {
        question: "Qual é uma maneira eficaz de reduzir o uso de plástico?",
        options: ["Usar sacolas reutilizáveis", "Comprar produtos embalados", "Aumentar a produção de plástico", "Usar descartáveis"],
        answer: "Usar sacolas reutilizáveis"
    },
    {
        question: "O que significa sustentabilidade?",
        options: ["Usar recursos de forma ilimitada", "Conservar recursos para o futuro", "Aumentar a produção industrial", "Desperdiçar recursos naturais"],
        answer: "Conservar recursos para o futuro"
    },
    {
        question: "Qual é uma consequência do desmatamento?",
        options: ["Aumento da biodiversidade", "Perda de habitat", "Melhoria da qualidade do solo", "Aumento das chuvas"],
        answer: "Perda de habitat"
    },
    {
        question: "O que é compostagem?",
        options: ["Processo de queimar lixo", "Transformação de resíduos orgânicos em adubo", "Reciclagem de papel", "Armazenamento de resíduos perigosos"],
        answer: "Transformação de resíduos orgânicos em adubo"
    },
    {
        question: "Qual é uma fonte de energia renovável?",
        options: ["Carvão", "Gás natural", "Solar", "Petróleo"],
        answer: "Solar"
    },
    {
        question: "Qual destes é um exemplo de recurso não renovável?",
        options: ["Energia solar", "Carvão", "Biomassa", "Vento"],
        answer: "Carvão"
    },
    {
        question: "Qual é a principal função das árvores no ecossistema?",
        options: ["Produzir gás carbônico", "Produzir oxigênio", "Criar sombra", "Armazenar água"],
        answer: "Produzir oxigênio"
    },
    {
        question: "O que significa a frase 'reduzir, reutilizar, reciclar'?",
        options: ["Estratégias para gestão de resíduos", "Aumentar a produção de lixo", "Consumo excessivo de recursos", "Poluição ambiental"],
        answer: "Estratégias para gestão de resíduos"
    },
    {
        question: "Qual é uma prática sustentável em casa?",
        options: ["Deixar as luzes acesas", "Desperdiçar água", "Usar lâmpadas de LED", "Descartar resíduos no lixo comum"],
        answer: "Usar lâmpadas de LED"
    },
    {
        question: "Qual é um efeito da poluição do ar?",
        options: ["Aumento da biodiversidade", "Problemas respiratórios", "Melhora da qualidade da água", "Aumento da produção de alimentos"],
        answer: "Problemas respiratórios"
    },
    {
        question: "O que é um aterro sanitário?",
        options: ["Um local para reciclar papel", "Um lugar para compostagem", "Um local destinado ao descarte de resíduos sólidos", "Uma fonte de energia renovável"],
        answer: "Um local destinado ao descarte de resíduos sólidos"
    },
    {
        question: "O que é a pegada de carbono?",
        options: ["A quantidade de água usada", "A quantidade de resíduos produzidos", "A quantidade de emissões de gases do efeito estufa geradas por uma pessoa ou atividade", "A quantidade de energia consumida"],
        answer: "A quantidade de emissões de gases do efeito estufa geradas por uma pessoa ou atividade"
    },
    {
        question: "Qual é a função dos polinizadores?",
        options: ["Produzir oxigênio", "Transportar água", "Polinizar plantas", "Controlar pragas"],
        answer: "Polinizar plantas"
    },
    {
        question: "Qual é um exemplo de consumo consciente?",
        options: ["Comprar produtos descartáveis", "Usar produtos a granel", "Aumentar a compra de plásticos", "Desperdiçar alimentos"],
        answer: "Usar produtos a granel"
    },
    {
        question: "O que é a água potável?",
        options: ["Água poluída", "Água tratada e segura para consumo", "Água do mar", "Água da chuva"],
        answer: "Água tratada e segura para consumo"
    },
    {
        question: "Qual é o impacto da agricultura intensiva no meio ambiente?",
        options: ["Aumento da biodiversidade", "Desmatamento e degradação do solo", "Preservação dos recursos hídricos", "Promoção da saúde do solo"],
        answer: "Desmatamento e degradação do solo"
    },
    {
        question: "Qual destes materiais é reciclável?",
        options: ["Vidro", "Plástico sujo", "Papel toalha", "Resíduos orgânicos"],
        answer: "Vidro"
    },
    {
        question: "O que são energias fósseis?",
        options: ["Fontes de energia renováveis", "Fontes de energia que se esgotam", "Fontes de energia solar", "Fontes de energia eólica"],
        answer: "Fontes de energia que se esgotam"
    },
    {
        question: "O que caracteriza a agricultura orgânica?",
        options: ["Uso de pesticidas químicos", "Uso de fertilizantes sintéticos", "Práticas que respeitam o meio ambiente", "Uso de sementes geneticamente modificadas"],
        answer: "Práticas que respeitam o meio ambiente"
    },
    {
        question: "O que são biocombustíveis?",
        options: ["Combustíveis fósseis", "Combustíveis derivados de fontes biológicas", "Combustíveis químicos", "Combustíveis industriais"],
        answer: "Combustíveis derivados de fontes biológicas"
    },
    {
        question: "Qual é um exemplo de poluição hídrica?",
        options: ["Água limpa", "Descarte de resíduos químicos em rios", "Água da chuva", "Água do lençol freático"],
        answer: "Descarte de resíduos químicos em rios"
    },
    {
        question: "O que é o efeito estufa?",
        options: ["Aumento da temperatura global devido a gases", "Aumento da produção de alimentos", "Diminuição da poluição do ar", "Melhoria da qualidade da água"],
        answer: "Aumento da temperatura global devido a gases"
    },
    {
        question: "Qual é o principal objetivo da conservação ambiental?",
        options: ["Aumentar a produção industrial", "Proteger os recursos naturais", "Reduzir o número de habitantes", "Promover a poluição"],
        answer: "Proteger os recursos naturais"
    },
    {
        question: "O que é a reciclagem de papel?",
        options: ["Produzir mais papel", "Reutilizar papel usado para criar novos produtos de papel", "Queimar papel para energia", "Descartar papel no lixo comum"],
        answer: "Reutilizar papel usado para criar novos produtos de papel"
    },
    {
        question: "Qual é um exemplo de energia limpa?",
        options: ["Energia solar", "Energia de carvão", "Energia nuclear", "Energia de gás"],
        answer: "Energia solar"
    },
    {
        question: "Qual é um impacto positivo da proteção de florestas?",
        options: ["Aumento da poluição", "Aumento da biodiversidade", "Desmatamento", "Redução da qualidade do solo"],
        answer: "Aumento da biodiversidade"
    },
    {
        question: "O que é o conceito de economia circular?",
        options: ["Produção e descarte de resíduos", "Redução, reutilização e reciclagem de materiais", "Aumento do consumo", "Eliminação de produtos"],
        answer: "Redução, reutilização e reciclagem de materiais"
    },
    {
        question: "Qual é uma das consequências do uso excessivo de água?",
        options: ["Aumento da biodiversidade", "Escassez hídrica", "Melhora da qualidade da água", "Aumento da umidade"],
        answer: "Escassez hídrica"
    },
    {
        question: "Qual é a importância dos oceanos?",
        options: ["Regulação do clima", "Produção de plástico", "Desmatamento", "Aumento da temperatura terrestre"],
        answer: "Regulação do clima"
    },
    {
        question: "O que é um recurso renovável?",
        options: ["Recursos que não se esgotam", "Recursos que podem ser usados infinitamente", "Recursos que se esgotam", "Recursos não biológicos"],
        answer: "Recursos que não se esgotam"
    },
    {
        question: "O que é um habitat?",
        options: ["Um tipo de animal", "Um ambiente onde uma espécie vive", "Um tipo de planta", "Um ecossistema inteiro"],
        answer: "Um ambiente onde uma espécie vive"
    },
    {
        question: "Qual é uma estratégia para conservar água?",
        options: ["Deixar a torneira aberta ao escovar os dentes", "Reparar vazamentos", "Usar mangueiras para limpar calçadas", "Tomar banhos longos"],
        answer: "Reparar vazamentos"
    },
    {
        "question": "Qual é a função dos manguezais?",
        "options": ["Proteger a costa da erosão", "Produzir alimentos", "Destruir ecossistemas", "Aumentar a poluição"],
        "answer": "Proteger a costa da erosão"
    },
    {
        "question": "O que é agricultura sustentável?",
        "options": ["Uso de pesticidas químicos", "Práticas que preservam os recursos naturais e a biodiversidade", "Cultivo intensivo", "Desmatamento para novas plantações"],
        "answer": "Práticas que preservam os recursos naturais e a biodiversidade"
    },
    {
        "question": "Qual é a principal causa da extinção de espécies?",
        "options": ["Mudanças climáticas", "Desmatamento", "Caça e pesca excessiva", "Todas as anteriores"],
        "answer": "Todas as anteriores"
    },
    {
        "question": "Qual é um benefício da utilização de transporte público?",
        "options": ["Aumento da poluição", "Redução do congestionamento e das emissões de gases", "Maior consumo de combustível", "Desperdício de tempo"],
        "answer": "Redução do congestionamento e das emissões de gases"
    },
    {
        question: "O que é poluição sonora?",
        options: ["Barulhos agradáveis", "Som excessivo que causa desconforto", "Som da natureza", "Música alta"],
        answer: "Som excessivo que causa desconforto"
    },
    {
        question: "Qual é um benefício das áreas verdes nas cidades?",
        options: ["Aumento da poluição", "Melhoria da qualidade do ar", "Redução de espaços de lazer", "Aumento da temperatura"],
        answer: "Melhoria da qualidade do ar"
    },
    {
        question: "Qual é uma prática de cultivo sustentável?",
        options: ["Uso excessivo de pesticidas", "Rotação de culturas", "Monocultura", "Desmatamento"],
        answer: "Rotação de culturas"
    },
    {
        question: "O que é o conceito de resíduos sólidos?",
        options: ["Resíduos líquidos", "Resíduos que podem ser reciclados", "Resíduos não orgânicos descartados", "Resíduos perigosos"],
        answer: "Resíduos não orgânicos descartados"
    },
    {
        question: "Qual é a função do lixo eletrônico?",
        options: ["Reciclagem de metais", "Descarte seguro de produtos químicos", "Produção de resíduos", "Descarte comum"],
        answer: "Reciclagem de metais"
    },
    {
        question: "O que é um bioma?",
        options: ["Uma área com condições climáticas e biológicas semelhantes", "Um tipo de planta", "Uma cidade", "Um habitat marinho"],
        answer: "Uma área com condições climáticas e biológicas semelhantes"
    },
    {
        question: "Qual é a relação entre poluição e saúde?",
        options: ["Poluição não afeta a saúde", "Poluição pode causar doenças", "Poluição melhora a saúde", "Poluição só afeta animais"],
        answer: "Poluição pode causar doenças"
    },
    {
        question: "O que é o efeito da urbanização no meio ambiente?",
        options: ["Redução da biodiversidade", "Aumento de áreas verdes", "Melhora da qualidade do ar", "Aumento da população rural"],
        answer: "Redução da biodiversidade"
    },
    {
        question: "O que caracteriza um alimento orgânico?",
        options: ["Uso de produtos químicos", "Cultivado sem pesticidas sintéticos", "Produzido em fábricas", "Com alto teor de açúcar"],
        answer: "Cultivado sem pesticidas sintéticos"
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
            <a href="../pages/jogoquiz50.html"><button class="restart-button" onclick="restartQuiz()">Jogar Novamente</button></a>
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
    