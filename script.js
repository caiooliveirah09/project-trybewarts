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

const textArea = document.getElementById('textarea');
const contadorHtml = document.getElementById('counter');

function contador() {
  const contadorInicial = 500;
  const textAreaValue = textArea.value.length;
  const contadorFinal = contadorInicial - textAreaValue;
  contadorHtml.innerText = contadorFinal;
}

textArea.addEventListener('input', contador);
validateCheckBox();

const form = document.getElementById('evaluation-form');

const inputEmail = document.getElementById('input-email');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');

const obs = document.getElementById('textarea');

const casa = document.getElementById('house');
const family = document.querySelectorAll('.family');
const materia = document.querySelectorAll('.subject');
const avaliacao = document.querySelectorAll('.rate');

function selecionarAvaliacao() {
  let avaliacaoValue = [];
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked === true) {
      avaliacaoValue = avaliacao[i].value;
    }
  }
  return avaliacaoValue;
}

function selecionarFamilia() {
  let familyValue = [];
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      familyValue = family[i].value;
    }
  }
  return familyValue;
}

function selectionarSubjects() {
  const subjectValue = [];
  for (let i = 0; i < materia.length; i += 1) {
    if (materia[i].checked === true) {
      subjectValue.push(` ${materia[i].value}`);
    }
  }
  return subjectValue;
}

const createNome = document.createElement('p');
const createEmail = document.createElement('p');
const createCasa = document.createElement('p');
const createFamilia = document.createElement('p');
const createMaterias = document.createElement('p');
const createObservacao = document.createElement('p');
const createAvaliacao = document.createElement('p');

function formularioPronto() {
  createNome.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  createEmail.innerText = `Email: ${inputEmail.value}`;
  createCasa.innerText = `Casa: ${casa.value}`;
  createFamilia.innerText = `Família: ${selecionarFamilia()}`;
  createMaterias.innerText = `Matérias: ${selectionarSubjects()}`;
  createAvaliacao.innerText = `Avaliação: ${selecionarAvaliacao()}`;
  createObservacao.innerText = `Observações: ${obs.value}`;
  form.innerHTML = '';
  form.appendChild(createNome);
  form.appendChild(createEmail);
  form.appendChild(createCasa);
  form.appendChild(createFamilia);
  form.appendChild(createMaterias);
  form.appendChild(createAvaliacao);
  form.appendChild(createObservacao);
}

function preventDefault(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', preventDefault);
submitButton.addEventListener('click', formularioPronto);
