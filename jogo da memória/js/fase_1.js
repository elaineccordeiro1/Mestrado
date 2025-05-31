// usar todas as cartas.. mas pares iguais...

// Implementar niveis?? - Fácil, Médio ou Difícil??
// O nível influenciaria na quantidade de cartas...

function iniciaFaseUm() {
    faseAtual = 1;
    carregaImgsFaseUm(baseImagens());
    mostraMensagemInicioFase('<h3>Você está na primeira fase!</h3> <br> Relacione os pares (cartas iguais)');

    novoJogo();
}

function carregaImgsFaseUm(aBase) {
    aBase = limtaQuantCartas(aBase, 5);
    
    aImgs = new Array();
    count = 0;

    maxDeCartas = aBase.length;
    //maxDeCartas = 1;
    for (i = 0; i < maxDeCartas; i++) {

        aa = new Array();
        aa.src = aBase[i][0];
        aa.np = count;
        aImgs.push(aa);

        aa = new Array();
        aa.src = aBase[i][0];
        aa.np = count;
        aImgs.push(aa);
        count++;

        aa = new Array();
        aa.src = aBase[i][1];
        aa.np = count;
        aImgs.push(aa);

        aa = new Array();
        aa.src = aBase[i][1];
        aa.np = count;
        aImgs.push(aa);
        count++;
    }
}

