const inputNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", function(){

    let numero = parseInt(inputNumero.value);

    if (isNaN(numero) || numero <= 0){
        alert("Insira um valor válido maior que zero!");
        return;
    }

    let pares = "Números PARES:\n \n ";
    let impares = "\n\nNúmeros IMPARES:\n"

    for (let i = 1; i <= numero; i++){
        
        if (i >= 50) break;
        if (i % 2 !== 0) continue;
        if (i % 5 === 0) continue;

        pares += i + " ";

    }
    for (let i = 1; i <= numero; i++){
        
        if (i >= 50) break;
        if (i % 2 == 0) continue;
        if (i % 5 === 0) continue;

        impares += i + " ";

    }
    
    resultado.textContent = pares + impares;
});

resetBtn.addEventListener("click", function(){
    inputNumero.value = "";
    resultado.textContent = "Vamos verificar!";
});
