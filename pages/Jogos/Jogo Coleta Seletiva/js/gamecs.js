const lixos = [
    { img: "vidro1.png", cor: "verde" },
    { img: "frascoshampoo.png", cor: "azul" },
    { img: "frascoshampoo.png", cor: "azul" },
    { img: "frascoshampoo.png", cor: "azul" },    
    { img: "frascoshampoo.png", cor: "azul" },  
    { img: "frascoshampoo.png", cor: "azul" },   
    { img: "frascoshampoo.png", cor: "azul" },   
    { img: "frascoshampoo.png", cor: "azul" },  
    { img: "frascoshampoo.png", cor: "azul" },
    { img: "revista.png", cor: "roxo" },
    { img: "papelpresentes.png", cor: "azul" }
];

const novosLixos = [
    { img: "vidro3.png", cor: "verde" },
    { img: "metal.png", cor: "azul" },
    { img: "plastico.png", cor: "amarela" },
    { img: "vidro.png", cor: "preta" },
    { img: "papelão.png", cor: "laranja" },
    { img: "plastico2.png", cor: "vermelha" },
    { img: "plastico3.png", cor: "vermelha" }
];

let tempo = 0;
let pontos = 0;
let interval;

function iniciarJogo() {
    document.getElementById("mensagem").classList.add("hidden");
    document.getElementById("tempo").innerText = "0";
    document.getElementById("pontos").innerText = "0";
    tempo = 0;
    pontos = 0;
    interval = setInterval(() => {
        tempo++;
        document.getElementById("tempo").innerText = tempo;
    }, 1000);
    embaralharLixo();
    mostrarLixeiras();
    document.getElementById("reiniciar").classList.add("hidden");
    document.getElementById("tela-final").classList.add("hidden");
}

function embaralharLixo() {
    const lixoContainer = document.getElementById("lixo-container");
    lixoContainer.innerHTML = '';
    const quantidadeLixos = Math.min(10, lixos.length);
    for (let i = 0; i < quantidadeLixos; i++) {
        const lixo = lixos[Math.floor(Math.random() * lixos.length)];
        const img = document.createElement('img');
        img.src = `img/${lixo.img}.png`; // Verifique se o caminho está correto
        img.alt = lixo.cor;
        img.dataset.cor = lixo.cor;
        img.draggable = true;
        img.addEventListener('dragstart', dragStart);
        img.onerror = () => console.error(`Falha ao carregar a imagem: ${img.src}`);
        lixoContainer.appendChild(img);
    }
}

function mostrarLixeiras() {
    const lixeirasContainer = document.getElementById("lixeiras");
    lixeirasContainer.innerHTML = '';
    const coresLixeiras = ["azul", "vermelha", "amarela", "verde", "preta", "marrom", "cinza", "branco", "laranja", "roxa"];
    
    coresLixeiras.forEach(cor => {
        const img = document.createElement('img');
        img.src = `img/lixeira${cor}.png`; // Verifique se o caminho está correto
        img.alt = `Lixeira ${cor.charAt(0).toUpperCase() + cor.slice(1)}`;
        img.classList.add('lixeira');
        img.dataset.cor = cor;
        img.addEventListener('dragover', (e) => e.preventDefault());
        img.addEventListener('drop', (e) => {
            e.preventDefault();
            const corLixo = e.dataTransfer.getData("text/plain");
            const corLixeira = e.target.dataset.cor;

            if (corLixo === corLixeira) {
                const lixoContainer = document.getElementById("lixo-container");
                const lixoDescartado = lixoContainer.querySelector(`img[data-cor="${corLixo}"]`);
                lixoContainer.removeChild(lixoDescartado);
                pontos += 20;
                mostrarAnimacao("+20", true);
                document.getElementById("pontos").innerText = pontos;

                adicionarNovoLixo(lixoContainer);
                
                if (lixoContainer.children.length === 0) {
                    clearInterval(interval);
                    mostrarTelaFinal();
                }
            } else {
                pontos -= 5;
                mostrarAnimacao("-5", false);
                document.getElementById("pontos").innerText = pontos;
            }
        });
        lixeirasContainer.appendChild(img);
    });
}

function adicionarNovoLixo(lixoContainer) {
    const novoLixo = novosLixos[Math.floor(Math.random() * novosLixos.length)];
    const img = document.createElement('img');
    img.src = `img/${novoLixo.img}`; // Verifique se o caminho está correto
    img.alt = novoLixo.cor;
    img.dataset.cor = novoLixo.cor;
    img.draggable = true;
    img.addEventListener('dragstart', dragStart);
    img.onerror = () => console.error(`Falha ao carregar a imagem: ${img.src}`);
    lixoContainer.appendChild(img);
}

function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.cor);
}

function mostrarAnimacao(texto, isCerto) {
    const animacao = document.createElement('div');
    animacao.classList.add('point-animation');
    animacao.classList.add(isCerto ? 'plus' : 'minus');
    animacao.innerText = texto;
    document.body.appendChild(animacao);

    setTimeout(() => {
        animacao.style.opacity = 1;
        animacao.style.transform = "translateY(-30px)";
    }, 0);

    setTimeout(() => {
        animacao.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(animacao);
        }, 500);
    }, 1000);
}

function mostrarTelaFinal() {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const pontosFinais = pontos;

    document.getElementById("tempo-final").innerText = `Você terminou em ${minutos} minuto(s) e ${segundos} segundo(s).`;
    document.getElementById("pontos-finais").innerText = `Pontuação: ${pontosFinais}`;
    document.getElementById("tela-final").classList.remove("hidden");
}

document.getElementById("reiniciar").addEventListener('click', () => {
    iniciarJogo();
});

document.getElementById("jogar-novamente").addEventListener('click', () => {
    iniciarJogo();
    mostrarLixeiras();
    document.getElementById("tela-final").classList.add("hidden");
});

window.onload = iniciarJogo;
