const botoes = document.querySelectorAll('.comprar-btn');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    alert("Produto adicionado ao carrinho!");
  });
});