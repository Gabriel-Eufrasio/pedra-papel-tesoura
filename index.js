//aprenda
const prompt = require("prompt-sync")()

let Jogador = prompt("Jogador Fala: ")

let Computador = prompt("Computador  Fala: ") 
 
const comeca = "A partida a partir de agora"
const Jogadorjoga = "papel"
  let jogadas
    do { 
        jogadas = prompt("Qual e a sua jogada: ")
        
    } while (jogadas === Jogadorjoga )
    console.log("Computador perdeu")

 //finalmente conteudo massa,meu trabalho om for combinado com array
for (let round = 1; round <= 5; round++) {
}

const a = prompt("Jogador pode escolher entre pedra,papel,tesoura: ")     
const b = "pedra"

    
if (a === b ) {
    console.log("Empate em ambos")
} 
    else if (a === "papel" && b === "pedra") {
        console.log("Jogador ganhou!")

    } else if (a === "tesoura" && b === "pedra"){ 
        console.log("Computador ganhou!")
}
    else {
    console.log("Esqueceu de algo")
}

const jogador = prompt("Escolha pedra, papel, tesoura: ")
const computador = "tesoura"
const opçoes = ["pedra" , "papel", "tesoura"]

function jogar(jogador, computador) {
    if (jogador === computador) {
        return "Empates"    
     } else if  (
        (jogador === "pedra" && computador === "tesoura")||
        (jogador === "papel"  && computador === "pedra")||
        (jogador === "tesoura" && computador === "papel")
    )  {
        return "Jogador ganhou" 
}
    else {
        return "Computador ganhou"
    }
}
console.log(jogar(jogador, computador))
const saudacao = "Voce gostou do minigame"
console.log(saudacao)






