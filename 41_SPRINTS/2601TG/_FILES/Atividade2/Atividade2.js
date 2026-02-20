const botao = document.getElementById('verificarBotao');
const input = document.getElementById('Idade');
const resultado = document.getElementById('resultadoMensagem');

function calIdade(){
    let ano = document.getElementById('Idade').value
    let idade = new Date().getFullYear() - ano 

    if (idade >= 18){
        resultado.innerHTML = "Acesso Liberado, Você tem " + idade + " anos";
        resultado.style.color = "green";
    }
    else
    {
        resultado.innerHTML = "Acesso Negado, Você tem " + idade + " anos";
        resultado.style.color = "red";
    }
}

botao.addEventListener('click', calIdade);



    