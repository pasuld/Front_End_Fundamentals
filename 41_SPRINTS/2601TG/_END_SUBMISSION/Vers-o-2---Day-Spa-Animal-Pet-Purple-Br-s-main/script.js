const botao = document.getElementById('meuBotao');

function mudaCor(){
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        botao.textContent = "☀️";
    } else {
        botao.textContent = "🌙";
   }
}
botao.addEventListener('click', mudaCor);