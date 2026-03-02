let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
const maxAttempts = 5;

document.getElementById("guessButton").addEventListener("click", function(){
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if(isNaN(guess) || guess < 1 || guess > 20){
        alert("Número inválido! Digite um número de 1 a 20");
        return;
    }
    attempts++;
    if(guess !== secretNumber){
        message.textContent = `Esse não é o número sorteado, você ainda tem ${maxAttempts - attempts} tentativas`;
        message.style.color = "orange";
    }
    if(guess === secretNumber){
        message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        message.style.color = "green";
        return;
    }
    if(attempts >= maxAttempts){
        message.textContent = `Fim de jogo! O numero correto era ${secretNumber}`;
        message.style.color = "red";
        return;
    }
});