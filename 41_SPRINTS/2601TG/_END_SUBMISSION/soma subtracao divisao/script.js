const inputNumber = document.getElementById('camponumber');
const camporesposta = document.getElementById('camporesposta');

const btnSoma  = document.getElementById('btnSoma');
const btnSub = document.getElementById('btnSub');
const btnDiv = document.getElementById('btnDiv');
const btnReset = document.getElementById('resetBtn');

function obterNumero() {
    let num = parseInt(inputNumber.value);
    if (isNaN(num)) {
        alert("Por favor, digite um número válido!");
        return null;
    }
    return num;
}

btnSoma.addEventListener("click", () => {
    let numero = obterNumero();
    if (numero === null) return;
    
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${numero} + ${i} = ${numero + i}\n`;
    }
    camporesposta.innerText = res;
});


btnSub.addEventListener("click", () => {
    let numero = obterNumero();
    if (numero === null) return;
    
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${numero} - ${i} = ${numero - i}\n`;
    }
    camporesposta.innerText = res;
});


btnDiv.addEventListener("click", () => {
    let numero = obterNumero();
    if (numero === null) return;
    
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${numero} / ${i} = ${(numero / i)}\n`;
    }
    camporesposta.innerText = res;
});


btnReset.addEventListener('click', () => {
    camporesposta.innerText = "";
    inputNumber.value = "";
    inputNumber.focus();
});
