let order = [];
let clickedOrder = [];
let score = 0;

//0 -verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/*Função que sorteia */   
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

/*seleciona a proxima cor*/
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
       element.classList.add('selected'); 
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

/*Verifica  a veracidade dos botões clicados  da ordem gerada pelo jogo*/
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`); 
        nextLevel(); 
    }
}

/*Função para o clique do user*/
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

/*função que retorna a cor*/
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

/*função  próxima fase*/
let nextLevel = () => {
    score++;
    shuffleOrder();
}

/*função para game over*/
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

/*função para iniciar o game*/
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

/*ativar cliques nos botões*/
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);



/*Início do jogo*/
playGame();