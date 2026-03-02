document.getElementById("filtrarBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");


    if (isNaN(numero) || numero <= 0) {
        alert("Por Favor, insira numeros válidos maior que zero.");
        return;
    }
    let impares = "Números Ímpares: ";

    for (let i=1; i <= numero; i++) {
        if (i % 2 == 0) {
            continue;
        }
        impares += i + " ";

        if (i >= 50) {
            break;
        }
    }
    resultado.textContent = impares;
});






