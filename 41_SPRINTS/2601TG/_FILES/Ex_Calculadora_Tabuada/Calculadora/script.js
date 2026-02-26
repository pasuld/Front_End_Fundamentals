const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// Função de cálculo
function calcular(operador) {

    // Pegando valores
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    // Validação
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite dois números válidos!");
        return;
    }

    let resultado;

    switch (operador) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            resultado = "Operação inválida!";
    }

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

// Evento do botão Iniciar (exemplo usando soma)
startBtn.addEventListener("click", function () {
    
});

// Evento do botão Resetar
resetBtn.addEventListener("click", function () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "Resultado:";
});
