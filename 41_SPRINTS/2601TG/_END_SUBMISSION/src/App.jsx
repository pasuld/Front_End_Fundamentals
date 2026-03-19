import { useState } from "react";
import "./App.css";

function App() {
    /* ==========================================================
      1. ESTADOS DO SISTEMA
      ========================================================== */
    const [usuario, setUsuario] = useState(null);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [vendasRealizadas, setVendasRealizadas] = useState([]); 
    const [filtroVendedor, setFiltroVendedor] = useState("Todos");

    /* ==========================================================
      2. BANCO DE DADOS LOCAL
      ========================================================== */
    const [listaUsuarios] = useState([
      { id: 1, nome: "Rosemeire Faria", email: "admin@belezinho.com", senha: "123", cargo: "admin" },
      { id: 2, nome: "Vendedora Ana", email: "vendaAna@belezinho.com", senha: "123", cargo: "vendedora"},
      { id: 3, nome: "Vendedora Claudia", email: "vendaClaudia@belenzinho.com", senha: "123", cargo: "vendedora"},
      { id: 4, nome: "Vendedor Paulo", email: "vendaPaulo@belenzinho.com", senha: "123", cargo: "vendedora"}
    ]);

    const listaServicos = [
      { id: 1, nome: "Lavagem Simples", preco: 60.00, foto: "https://media.istockphoto.com/id/1310978724/pt/foto/the-washing-process-on-a-self-service-car-wash.jpg?s=1024x1024&w=is&k=20&c=UlRkZz5o0pRsUgwTIjj1nz6r6sh1oqtyPAv-ZnQ4l8I="},
      { id: 2, nome: "Lavagem com Cera", preco: 75.00, foto: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=500"},
      { id: 3, nome: "Lavagem Completa", preco: 125.00, foto: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=500"},
      { id: 4, nome: "Polimento", preco: 150.00, foto: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=500"},
      { id: 5, nome: "Higienização de Ar", preco: 80.00, foto: "https://media.istockphoto.com/id/2176611243/pt/foto/steam-cleaning-a-car-interior-to-remove-dirt-and-grime-in-a-detailed-auto-detailing-session.jpg?s=1024x1024&w=is&k=20&c=MBFP_6ZmSqf-nhUljX11pCviR8XyAmk2MzI4T0oxHxA="},
      { id: 6, nome: "Cristalização", preco: 250.00, foto: "https://media.istockphoto.com/id/1304509203/pt/foto/man-after-washing-wipes-white-car-with-a-rag-at-car-wash.jpg?s=1024x1024&w=is&k=20&c=8EUF4H5NZFGjp4c13Q5V9YAWPPOGWSxpiT94laEzuMQ="}
    ];

    /* ==========================================================
      3. FUNÇÕES DE LÓGICA
      ========================================================== */
    const realizarLogin = () => {
      const achado = listaUsuarios.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && 
        u.senha === senha
      );
      if (achado) setUsuario(achado);
      else alert("Credenciais inválidas!");
    };

    const registrarVenda = (servico) => {
      const identificacao = prompt("Digite a Placa do Veículo:");
      if (identificacao && usuario) { 
        const agora = new Date();
        const novaVenda = {
          vendedor: usuario.nome,
          servico: servico.nome,
          preco: servico.preco,
          veiculo: identificacao.toUpperCase(),
          data: agora.toLocaleDateString('pt-BR'),
          hora: agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
        setVendasRealizadas([...vendasRealizadas, novaVenda]);
        alert(`Venda registrada para o veículo ${identificacao.toUpperCase()}!`);
      }
    };

    const limparRelatorio = () => {
      if (window.confirm("Deseja realmente apagar TODAS as vendas do relatório?")) {
        setVendasRealizadas([]);
        setFiltroVendedor("Todos");
      }
    };

    const abrirSuporteWhatsapp = () => {
      const telefone = "5511999999999"; 
      const mensagem = "Olá! Gostaria de informações sobre os serviços do Belenzinho Auto Care.";
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    };

    /* ==========================================================
      4. TELAS E RETORNO
      ========================================================== */
    if (!usuario) {
      return (
        <div className="login-page">
          <header className="header"><div className="logo-texto">BELENZINHO LOGIN</div></header>
          <div className="form-container">
            <h2>ACESSO AO SISTEMA</h2>
            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /> 
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            <button className="btn-login" onClick={realizarLogin}>ENTRAR</button>
          </div>
        </div>
      );
    }

    return (
      <div className="landing-page">
        <header className="header">
          <div className="logo-texto">LAVA RÁPIDO BELENZINHO</div>
          <div className="user-info">
              <div className="carrinho-status">
                  🛒 <span className="badge">
                    {vendasRealizadas.filter(v => v.vendedor === usuario.nome).length}
                  </span>
              </div>
              <span>Olá, <strong>{usuario.nome}</strong></span>
              <button className="btn-sair" onClick={() => setUsuario(null)}>Sair</button>
          </div>
        </header>

        <main className="conteudo">
          {usuario.cargo === "admin" ? (
            <section className="admin-panel">
              <h2 className="titulo-secao">Relatório Detalhado</h2>
              <div className="filtros-container">
                  <select value={filtroVendedor} onChange={(e) => setFiltroVendedor(e.target.value)} className="select-vendedor">
                    <option value="Todos">Exibir Todos</option>
                    {listaUsuarios.map(u => (
                        <option key={u.id} value={u.nome}>{u.nome}</option>
                    ))}
                  </select>
                <button className="btn-limpar" onClick={limparRelatorio}>🗑️ Zerar Relatório</button>
              </div>

              <table className="tabela-admin">
                <thead>
                  <tr>
                    <th>Veículo</th><th>Serviço</th><th>Vendedor</th><th>Data/Hora</th><th>Valor</th><th>Comissão (10%)</th>
                  </tr>
                </thead>
                <tbody>
                  {vendasRealizadas
                    .filter(v => filtroVendedor === "Todos" || v.vendedor === filtroVendedor)
                    .map((v, index) => (
                      <tr key={index}>
                        <td style={{fontWeight: 'bold'}}>{v.veiculo}</td>
                        <td>{v.servico}</td>
                        <td>{v.vendedor}</td>
                        <td>{v.data} - {v.hora}</td>
                        <td>R$ {Number(v.preco).toFixed(2)}</td>
                        <td style={{color: '#2e7d32', fontWeight: 'bold'}}>R$ {(Number(v.preco) * 0.10).toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </section>
          ) : (
            <>
              <section className="vip-banner">
                <div className="vip-content">
                  <img src="https://images.unsplash.com/photo-1522126039546-182129aa0b93?q=80&w=1000" alt="Sala VIP" className="vip-img" />
                  <div className="vip-text">
                    <h2>Experiência VIP enquanto você aguarda</h2>
                    <p>Café premium, Wi-Fi e conforto para nossos clientes.</p>
                  </div>
                </div>
              </section>

              <section className="vendas-panel">
                <h2 className="titulo-secao">Registrar Novo Serviço</h2>
                <div className="galeria">
                  {listaServicos.map(s => (
                    <div className="item" key={s.id}>
                      <img src={s.foto} alt={s.nome} className="item-img" />
                      <div className="item-info">
                        <h3>{s.nome}</h3>
                        <p className="preco">R$ {Number(s.preco).toFixed(2)}</p>
                        <button className="btn-venda" onClick={() => registrarVenda(s)}>Registrar Venda</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-info">
              <h4>📍 NOSSA LOCALIZAÇÃO</h4>
              <p>Rua Belenzinho, 123 - Belenzinho</p>
              <p>São Paulo - SP | CEP: 03019-000</p>
              <p>📞 (11) 99999-9999</p>
            </div>
            <div className="footer-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.123!2d-46.592!3d-23.541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eeb!2sBelenzinho%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: "8px" }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
          <hr className="footer-divider" />
          <p className="copyright">© 2026 Belenzinho Auto Care</p>
          <button className="btn-whatsapp-fixo" onClick={abrirSuporteWhatsapp}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '35px' }} />
          </button>
        </footer>
      </div>
    );
}

export default App;