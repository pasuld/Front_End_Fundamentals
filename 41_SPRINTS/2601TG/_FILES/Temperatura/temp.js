const inputTempagua = document.getElementById('tempagua');
const btnVerificar = document.getElementById('btnverificar');
const btnResetar = document.getElementById('btnresetar');
const idResultado = document.getElementById('resultado');

btnVerificar.addEventListener('click', function () {
    
    let temp= parseFloat(inputTempagua.value);

    if (isNaN(temp) || temp < 0 || temp > 100) { 
        alert ("Digite uma temperatura valida");
        return;
    }
if (temp < 15) {
    idResultado.textContent = "❄️ Água muito gelada!";
    idResultado.style.color = "blue";

} else if (temp >= 15 && temp <= 29) {
    idResultado.textContent = "🥶 Água de corajoso (Fria)!";
    idResultado.style.color = "darkblue";

} else if (temp >= 30 && temp <= 36) {
    idResultado.textContent = "💧 Água morna.";
    idResultado.style.color = "cyan";

} else if (temp >= 37 && temp <= 40) {
    idResultado.textContent = "✅ Temperatura ideal!";
    idResultado.style.color = "green";

} else {
    
    idResultado.textContent = "🔥 Água quente / Perigo!";
    idResultado.style.color = "red";
}
});


btnResetar.addEventListener('click', function() {
    inputTempagua.value = "";
    idResultado.textContent = "";
    inputTempagua.focus();
});