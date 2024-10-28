window.onscroll = function() {
    const backToTopButton = document.querySelector('.VoltaraoTopo');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.classList.add('show'); // Mostra o botão ao rolar para baixo
    } else {
        backToTopButton.classList.remove('show'); // Esconde o botão ao voltar ao topo
    }
};
