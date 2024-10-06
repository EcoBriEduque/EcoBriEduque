const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const errorMessage = document.querySelector('.error-message');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    errorMessage.style.display = 'none'; // Esconde a mensagem de erro
  } else {
    button.setAttribute('disabled', '');
    errorMessage.style.display = 'inline'; // Mostra a mensagem de erro
  }
};

const handleSubmit = (event) => {
  event.preventDefault(); // Previne o envio padrão do formulário

  localStorage.setItem('player', input.value); // Salva o nome do jogador no localStorage
  window.location.href = 'pages/gamem.html'; // Redireciona para a página do jogo
};

// Adiciona os eventos aos elementos
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
