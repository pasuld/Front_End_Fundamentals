const produtos = [
  { id: 1, nome: 'Biscoito', preco: 2.5 },
  { id: 2, nome: 'Refrigerante', preco: 4.0 },
  { id: 3, nome: 'Chocolate', preco: 3.0 },
  { id: 4, nome: 'Salgadinho', preco: 2.0 },
  { id: 5, nome: 'Água', preco: 1.5 }
];

let carrinho = [];

function exibirProdutos() {
  const listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = '';
  
  produtos.forEach((produto) => {
    // Criamos um card do Bootstrap para cada produto
    const col = document.createElement('div');
    col.className = 'col-6 col-lg-4';
    
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <h5 class="card-title">${produto.nome}</h5>
          <p class="card-text text-muted">R$ ${produto.preco.toFixed(2)}</p>
          <button class="btn btn-outline-primary btn-sm w-100" onclick="adicionarAoCarrinho(${produto.id})">
            + Adicionar
          </button>
        </div>
      </div>
    `;
    listaProdutos.appendChild(col);
  });
}

// Facilitamos a busca pelo ID
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  exibirCarrinho();
}

function exibirCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  listaCarrinho.innerHTML = '';
  
  let total = 0;
  carrinho.forEach((produto, index) => {
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center small';
    item.innerHTML = `
      ${produto.nome}
      <span class="badge bg-secondary rounded-pill">R$ ${produto.preco.toFixed(2)}</span>
    `;
    listaCarrinho.appendChild(item);
    total += produto.preco;
  });

  document.getElementById('total').innerText = `R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
  if(carrinho.length === 0) return alert("Seu carrinho está vazio!");
  
  carrinho = [];
  exibirCarrinho();
  alert('Compra finalizada com sucesso! Volte sempre.');
}

document.getElementById('botao-comprar').addEventListener('click', finalizarCompra);

exibirProdutos();