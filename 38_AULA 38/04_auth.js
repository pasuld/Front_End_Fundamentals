import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });

  // Dados mockados de manutenção
  const manutencoes = [
    { id: 1, carro: "Mercedes AMG A45", servico: "Troca de Óleo", data: "15/05/2026", status: "Pendente" },
    { id: 2, carro: "Mercedes C63", servico: "Revisão de Freios", data: "20/05/2026", status: "Agendado" },
    { id: 3, carro: "Mercedes G-Wagon", servico: "Alinhamento", data: "10/05/2026", status: "Concluído" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setIsLogged(true);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  if (!isLogged) {
    return (
      <div className="login-page">
        <form className="login-card" onSubmit={handleLogin}>
          <h2>AMG Service Login</h2>
          <input 
            type="email" 
            placeholder="E-mail" 
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
          <input 
            type="password" 
            placeholder="Senha" 
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>Manutenção Programada</h1>
        <button onClick={() => setIsLogged(false)}>Sair</button>
      </header>

      <main className="dash-content">
        <div className="stats">
          <div className="stat-card">Próximos: 2</div>
          <div className="stat-card">Concluídos: 12</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Veículo</th>
              <th>Serviço</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {manutencoes.map(m => (
              <tr key={m.id}>
                <td>{m.carro}</td>
                <td>{m.servico}</td>
                <td>{m.data}</td>
                <td><span className={`status ${m.status.toLowerCase()}`}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;