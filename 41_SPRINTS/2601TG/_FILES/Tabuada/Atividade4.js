document.getElementById("calcularBtn").addEventListener("click", function (){
    let numero = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    if(isNaN(numero) || numero <= 0) {
        alert ("Por favor, insira um numero válido maior que zero");
        return;
    }
    alert(`tabuada do ${numero}:`);


    for (let i=1; i <= numero2; i++){
        alert(`${numero} x ${i} = ${numero * i}`);
    }
    alert ("Tabuada Finalizada!");
});