let compraFinalizada = false;

function pegarCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function renderizarCompra() {
  const listaCompra = document.getElementById("lista-compra");
  const totalCompra = document.getElementById("total-compra");

  const carrinho = pegarCarrinho();

  listaCompra.innerHTML = "";

  if (carrinho.length === 0) {
    listaCompra.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalCompra.textContent = "";
    return;
  }

  let total = 0;

  carrinho.forEach((produto) => {
    const subtotal = produto.preco * produto.quantidade;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("item-resumo-compra");

    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      
      <div class="info-resumo-compra">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Quantidade: ${produto.quantidade}</p>
        <p class="subtotal-produto">Subtotal: R$ ${subtotal.toFixed(2)}</p>
      </div>
    `;

    listaCompra.appendChild(item);
  });

  totalCompra.textContent = `Total da compra: R$ ${total.toFixed(2)}`;
}

function mostrarAlerta(mensagem) {
  document.getElementById("alerta-texto").textContent = mensagem;
  document.getElementById("alerta-custom").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("alerta-custom").style.display = "none";

  if (compraFinalizada) {
    window.location.href = "indexPagina.html";
  }
}

function finalizarCompra() {
  const nome = document.getElementById("nome").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const pagamento = document.getElementById("pagamento").value;

  const carrinho = pegarCarrinho();

  if (carrinho.length === 0) {
    mostrarAlerta("Seu carrinho está vazio.");
    return;
  }

  if (!nome || !endereco || !numero || !bairro || !cidade || !pagamento) {
    mostrarAlerta("Preencha todos os campos para finalizar a compra.");
    return;
  }

  localStorage.removeItem("carrinho");
  compraFinalizada = true;
  mostrarAlerta("Compra finalizada com sucesso!");
}

document
  .getElementById("btn-finalizar-compra")
  .addEventListener("click", finalizarCompra);

renderizarCompra();