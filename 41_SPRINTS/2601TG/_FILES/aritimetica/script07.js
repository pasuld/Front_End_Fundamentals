document.getElementById("calcularBtn").addEventListener("click", function(){
    let numero = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;
    if (isNaN(numero) || numero <= 0){
        alert("Por favor, Digite um número maior ou igual a zero");
        return;
    }
     if (operacao === "+"){
        resultado = numero + numero2;
     } else if (operacao === "-"){
        resultado = numero - numero2;

     }else if(operacao === "*"){
        resultado = numero * numero2;
     }else if (operacao === "/"){
        resultado = numero / numero2;
     }

     alert(`O resultado de ${numero} ${operacao} ${numero2} = ${resultado}`)
    
})