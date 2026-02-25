const botao = document.getElementById('verificarBTN');
const input = document.getElementById('anoNascimento');
const resultado = document.getElementById('mensagem');

function verificar() {
    let ano = document.getElementById('anoNascimento').value
    let idade = new Date().getFullYear() - ano

    if (idade >= 16) {
        resultado.innerHTML = "Acesso liberado. Você tem " + idade + " anos."
        resultado.style.color = "green"
    } else {
        resultado.innerHTML = "Acesso negado. Você tem " + idade + " anos."
        resultado.style.color = "red"
    }
}

botao.addEventListener("click", verificar);




/*botao.addEventListener('click', () => 16 {
    let idade = input.ariaValueMax,
    if(idade >= 16){
    resultado.innerText = "Acesso liberado";
    resultado.style.color = "green";

} else {
    resultado.innerText = "Acesso negado";
    resultado.style.color = "red";
}

input.ariaValueMax = "";
});*/