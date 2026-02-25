/**
 * Script para Landing Page - Interatividade e Validação
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const formContainer = document.querySelector('fieldset');
    const btnEnviar = document.querySelector('.botao-destaque');

    if (btnEnviar && formContainer) {
        btnEnviar.addEventListener('click', (event) => {
            const campos = document.querySelectorAll('.entrada');
            let erro = false;

            campos.forEach(campo => {
                // Validação simples: campo vazio
                if (campo.value.trim() === "") {
                    erro = true;
                    campo.style.border = "2px solid #ff4d4d"; // Borda vermelha em caso de erro
                } else {
                    campo.style.border = "2px solid lightblue"; // Restaura cor original
                }
            });

            if (erro) {
                event.preventDefault(); // Impede o envio do formulário
                alert("Por favor, preencha todos os campos obrigatórios.");
            } else {
                alert("Obrigado! Sua mensagem foi enviada com sucesso.");
            }
        });
    }

    // --- 2. ROLAGEM SUAVE (SMOOTH SCROLL) PARA O MENU ---
    const linksMenu = document.querySelectorAll('header nav ul li a');

    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const destino = link.getAttribute('href');

            // Verifica se o link aponta para uma seção interna (#)
            if (destino.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(destino);
                
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // --- 3. EFEITO DE SCROLL NO HEADER ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
        }
    });

});