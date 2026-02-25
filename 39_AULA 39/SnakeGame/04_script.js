const canvas = document.getElementById("snakeGame");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

let box = 20; // Tamanho de cada quadrado da grade
let score = 0;
let gameSpeed = 100;

// Inicialização da cobra no meio da tela
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

// Direção inicial
let d;

// Posição da comida
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};

// Captura as teclas
document.addEventListener("keydown", direction);

function direction(event) {
    if(event.keyCode == 37 && d != "RIGHT") d = "LEFT";
    else if(event.keyCode == 38 && d != "DOWN") d = "UP";
    else if(event.keyCode == 39 && d != "LEFT") d = "RIGHT";
    else if(event.keyCode == 40 && d != "UP") d = "DOWN";
}

// Função para detectar colisão no próprio corpo
function collision(head, array) {
    for(let i = 0; i < array.length; i++) {
        if(head.x == array[i].x && head.y == array[i].y) return true;
    }
    return false;
}

function draw() {
    // Limpa o canvas a cada frame
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "lime";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Desenha a comida
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Posição antiga da cabeça
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Movimentação
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;

    // Lógica de comer a fruta
    if(snakeX == food.x && snakeY == food.y) {
        score++;
        scoreElement.innerHTML = "Pontos: " + score;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        // Remove o último quadrado (cauda) se não comeu
        snake.pop();
    }

    // Nova cabeça
    let newHead = { x: snakeX, y: snakeY };

    // Game Over: Bateu na parede ou em si mesma
    if(snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert("Game Over! Pontos: " + score);
        location.reload(); // Reinicia o jogo
    }

    snake.unshift(newHead);
}

// Inicia o loop do jogo
let game = setInterval(draw, gameSpeed);