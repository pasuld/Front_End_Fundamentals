document.getElementById("calcularBtn").addEventListener("click", function(){
    let numero = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    if (isNaN(numero) || numero <= 0){
        alert("Por favor, Digite um número maior ou igual a zero");
        return;
    }
    
    alert(`tabuada do ${numero}: `);
    for (let i = 1; i <= numero2; i++){
        alert(`${numero} x ${i} = ${numero * i}`)

    }
    alert("Tabuada finalizada!");
})