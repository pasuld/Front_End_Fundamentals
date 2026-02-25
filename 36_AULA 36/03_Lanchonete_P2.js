// Classe Lanche
class Lanche {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  // Método para exibir informações do lanche
  exibirInfo() {
    console.log(`${this.nome} - R$${this.preco.toFixed(2)}`);
  }
}

// Classe LancheNatural (herda de Lanche)
class LancheNatural extends Lanche {
  constructor(nome, preco, ingredientes) {
    super(nome, preco);
    this.ingredientes = ingredientes;
  }
  
  // Sobrescreve o método exibirInfo para mostrar ingredientes adicionais
  exibirInfo() {
    super.exibirInfo();
    console.log(`Ingredientes: ${this.ingredientes.join(", ")}`);
  }
}

// Classe Guarnicao
class Guarnicao {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  // Método para exibir informações da guarnição
  exibirInfo() {
    console.log(`${this.nome} - R$${this.preco.toFixed(2)}`);
  }
}

// Classe Cardapio
class Cardapio {
  constructor(itens) {
    this.itens = itens;
  }
  
  // Método para exibir o cardápio completo
  exibirCardapio() {
    console.log("=== Cardápio ===");
    this.itens.forEach((item) => {
      item.exibirInfo();
      console.log("================");
    });
  }
}

// Cardápios
const cardapioLanches = new Cardapio([
  new Lanche("Hambúrguer", 10),
  new Lanche("Cheeseburger", 12),
  new LancheNatural("Lanche Natural", 15, ["Alface", "Tomate", "Cenoura"]),
]);

const cardapioGuarnicoes = new Cardapio([
  new Guarnicao("Batata Frita", 8),
  new Guarnicao("Onion Rings", 10),
  new Guarnicao("Salada", 7),
]);

// Exibição dos cardápios
cardapioLanches.exibirCardapio();
cardapioGuarnicoes.exibirCardapio();
