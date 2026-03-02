const resultado = document.getElementById("resultado");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const inputNumero = document.getElementById("numero");

let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
const maxAttempts = 5;

startBtn.addEventListener("click", function () {

    let guess = parseInt(inputNumero.value);

    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert("Número inválido! Digite um valor entre 1 e 20.");
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        resultado.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        resultado.style.color = "green";
        return;
    }

    if (attempts >= maxAttempts) {
        resultado.textContent = `Fim de jogo! O número correto era ${secretNumber}`;
        resultado.style.color = "red";
        return;
    }

    if (guess < secretNumber) {
        resultado.textContent = "O número é maior!";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "O número é menor!";
        resultado.style.color = "orange";
    }
});

resetBtn.addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 0;
    inputNumero.value = "";
    resultado.textContent = "Vamos Verificar!";
    resultado.style.color = "black";
});