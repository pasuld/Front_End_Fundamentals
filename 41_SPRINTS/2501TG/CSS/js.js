let indice = 0;

function mudarSlide(direcao) {
    let imagens = document.querySelectorAll(".carousel-inner img");
    imagens[indice].classList.remove("active");

    indice += direcao;
    if (indice < 0) indice = imagens.length - 1;
    if (indice >= imagens.length) indice = 0;

    imagens[indice].classList.add("active");
}




