// Terceira Fase - todas as cartas e pares n�o �bvios...

function iniciaFaseTres() {

    setTimeout(function() {
        omsg = criaMensagemCentralizada('Parab�ns voc� concluiu a 2� fase do jogo! <br> <h2>Estat�sticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos);
        omsg.onclick = function() {
            removeMensagemCentralizada();
            atualizaNomeFase("3� Fase");
            faseAtual = 3;
            carregaImgsFaseTres(baseImagens());
            mostraMensagemInicioFase('<h3>Voc� est� na 3� fase!</h3> <br> Relacione os pares: nome-conceito e diagrama-exemplo');
            novoJogo();
        };
    }, tempoExibicaoSelecionada + 1000);

}

function carregaImgsFaseTres(aBase) {
    aBase = limtaQuantCartas(aBase, 10);
    aImgs = new Array();
    for (i = 0; i < aBase.length; i++) {
        aa = new Array();
        aa.src = aBase[i][0];
        aa.np = i;
        aImgs.push(aa);
        aa = new Array();
        aa.src = aBase[i][1];
        aa.np = i;
        aImgs.push(aa);
    }
}