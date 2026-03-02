let secretNumber = Math.floor(Math.random() * 20) + 1;
let attemps = 0;
const maxAttemps = 5;

document.getElementById("guessBtn").addEventListener("click", function () {
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");


    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert("Número invalido! Digite um número de 1 a 20");
        return;
    }
    attemps++;
    if (guess === secretNumber) {
        message.textContent = `Parabéns! Você acertou em ${attemps} tentativas`;
        message.style.color = "green";
        return;

    }
    if(attemps >= maxAttemps){
        message.textContent = `Fim de jogo! O Número correto era ${secretNumber}`
        message.style.color = "red";
        return;
    }
})
