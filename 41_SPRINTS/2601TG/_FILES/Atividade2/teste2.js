const botao = document.getElementById('verificarBtn');
const input = document.getElementById('campoIdade');
const  resultado = document.getElementById('mensagem');

// Criar função verificar Idade
function verIdade(){
    const idade = Number(input.value);
    if (idade >= 16){
        resultado.innerText = "Acesso Liberado";
        resultado.style.color = "green";
    }
    else {
        resultado.innerText = "Acesso Negado";
        resultado.style.color = "red";
    }
    //document.body.style.backgroundColor = "blue"
    //alert("A cor mudou");
}

botao.addEventListener('click', verIdade);

/*botao.addEventListener('click', () => 16 {
    let idade = input.ariaValueMax,
    if (idade >= 16){
        resultado.innerText = "Acesso Liberado";
        resultado.style.color = "green";
    } 
    else {
        resultado.innerText = "Acesso Negado";
        resultado.style.color = "red";
    }
    input.ariaValueMax = "";
});*/