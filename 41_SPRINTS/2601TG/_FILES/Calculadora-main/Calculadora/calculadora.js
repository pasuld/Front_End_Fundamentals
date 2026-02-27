document.getElementById("calcularBtn").addEventListener("click", function(){
    let Numero1 = parseFloat(document.getElementById("Num1").value);
    let Numero2 = parseFloat(document.getElementById("Num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    if ( isNaN(Numero1) || isNaN(Numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    } 
    if (operacao === "+") {
        resultado = Numero1 + Numero2;
    } else if (operacao === "-") {
        resultado = Numero1 - Numero2;
    }
    else if (operacao === "*") {
        resultado = Numero1 * Numero2;
    }
    else if (operacao === "/") {
        resultado = Numero1 / Numero2;
    }
    alert( Numero1 + " " + operacao + " " + Numero2 + " = " + resultado);
    
})