// estruturas condicionais

// IF
/*var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto!');
}*/

//ELSE
/*var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto!');
} else{
    console.log('Ninguém marcou ponto.');
}*/

//ELSE IF
/*var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto!');
}else if(jogador2 > 0) {
    console.log('Jogador 2 marcou ponto');
} else{
    console.log('Ninguém marcou ponto.');
}*/

//aninhamento de IF
/*var jogador1 = -1;
var jogador2 = 0;
var placar;

if (jogador1 !== -1){
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!');
    }else if(jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');
    } else{
        console.log('Ninguém marcou ponto.');
    }
}*/

// IF TERNÁRIO - verificação em uma linha
var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 !== -1 && jogador2 !== -1 ? console.log(' Os jogadores são válidos') : console.log('Jogadores Inválidos');

// usando if
    if (jogador1 > 0 && jogador2 == 0){
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    }

    // usando Else IF
    else if(jogador2 > 0 && jogador1 ==00) {
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } 
    
    // usando else
    else{
        console.log('Ninguém marcou ponto.');
    }

    switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('Jogador 1 ganhou!');
            break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou');
            break;
            default:
            console.log('Ninguém ganhou');
    }


