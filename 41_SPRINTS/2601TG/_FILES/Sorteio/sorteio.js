const inputNumber = document.getElementById('camponumber'); 
const inputguessBtn = document.getElementById('guessBtn');
const btnresetBtn = document.getElementById('resetBtn');
const idresultado = document.getElementById('resultado');

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log("Número secreto para teste: " + secretNumber); // Olhe no F12!
let attemps = 0; 
const maxAttemps = 5;


inputguessBtn.addEventListener("click", function () {
    let guess = parseInt(inputNumber.value);

    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert("Número inválido! Digite um número de 1 a 20");
        return;
    }

    attemps++;

    if (guess === secretNumber) {
        idresultado.textContent = `Parabéns! Você acertou em ${attemps} tentativas!`;
        idresultado.style.color = "green";
        return; // Sai da função se acertar
    }

    if (attemps >= maxAttemps) {
        idresultado.textContent = `Fim do jogo! O número correto era ${secretNumber}`;
        idresultado.style.color = "red";
        return;
    }
}); 


btnresetBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Novo número secreto: " + secretNumber);
    attemps = 0;
    inputNumber.value = "";
    idresultado.textContent = "";
    inputNumber.focus();
});