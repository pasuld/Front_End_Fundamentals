const inputNumber = document.getElementById('camponumber');
const btnCalcular = document.getElementById('verificarBtn');
const btnReset = document.getElementById('resetBtn');
const displayResposta = document.getElementById('resposta');

btnCalcular.addEventListener("click", () => {
let numero = parseInt(inputNumber.value);

if (isNaN(numero)) {
 alert("Por favor, digite um número válido!");
 return; 
}

let resultadoFinal = ""; 

 
for (let i = 1; i <= 5; i++) {
let calculo = numero * i;

if (calculo %2!== 0) {
resultadoFinal += `${numero} x ${i} = ${calculo}\n`;
}
}

displayResposta.innerText = resultadoFinal;
});

btnReset.addEventListener('click', () => {
displayResposta.innerText = "";
inputNumber.value = "";
inputNumber.focus();
});

