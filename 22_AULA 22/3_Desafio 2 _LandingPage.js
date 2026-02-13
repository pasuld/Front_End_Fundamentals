/**
 * Script para Landing Page Responsiva
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. VALIDAÇÃO SIMPLES DE FORMULÁRIO ---
    const formulario = document.querySelector('fieldset'); // Seleciona o container do formulário
    const botaoEnviar = document.querySelector('.botao-destaque');

    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', (event) => {
            const inputs = document.querySelectorAll('.entrada');
            let camposVazios = false;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    camposVazios = true;
                    input.style.borderColor = "red"; // Marca erro visualmente
                } else {
                    input.style.borderColor = "lightblue"; // Volta ao normal
                }
            });

            if (camposVazios) {
                event.preventDefault(); // Impede o envio se houver erro
                alert("Por favor, preencha todos os campos antes de enviar.");
            } else {
                alert("Mensagem enviada com sucesso! Entraremos em contato.");
            }
        });
    }

    // --- 2. ROLAGEM SUAVE (SMOOTH SCROLL) ---
    // Faz com que ao clicar nos links do menu, a página deslize suavemente
    const linksMenu = document.querySelectorAll('header nav ul li a');

    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Verifica se o link é uma âncora interna (ex: #sobre)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Ajuste para não cobrir o header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. EFEITO DE HEADER FIXO ---
    // Adiciona uma sombra ao header quando o usuário rola a página
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.transition = "0.3s";
        } else {
            header.style.boxShadow = "none";
        }
    });

});