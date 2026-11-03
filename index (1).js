let Jogador = "Pode jogar tesoura,papel ou pedra"
let Computador =" Resolve colocar Papel,pedra ou tesoura" 
 let outrojogador = "Pedra"
// x1zum para ver quem ganha partida 1 
const comeca = "Partida comeca a parti de agora"
let roundtest 
const computadorbota = "_Computador joga Papel "
const jogadorbota = "_Jogador bota Tesoura"
   
    if (roundtest === "Papel" || roundtest === "Tesoura" ) {
        roundtest = "Computador venceu"
    } else {
        roundtest = "Computador perdeu"
    }
 //receba
   const computadorbota2 = "_Computador jogar pedra"
    const jogadorbota2 = "_Jogador bota  Papel"

        let round1
     if (round1 === "Tesoura" || round1 ==="Pedra"  ) {
        round1 = "Jogador Ganhou de Js"
    } else {
        round1 = "Jogador deu pisa em IA"
    }
// x1zum 2 
    const computadorbota3 = "_Computador jogar Papel"
        const jogadorbota3 = "_Jogador bota Papel"

    
        let round2
    if (round2 === "Papel" && round2 === "Papel" ) {
        round2 = "Empate "
    } else {
        round2 = "Empate em ambos lados"
    }
 // round 3 
let round3
    const computadorbota4 = "_Computador jogar Tesoura"
        const jogadorbota4 = "_Jogador bota Pedra"

 if (round3 === "Papel" || round3 === "Tesoura" ) {
        round3 = "Vitoria do jogador"
    } else {
        round3 = "Vitoria do jogador"
    }
        let resumo = `
        Jogador: ${Jogador}
            Computador: ${Computador}
            comeca "${comeca}"
           ===========================
            computadorbota ${computadorbota}
            jogadorbota ${jogadorbota}
           ==================== 
            roundtest: ${roundtest}
           =====================
           computadorbota2 ${computadorbota2}
            jogadorbota2 ${jogadorbota2}
            =========================
            round1 ${round1} 
           =======================
           computadorbota3 ${computadorbota3}
           jogadorbota3 ${jogadorbota3}
           ==================
           round2 ${round2}
           =======================
           computadorbota4 ${computadorbota4}
           jogadorbota4 ${jogadorbota4}
           ======================
           round3 ${round3}
        
           `
    
    console.log(resumo)
    