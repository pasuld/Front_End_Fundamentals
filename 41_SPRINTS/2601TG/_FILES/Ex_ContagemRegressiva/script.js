// Selecionando elementos
const inputNumero = document.getElementById("numero");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// Criando elemento para mostrar resultado
const resultado = document.createElement("p");
resultado.style.marginTop = "20px";
resultado.style.fontSize = "22px";
resultado.style.fontWeight = "bold";
document.querySelector(".container").appendChild(resultado);

let intervalo = null;

// Função para iniciar contagem
startBtn.addEventListener("click", function () {

    let numero = parseInt(inputNumero.value);

    // Validação
    if (isNaN(numero) || numero <= 0) {
        resultado.textContent = "Digite um número válido maior que 0!";
        return;
    }

    // Evita múltiplos cliques
    if (intervalo !== null) return;

    resultado.textContent = numero;

    intervalo = setInterval(function () {

        numero--;

        if (numero > 0) {
            resultado.textContent = numero;
        } else {
            clearInterval(intervalo);
            intervalo = null;
            resultado.textContent = "⏳ Contagem finalizada!";
        }

    }, 1000);
});


// Função para resetar
resetBtn.addEventListener("click", function () {

    clearInterval(intervalo);
    intervalo = null;

    resultado.textContent = "";
    inputNumero.value = "";
});
