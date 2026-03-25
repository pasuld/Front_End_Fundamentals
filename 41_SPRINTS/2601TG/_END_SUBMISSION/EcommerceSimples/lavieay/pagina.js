const logado = localStorage.getItem("logado");
const botaoLogin = document.querySelector(".logincabecalho");

if (logado === "true") {
  botaoLogin.style.display = "none";
}