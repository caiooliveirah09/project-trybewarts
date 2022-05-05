function validateForm() {
  let email = document.forms["login"]["email"].value;
  let senha = document.forms["login"]["password"].value;
  if (email == "tryber@teste.com" && senha == "123456") {
    alert("Olá, Tryber!")
  } else {
    alert("Email ou senha inválidos.")
  }
}

let button = document.getElementById("botao");

button.addEventListener('click', validateForm)

function validateCheckBox(){
  const checkbox = document.getElementById("agreement")
  const submitButton = document.getElementById("submit-btn")
  if (checkbox.checked == true){
    
  }
}