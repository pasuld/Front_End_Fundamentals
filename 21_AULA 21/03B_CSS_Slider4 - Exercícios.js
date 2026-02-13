// Aguarda o carregamento do DOM para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA PARA O SLIDER 1 E 2 (INPUTS) ---
    // Selecionamos todos os inputs do tipo range
    const sliders = document.querySelectorAll('input[type="range"]');

    sliders.forEach(slider => {
        slider.addEventListener('input', (e) => {
            const valor = e.target.value;
            console.log(`Valor do Slider: ${valor}%`);
            
            // Se houver uma barra de progresso na página, vamos atualizá-la também
            atualizarBarraProgresso(valor);
        });
    });


    // --- LÓGICA PARA A BARRA DE PROGRESSO (EXERCÍCIO 3) ---
    function atualizarBarraProgresso(novoValor) {
        const barra = document.querySelector('.progress');
        if (barra) {
            // Atualiza a largura da div interna dinamicamente
            barra.style.width = novoValor + '%';
            
            // Muda a cor dependendo da intensidade (Extra!)
            if (novoValor > 80) {
                barra.style.backgroundColor = "#ff4d4d"; // Vermelho se estiver quase cheio
            } else {
                barra.style.backgroundColor = "#007bff"; // Azul padrão
            }
        }
    }

    // --- INTERATIVIDADE PARA OS TILES (DO MENU METRO ANTERIOR) ---
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Adiciona um efeito de "flash" ao clicar
            tile.style.opacity = "0.5";
            setTimeout(() => { tile.style.opacity = "1"; }, 100);
            
            alert("Você clicou em um bloco do Menu!");
        });
    });

});