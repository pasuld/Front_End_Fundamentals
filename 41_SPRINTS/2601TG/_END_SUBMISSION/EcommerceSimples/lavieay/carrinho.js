function pegarCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function renderizarCarrinho() {
  const container = document.getElementById("carrinho-container");
  const totalElemento = document.getElementById("total");

  const carrinho = pegarCarrinho();

  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalElemento.textContent = "";
    return;
  }

  let total = 0;

  carrinho.forEach((produto, index) => {
    total += produto.preco * produto.quantidade;

    const div = document.createElement("div");
    div.classList.add("item-carrinho");

    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      
      <div class="info-carrinho">
        <h3>${produto.nome}</h3>
        <p class="preco-carrinho">R$ ${produto.preco.toFixed(2)}</p>

        <div class="controle-quantidade">
          <button onclick="diminuirQtd(${index})">-</button>
          <span>${produto.quantidade}</span>
          <button onclick="aumentarQtd(${index})">+</button>
        </div>
      </div>

      <button class="btn-remover" onclick="removerItem(${index})">
        Remover
      </button>
    `;

    container.appendChild(div);
  });

  totalElemento.textContent = "Total: R$ " + total.toFixed(2);
}

function aumentarQtd(index) {
  const carrinho = pegarCarrinho();

  carrinho[index].quantidade += 1;

  salvarCarrinho(carrinho);
  renderizarCarrinho();
}

function diminuirQtd(index) {
  const carrinho = pegarCarrinho();

  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade -= 1;
  } else {
    carrinho.splice(index, 1);
  }

  salvarCarrinho(carrinho);
  renderizarCarrinho();
}

function removerItem(index) {
  const carrinho = pegarCarrinho();

  carrinho.splice(index, 1);

  salvarCarrinho(carrinho);
  renderizarCarrinho();
}

function mostrarAlerta(mensagem) {
  document.getElementById("alerta-texto").textContent = mensagem;
  document.getElementById("alerta-custom").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("alerta-custom").style.display = "none";
}

function removerItem(index) {
  const carrinho = pegarCarrinho();

  carrinho.splice(index, 1);

  salvarCarrinho(carrinho);
  renderizarCarrinho();
  mostrarAlerta("Produto removido do carrinho!");
}

function irParaCompra() {
  const carrinho = pegarCarrinho();

  if (carrinho.length === 0) {
    mostrarAlerta("Seu carrinho está vazio!");
    return;
  }

  window.location.href = "indexCompra.html";
}

renderizarCarrinho();
