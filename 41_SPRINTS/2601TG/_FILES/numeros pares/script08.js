document.getElementById("filtrarBtn").addEventListener("click", function () {
    let numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero <= 0) {
        alert("Digite um número maior ou igual a zero.");
        return;

    }

    let pares = "Números pares (ignorados multiplos de 5): "

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        if (i % 5 === 0) {
            continue;
        }

        pares += i + " ";


        if (i >= 50) {
            break;
        }
    }

    resultado.textContent = pares;

})