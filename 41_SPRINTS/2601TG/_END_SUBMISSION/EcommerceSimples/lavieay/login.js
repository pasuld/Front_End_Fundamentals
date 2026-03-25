let loginValido = false;

function mostrarAlerta(mensagem) {
  document.getElementById("alerta-texto").textContent = mensagem;
  document.getElementById("alerta-custom").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("alerta-custom").style.display = "none";

  if (loginValido) {
    window.location.href = "indexPagina.html";
  }
}

document.querySelector(".botao-entrar").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!email || !senha) {
    mostrarAlerta("Preencha email e senha!");
    return;
  }

  if (!usuarioSalvo) {
    mostrarAlerta("Nenhum cadastro encontrado. Crie uma conta primeiro.");
    return;
  }

  if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
    loginValido = true;
    localStorage.setItem("logado", "true");
    mostrarAlerta("Login realizado com sucesso!");
  } else {
    mostrarAlerta("Email ou senha incorretos!");
  }
});