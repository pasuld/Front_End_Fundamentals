const resultado = document.getElementById("resultado");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const inputNumero = document.getElementById("numero");

startBtn.addEventListener("click", function () {

    let temperatura = Number(inputNumero.value);

    if (isNaN(temperatura)) {
        alert("Digite um valor válido!");
        return;
    }

    if (temperatura < 0 || temperatura > 100) {
        alert("Digite um valor entre 0°C e 100°C.");
        return;
    }

    if (temperatura < 20) {
        resultado.innerHTML = "❄️ Água Fria - Indicada para consumo e refresco.";
        resultado.style.color = "blue";
    } 
    else if (temperatura >= 20 && temperatura <= 35) {
        resultado.innerHTML = "🌡️ Água Aceitável - Boa para banho ou uso doméstico.";
        resultado.style.color = "green";
    } 
    else {
        resultado.innerHTML = "🔥 Água Quente - Pode causar queimaduras!";
        resultado.style.color = "red";
    }

});

resetBtn.addEventListener("click", function () {
    inputNumero.value = "";
    resultado.innerHTML = "Vamos verificar!";
    resultado.style.color = "black";
});