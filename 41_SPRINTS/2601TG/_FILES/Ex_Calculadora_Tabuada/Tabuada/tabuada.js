const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const container = document.querySelector(".container");
const resultado = document.createElement("div");
container.append(resultado);

startBtn.addEventListener("click", function(){

    //Converter valor em numero
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    //Validação
    if (num1.value === "" || num2.value === ""){
        alert("Por favor, Digite dois números!");
        return;
    }
    //Limpando resultado anterior
    resultado.innerHTML = "";

    //Gerando tabuada
    for(let i = 1; i <= n2; i++){
        let linha = document.createElement("p");
        linha.textContent = `${n1} x ${i} = ${n1 * i}`;
        resultado.appendChild(linha);
    }
});
//Botão resetar
resetBtn.addEventListener("click", function() {
    num1.value = "";
    num2.value = "";
    resultado.innerHTML = "";

});

