// Terceira Fase - todas as cartas e pares não óbvios...

function iniciaFaseTres() {

    setTimeout(function() {
        omsg = criaMensagemCentralizada('Parabéns você concluiu a 2ª fase do jogo! <br> <h2>Estatísticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos);
        omsg.onclick = function() {
            removeMensagemCentralizada();
            atualizaNomeFase("3ª Fase");
            faseAtual = 3;
            carregaImgsFaseTres(baseImagens());
            mostraMensagemInicioFase('<h3>Você está na 3ª fase!</h3> <br> Relacione os pares: nome-conceito e diagrama-exemplo');
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