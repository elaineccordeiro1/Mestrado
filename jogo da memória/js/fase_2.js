//** Será realizada em duas etapas:
// Na primeira etapa: deverão ser relacionados os pares: NOME - CONCEITO
// Na segunda etapa: deverão ser relacionados os pares: DIAGRAMA - EXEMPLO

etapaSegundaFase = 1;

function iniciaFaseDois() {

    if (etapaSegundaFase === 1) {
        setTimeout(function() {
            omsg = criaMensagemCentralizada('Parabéns você concluiu a 1ª fase do jogo! <br> <h2>Estatísticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos);
            omsg.onclick = function() {

                removeMensagemCentralizada();
                // Está na primeira etapa: NOME - CONCEITO
                atualizaNomeFase("2ª Fase - 1ª Etapa");
                etapaSegundaFase = 2;

                carregaImgsFaseDoisEtapaUm();
                mostraMensagemInicioFase('<h3>Você está na 1ª epata da 2ª fase!</h3> <br><br> Relacione os pares: nome-conceito');
                novoJogo();
            };

        }, tempoExibicaoSelecionada + 1000);
    } else {
        setTimeout(function() {
            omsg = criaMensagemCentralizada('Parabéns você concluiu a 1ª etapa da 2ª fase do jogo! <br> <h2>Estatísticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos);
            omsg.onclick = function() {
                removeMensagemCentralizada();
                atualizaNomeFase("2ª Fase - 2ª Etapa");
                // Está na segunda etapa: DIAGRAMA - EXEMPLO
                faseAtual = 2;
                carregaImgsFaseDoisEtapaDois();
                mostraMensagemInicioFase('<h3>Você está na 2ª epata da 2ª fase! </h3><br> Relacione os pares: diagrama-exemplo');
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