//function criaProtecao(nomeProtetor, nomeFundo) {
//    protetor = document.createElement('div');
//    protetor.id = nomeProtetor;
//    protetor.className = 'protetor';
//    document.body.appendChild(protetor);
//
//    if (nomeFundo !== null) {
//        fundo = document.createElement('div');
//        fundo.id = nomeFundo;
//        fundo.className = 'fundo';
//        document.body.appendChild(fundo);
//        return fundo;
//    }
//}

function criaProtecao(nomeProtetor) {
    protetor = document.createElement('div');
    protetor.id = nomeProtetor;
    protetor.className = 'protetor';
    document.body.appendChild(protetor);
    return protetor;
}

function criaFundo(nomeFundo) {
    fundo = document.createElement('div');
    fundo.id = nomeFundo;
    fundo.className = 'fundo';
    document.body.appendChild(fundo);
    return fundo;
}

function removeDiv(nomeDiv) {
    oDiv = document.getElementById(nomeDiv);
    if (oDiv != null)
        document.body.removeChild(oDiv);
}

function mostraMensagemInicioFase(msg) {
    omsg = criaMensagemCentralizada(msg);
    omsg.onclick = function() {
        removeMensagemCentralizada();
        mostrarCartasInicio();
    };
}

function criaMensagemCentralizada(msg) {
    fundo = document.createElement('div');
    fundo.id = 'fundoMsg';
    fundo.className = 'fundo';
    document.body.appendChild(fundo);

    omsg = document.createElement('span');
    omsg.id = 'msgInicio';
    omsg.innerHTML = msg;

    document.body.appendChild(omsg);
    return omsg;
}

function removeMensagemCentralizada() {
    removeDiv('fundoMsg');
    removeDiv('msgInicio');
}

function embaralhar(aLista) {
    aNova = new Array();
    while (aLista.length) {
        i = Math.floor((Math.random() * aLista.length - 1) + 0);
        aNova.push(aLista.splice(i, 1)[0]);
    }
    return aNova;
}

function limtaQuantCartas(aLista, lim) {
    return aLista.slice(0, lim);
}


function contador() {
    paraRelogio = false;
    min = tempoParaJogo;
    seg = '0';
    spanTempo = document.getElementById('tempo');

    apresentaTempo(spanTempo, min, seg);

    setTimeout(function() {
        relogio(spanTempo, min, seg);
    }, 1000);

}


function apresentaTempo(spanTempo, min, seg) {

    seg = '' + seg;
    if (seg.length === 1) {
        spanTempo.innerHTML = min + ':0' + seg;
    } else {
        spanTempo.innerHTML = min + ':' + seg;
    }
}

function relogio(spanTempo, min, seg) {
    seg = parseInt(seg);
    if (!paraRelogio) {
        if (min === 0 && seg === 0) {
            alert('Seu tempo acabou!');
            inicio();
        } else {
            if (seg === 0) {
                min--;
                seg = 59;
            } else {
                seg--;
            }
            apresentaTempo(spanTempo, min, seg);
            setTimeout(function() {
                relogio(spanTempo, min, seg);
            }, 1000);
        }
    }

}
