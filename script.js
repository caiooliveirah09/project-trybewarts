function validateForm() {
  const email = document.forms.login.email.value;
  const senha = document.forms.login.password.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementById('botao');
const checkbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

button.addEventListener('click', validateForm);

function validateCheckBox() {
  if (checkbox.checked === true) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

validateCheckBox();
