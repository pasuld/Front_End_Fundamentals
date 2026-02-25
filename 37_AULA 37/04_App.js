import React, { useState } from 'react';
import './App.css';

// --- LÓGICA DE CLASSES (Model) ---
class Lanche {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class LancheNatural extends Lanche {
  constructor(nome, preco, ingredientes) {
    super(nome, preco);
    this.ingredientes = ingredientes;
  }
}

// --- COMPONENTES ---

// 1. Barra de Busca
const SearchBar = () => (
  <div className="search-container">
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Pesquisar..." name="search" />
      <button type="submit">Buscar</button>
    </form>
  </div>
);

// 2. Card de Piloto/Informação
const DriverCard = ({ nome, descricao, imgUrl, legenda, isHamilton }) => (
  <section className="driver-section">
    <img className="images" src={imgUrl} alt={nome} width="580" />
    <p className="caption"><strong>{legenda}</strong></p>
    <div className="p-container">
      <p className="p">{descricao}</p>
    </div>
  </section>
);

function App() {
  // Exemplo de uso da lógica de lanches no console ao carregar
  const lanche = new LancheNatural("Lanche Natural", 15, ["Alface", "Tomate"]);
  console.log("Sistema de Lanches pronto:", lanche);

  return (
    <div className="body-wrapper">
      <SearchBar />

      <header>
        <h1 className="h1">Mercedes AMG</h1>
      </header>

      <main className="content">
        {/* George Russell */}
        <DriverCard 
          imgUrl="https://dims.apnews.com/dims4/default/45f5074/2147483647/strip/true/crop/7723x5149+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fce%2Fc9%2F738cd1dec5953cb9525a07083b3c%2F80222957dee64fe1985379097e16b1d6"
          legenda="George Russell piloto da equipe Mercedes AMG F1 Team"
          descricao="Tendo sua última vitória no Grand Prix da Áustria em 2024 pela Mercedes AMG Team, Russell goza de contrato com a mesma até 2025."
        />

        {/* Lewis Hamilton */}
        <DriverCard 
          imgUrl="https://media.cnn.com/api/v1/images/stellar/prod/201116083317-lewis-hamilton-turkey.jpg?q=w_4644,h_3096,x_0,y_0,c_fill"
          legenda="Lewis Hamilton heptacampeão mundial de Formula 1"
          descricao="Lewis Hamilton atualmente pilota pela Mercedes AMG, mas com contrato fechado com a Scuderia Ferrari para 2025, o heptacampeão mudará de casa ano que vem."
        />

        {/* Vídeo */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/XoWEKcygp9w" 
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Sobre a Equipe */}
        <section className="about-team">
          <img className="images" src="https://pbs.twimg.com/media/Fhx2X1pXgAASf9h?format=jpg&name=4096x4096" alt="Mercedes Team" width="580" />
          <p className="team-text">
            A Mercedes-AMG PETRONAS Formula One Team é a equipe de trabalho da Mercedes-AMG... 
            [Texto completo aqui]
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;