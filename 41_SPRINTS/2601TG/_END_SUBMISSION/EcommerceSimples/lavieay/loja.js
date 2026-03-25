function pegarCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarProdutoAoCarrinho(produto) {
  const carrinho = pegarCarrinho();

  const produtoExistente = carrinho.find((item) => item.nome === produto.nome);

  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: 1
    });
  }

  salvarCarrinho(carrinho);
}

function pegarDadosDoProduto(botao) {
  const card = botao.closest(".card-produto");

  const imagem = card.querySelector("img").getAttribute("src");
  const nome = card.querySelector("h3").textContent;
  const precoTexto = card.querySelector(".preco").textContent;

  const preco = Number(
    precoTexto
      .replace("R$", "")
      .replace(".", "")
      .replace(",", ".")
      .trim()
  );

  return {
    nome: nome,
    preco: preco,
    imagem: imagem
  };
}

function mostrarAlerta(mensagem) {
  document.getElementById("alerta-texto").textContent = mensagem;
  document.getElementById("alerta-custom").style.display = "flex";
}

function fecharAlerta() {
  document.getElementById("alerta-custom").style.display = "none";
}

const botoesAdicionar = document.querySelectorAll(".adicionar-carrinho");
const botoesComprar = document.querySelectorAll(".comprar-agora");

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = pegarDadosDoProduto(botao);
    adicionarProdutoAoCarrinho(produto);
    mostrarAlerta("Produto adicionado ao carrinho!");
  });
});

botoesComprar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = pegarDadosDoProduto(botao);
    adicionarProdutoAoCarrinho(produto);
    window.location.href = "indexCarrinho.html";
  });
});