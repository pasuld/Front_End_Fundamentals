let secretNumber = Math.floor(Math.random() * 20) + 1;
let attemps = 0;
const maxAttempts = 5;

document.getElementById("guessBtn").addEventListener("click", function () {
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert ("Número inválido! Digite  um número de 1 a 20");
        return;
    }
    attemps++; 

    if (guess === secretNumber){
        message.textContent = `Parabéns! Você acertou em ${attemps}`
        message.style.color = "Green";
        return;
    }

    if (attemps >= maxAttempts) {
        message.textContent = `Fim de Jogo! O numero correto é ${secretNumber}`
        message.style.color = "Red";
        return;
    }
})