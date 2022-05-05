function validateForm() {
  let email = document.forms["login"]["email"].value;
  let senha = document.forms["login"]["senha"].value;
  if (email == "tryber@teste.com" && senha == "123456") {
    alert("Olá, Tryber!")
  } else {
    alert("Email ou senha inválidos")
  }
}


