$(document).ready(function() {
    // 1. Lista de classes de cores que definimos no CSS
    const cores = ['amarelo', 'vermelho', 'azul', 'verde'];

    // 2. Distribuir as cores automaticamente entre os tiles
    $('.tile').each(function(index) {
        // Escolhe uma cor baseada na posição (evita que fiquem todos iguais)
        const corSorteada = cores[index % cores.length];
        $(this).addClass(corSorteada);
    });

    // 3. Efeito de interação ao clicar
    $('.tile').on('mousedown', function() {
        $(this).css('transform', 'scale(0.95)'); // Diminui levemente
    }).on('mouseup mouseleave', function() {
        $(this).css('transform', 'scale(1)'); // Volta ao normal
    });

    // 4. Log de carregamento (bom para testar no console)
    console.log("Menu Metro carregado com " + $('.tile').length + " itens.");
});