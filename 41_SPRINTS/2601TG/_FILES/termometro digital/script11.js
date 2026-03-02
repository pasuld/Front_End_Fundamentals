const botao = document.getElementById("verificar");

botao.addEventListener("click", function() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const estacao = document.getElementById("estacao").value;
    const classificacao = document.getElementById("classificacao");
    const mensagemEstacao = document.getElementById("mensagemEstacao");

    if (isNaN(temperatura)) {
        classificacao.textContent = "Digite uma temperatura válida.";
        mensagemEstacao.textContent = "";
        return;
    }

    if (temperatura < 25) {
        classificacao.textContent = "Água fria ❄️";
    } else if (temperatura >= 25 && temperatura < 35) {
        classificacao.textContent = "Água morna 🌤️";
    } else if (temperatura >= 35 && temperatura < 45) {
        classificacao.textContent = "Água quente 🔥";
    } else {
        classificacao.textContent = "Água muito quente 🚨";
    }

    if (estacao === "") {
        mensagemEstacao.textContent = "Selecione uma estação.";
        return;
    }

    if (estacao === "verao") {
        mensagemEstacao.textContent = "No verão, temperaturas mais frias são mais agradáveis.";
    } else if (estacao === "outono") {
        mensagemEstacao.textContent = "No outono, uma água morna costuma ser ideal.";
    } else if (estacao === "inverno") {
        mensagemEstacao.textContent = "No inverno, água quente é mais confortável.";
    } else if (estacao === "primavera") {
        mensagemEstacao.textContent = "Na primavera, temperaturas moderadas são perfeitas.";
    }
});