document.getElementById("filtrarBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if(isNaN(numero) || numero <=0){
        alert("Por favor, insira um numero válido maior que zero.");
        return;
    }
    let pares = "Números pares (ignorado multiplos de 5): ";

    //for (indice (começo); indice (final); incremento)
    for(let i=1; i <= numero; i++){
        if(i % 2 !== 0) { 
            continue;  //Pula numeros impares
        }
        if (i % 5 === 0) { 
            continue; //Pula multiplos de 5
        }
        pares += i + " "; 

        if (i >= 50) {
        break; //Parar o loop
        }
    }
    resultado.textContent = pares;
    
});