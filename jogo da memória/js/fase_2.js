//** Ser� realizada em duas etapas:
// Na primeira etapa: dever�o ser relacionados os pares: NOME - CONCEITO
// Na segunda etapa: dever�o ser relacionados os pares: DIAGRAMA - EXEMPLO

etapaSegundaFase = 1;

function iniciaFaseDois() {

    if (etapaSegundaFase === 1) {
        setTimeout(function() {
            omsg = criaMensagemCentralizada('Parab�ns voc� concluiu a 1� fase do jogo! <br> <h2>Estat�sticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos);
            omsg.onclick = function() {

                removeMensagemCentralizada();
                // Est� na primeira etapa: NOME - CONCEITO
                atualizaNomeFase("2� Fase - 1� Etapa");
                etapaSegundaFase = 2;

                carregaImgsFaseDoisEtapaUm();
                mostraMensagemInicioFase('<h3>Voc� est� na 1� epata da 2� fase!</h3> <br><br> Relacione os pares: nome-conceito');
                novoJogo();
            };

        }, tempoExibicaoSelecionada + 1000);
    } else {
        setTimeout(function() {
            omsg = criaMensagemCentralizada('Parab�ns voc� concluiu a 1� etapa da 2� fase do jogo! <br> <h2>Estat�sticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos);
            omsg.onclick = function() {
                removeMensagemCentralizada();
                atualizaNomeFase("2� Fase - 2� Etapa");
                // Est� na segunda etapa: DIAGRAMA - EXEMPLO
                faseAtual = 2;
                carregaImgsFaseDoisEtapaDois();
                mostraMensagemInicioFase('<h3>Voc� est� na 2� epata da 2� fase! </h3><br> Relacione os pares: diagrama-exemplo');
                novoJogo();
            };
        }, tempoExibicaoSelecionada + 1000);
    }
}

function carregaImgsFaseDoisEtapaUm() {
    aBase = baseImagensNomeConceito(new Array());
    aBase = embaralhar(aBase);
    
    carregaImgsFaseDois(aBase);
}

function carregaImgsFaseDoisEtapaDois() {
    aBase = baseImagensDiagramaExemplo(new Array());
    aBase = embaralhar(aBase);
    
    carregaImgsFaseDois(aBase);
}

function carregaImgsFaseDois(aBase) {
    aBase = limtaQuantCartas(aBase,10);
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