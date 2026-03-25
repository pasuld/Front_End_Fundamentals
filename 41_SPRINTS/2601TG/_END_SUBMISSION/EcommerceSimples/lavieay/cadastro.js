function mostrarAlerta(mensagem) {
  document.getElementById("alerta-texto").textContent = mensagem;
  document.getElementById("alerta-custom").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("alerta-custom").style.display = "none";
}

document.querySelector(".botao").addEventListener("click", () => {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  // 🔴 validações
  if (!nome || !email || !senha || !confirmarSenha) {
    mostrarAlerta("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    mostrarAlerta("As senhas não coincidem!");
    return;
  }

  // 💾 salvar no localStorage
  const usuario = {
    nome,
    email,
    senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  mostrarAlerta("Cadastro realizado com sucesso!");

  // 🔁 redirecionar depois de 2s
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});