aImgs = new Array();
quantPares = 0;
quantAcertos = 0;
tentativas = 0;
cartaSelecionada1 = null;
cartaSelecionada2 = null;

// Tempo em Milisegundos
tempoExibicaoInicio = 5000;
tempoExibicaoSelecionada = 2000;
tempoExibicaoPar = 4000;

tempoParaJogo = 20; // 20 min
paraRelogio = false;

faseAtual = 1;

function inicio() {
    alert('Atenção! Você tem '+tempoParaJogo+' minutos para concluir o jogo.');
    contador();
    iniciaFaseUm();
//    iniciaFaseTres();
}

function atualizaNomeFase(texto){
    document.getElementById("fase").innerHTML = texto;
}

function mostrarCartasInicio() {
    criaProtecao('protetor');

    // Mostrar as cartas;
    oTabela = document.getElementById('cartas');
    aImagensCartas = oTabela.getElementsByTagName('img');

    for (i = 0; i < aImgs.length; i++) {
        aImagensCartas[i].src = aImgs[i].src;
    }
    setTimeout(function() {
        for (i = 0; i < aImgs.length; i++) {
            aImagensCartas[i].src = 'imagens/question.png';
        }
        removeDiv('protetor');
    }, tempoExibicaoInicio);
}

function removeTabelaAntiga() {
    tabelaAntiga = document.getElementById('cartas');
    if (tabelaAntiga != null) {
        document.getElementById('principal').removeChild(tabelaAntiga);
    }
}

function criaNovaTabela(qrows, qcell) {
    tabela = document.createElement('table');
    tabela.id = 'cartas';
    count = -1;
    for (r = 0; r < qrows; r++) {
        tr = document.createElement('tr');
        for (c = 0; c < qcell; c++) {
            td = document.createElement('td');
            count++;

            if (count < aImgs.length) {
                img = document.createElement('img');
                img.src = "imagens/question.png";
                img.id = count;
                img.alt = '';
                img.className = 'disponivel';
                img.onclick = function() {
                    selecionar(this);
                };
                //cola
                //td.innerHTML = aImgs[count].np;

                td.style.backgroundColor = '#ffffff';


                td.appendChild(img);
            }

            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }
    document.getElementById('principal').appendChild(tabela);
}

function novoJogo() {
    removeTabelaAntiga();
    
    aImgs = embaralhar(aImgs);
    //limtaQuantCartas();

    // Iniciar variáveis de contagem
    quantPares = (aImgs.length / 2);
    quantAcertos = 0;
    tentativas = 0;
    document.getElementById("status").innerHTML = "Tentativas: 0 / Acertos: 0";

    // Calcular quantidade de linhas e colunas...
    n = aImgs.length;
    raizQuadrada = Math.sqrt(n);
    qrows = Math.round(raizQuadrada);
    qcell = n / qrows;
    dif = qcell - (parseInt(qcell));
    if (dif > 0)
        qcell++;
    qcell = parseInt(qcell);

    criaNovaTabela(qrows, qcell);
    novaJogada();

}

//function embaralhar() {
//    aNova = new Array();
//    while (aImgs.length) {
//        i = Math.floor((Math.random() * aImgs.length - 1) + 0);
//        aNova.push(aImgs.splice(i, 1)[0]);
//    }
//    aImgs = aNova;
//}

function apresentaCarta(oCarta) {
    criaProtecao('protetor');
    fundo = criaFundo('fundoExibirCarta');

    divCarta = document.createElement('div');
    divCarta.id = 'exibicaoCarta';
    fundo.appendChild(divCarta);

    img = document.createElement('img');
    img.src = oCarta.src;
    divCarta.appendChild(img);

    return img;
}

function apresentaCartaJaAberta(oCarta) {
    oImg = apresentaCarta(oCarta);
    oImg.onclick = function() {
        removeDiv('fundoExibirCarta');
        removeDiv('protetor');
    };
}

function apresentaCartaSelecionadaNaJogada(oCarta) {
    apresentaCarta(oCarta);
    setTimeout(function() {
        removeDiv('protetor');
        removeDiv('fundoExibirCarta');
    }, tempoExibicaoSelecionada);
}

function marcarCartaComoSelecionada(oCarta) {
    oCarta.className = 'selecionada';
    oCarta.parentNode.style.border = '2px solid rgb(0,0,0)';
    oCarta.src = aImgs[oCarta.id].src;
}



function selecionar(oCarta) {
    if (oCarta.className != 'disponivel') {
        // Se carta já foi selecionada.. apenas exibir..
        apresentaCartaJaAberta(oCarta);
    } else {
        // Se tiver alguma carta para se selecionda (com relação a jogoda)
        if (cartaSelecionada1 == null || cartaSelecionada2 == null) {

            marcarCartaComoSelecionada(oCarta);
            // se for a primeira carta selecionada da jogada
            if (cartaSelecionada1 === null) {
                cartaSelecionada1 = oCarta;
                apresentaCartaSelecionadaNaJogada(oCarta);
            } else {
                cartaSelecionada2 = oCarta;

                tentativas++;
                apresentaCartaSelecionadaNaJogada(oCarta);

                //Comparar
                fazComparacao();
                document.getElementById("status").innerHTML = "Tentativas: " + tentativas + " / Acertos: " + quantAcertos;
            }
        }
    }
}

function fazComparacao() {
    if (aImgs[cartaSelecionada1.id].np === aImgs[cartaSelecionada2.id].np) {
        cartaSelecionada1.className = 'compar';
        cartaSelecionada2.className = 'compar';
        cartaSelecionada1.parentNode.style.border = '2px solid rgb(0,166,83)';
        cartaSelecionada2.parentNode.style.border = '2px solid rgb(0,166,83)';

        quantAcertos++;
        document.getElementById("status").innerHTML = "Tentativas: " + tentativas + " / Acertos: " + quantAcertos;

        if (quantAcertos === quantPares) {
            switch (faseAtual) {
                case 1:
                    iniciaFaseDois();
                    break;
                case 2:
                    iniciaFaseTres();
                    break;
                case 3:
                    setTimeout(function() {
                        paraRelogio = true;
                        omsg = criaMensagemCentralizada('Parabéns você concluiu todas as fases do jogo! <br> <h2>Estatísticas:</h2> Tentativas: ' + tentativas + ' / Acertos: ' + quantAcertos + '<br> Para iniciar um novo jogo clique em: <a onclick="inicio();">Novo Jogo</a>');
                        omsg.onclick = function() {
                            removeMensagemCentralizada();
                        };
                    }, tempoExibicaoSelecionada + 1000);

                    break;
            }

        } else {
            mostraMensagem('Parabéns você acertou um par!', true, null, null);
        }
    } else {
        mostraMensagem('Que pena! Você errou, tente outra vez..', true, cartaSelecionada1, cartaSelecionada2);
    }
}

function novaJogada() {
    cartaSelecionada1 = null;
    cartaSelecionada2 = null;
}

function mostraMensagem(msg, fazerNovaJogada, cartaUm, cartaDois) {
    fundo = document.createElement('div');
    fundo.id = 'fundoMsg';
    fundo.className = 'fundo';

    document.body.appendChild(fundo);

    omsg = document.createElement('span');
    omsg.id = 'msg';
    omsg.innerHTML = msg;
    document.body.appendChild(omsg);

    setTimeout(function() {
        fecharMsg(fazerNovaJogada, cartaUm, cartaDois);
    }, tempoExibicaoPar);
}



function fecharMsg(fazerNovaJogada, cartaUm, cartaDois) {
    if (fazerNovaJogada)
        novaJogada();

    if (cartaUm !== null && cartaDois !== null) {
        cartaUm.className = 'disponivel';
        cartaDois.className = 'disponivel';
        cartaUm.src = 'imagens/question.png';
        cartaDois.src = 'imagens/question.png';

        cartaUm.parentNode.style.border = '2px solid rgb(188,199,203)';
        cartaDois.parentNode.style.border = '2px solid rgb(188,199,203)';
    }

    removeDiv('fundoMsg');
    removeDiv('msg');
//    document.body.removeChild(document.getElementById('fundoMsg'));
//    document.body.removeChild(document.getElementById('msg'));

}
