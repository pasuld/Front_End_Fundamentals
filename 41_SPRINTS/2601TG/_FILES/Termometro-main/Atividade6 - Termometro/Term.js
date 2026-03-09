document.getElementById("verificarBtn").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numero").value);
    let situacao = document.getElementById("situacao").value;

    if (isNaN(numero)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (situacao === "verao" && numero <= 28) {
        alert(numero + "° graus: Temperatura Fria 🥶");
    }
    else if (situacao === "verao" && numero >= 29 && numero <= 33) {
        alert(numero + "° graus: Temperatura Agradável 😊");
    }
    else if (situacao === "verao" && numero >= 34) {
        alert(numero + "° graus: Temperatura Quente 🥵");
    }
    else if (situacao === "inverno" && numero <= 29) {
        alert(numero + "° graus: Temperatura Fria 🥶");
    }
    else if (situacao === "inverno" && numero >= 30 && numero <= 37) {
        alert(numero + "° graus: Temperatura Agradável 😊");
    }
    else if (situacao === "inverno" && numero >= 38) {
        alert(numero + "° graus: Temperatura Quente 🥵");
    }
});