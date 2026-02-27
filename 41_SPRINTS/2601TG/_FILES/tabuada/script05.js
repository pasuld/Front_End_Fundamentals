document.getElementById("calcularBtn").addEventListener("click", function(){
    let numero = parseInt (document.getElementById("numero").value);
    if (isNaN(numero) || numero <= 0){
        alert("Por favor, Digite um número maior ou igual a zero");
        return;
    }

    alert(`tabuada do ${numero}: `);
    for (let i=1; i<=10; i++){

    alert(`${numero} x ${i} = ${numero * i}`);
    }
    alert("Tabuada finalizada!");
})