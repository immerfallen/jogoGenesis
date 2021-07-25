let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}


//acende a proxima cor
let lightColor = (element,number) =>{
    number = number * 500
    setTimeout(()=>{
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

// checa se os botoes clicados sao os mesmos na ordem gerada pelo jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando proóximo nível!`)
        nextLevel()
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)

   
}

// criar funcao que retorna a cor

let createColorElement = (color) => {
    if(color==0) {
        return green
    }
    else if(color==1) {
        return red
    }
    else if(color==2) {
        return yellow
    }
    else if (color == 3){
        return blue
    }
}

// funcao para o proximo nivel do jogo

let nextLevel = () => {
    score++
    shuffleOrder()
}

//funcao para game over

let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu o jogo!! \n Clique em OK para iniciar um novo jogo!`)
    order =[]
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo!')
    score = 0;

    nextLevel()
}




green.onclick = () => click(0)
red.onclick = () => click(0)
yellow.onclick = () => click(0)
blue.onclick = () => click(0)

playGame()


