const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) { /* Se o nome de digitaçaõ for maior que 3 é permitido que o player jogue */
    button.removeAttribute('disabled'); 
    return;
  }

  button.setAttribute('disabled', ''); /*o botao Fica desabilitado até ser maior que 3 */
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/gamem.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);