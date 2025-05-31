function baseImagens() {
    aImgsBase = new Array();
    aImgsBase = baseImagensNomeConceito(aImgsBase);
    aImgsBase = baseImagensDiagramaExemplo(aImgsBase);
    aImgsBase = embaralhar(aImgsBase);
    
    return aImgsBase;
}

// 8 Conceitos = 32 Cartas = 16 pares;
// 1 fase = 64 pares
function baseImagensDiagramaExemplo(aImgsBase) {
    // Jogos sérios
    aImgsBase.push(new Array('imagens/cartas/sg_diagrama.jpg', 'imagens/cartas/sg_exemplo.jpg'));
    // Jogos Educacionais
    aImgsBase.push(new Array('imagens/cartas/jed_diagrama.jpg', 'imagens/cartas/jed_exemplo.jpg'));
    // Realidade Virtual
    aImgsBase.push(new Array('imagens/cartas/rv_diagrama.jpg', 'imagens/cartas/rv_exemplo.jpg'));
    // Simulador
    aImgsBase.push(new Array('imagens/cartas/simu_diagrama.jpg', 'imagens/cartas/simu_exemplo.jpg'));

    // --- Cartas faltantes
    //Teoria de Jogos
    aImgsBase.push(new Array('imagens/cartas/teoria_jogos_diagrama.jpg', 'imagens/cartas/teoria_jogos_exemplo.jpg'));
   // Game-based Learning
    aImgsBase.push(new Array('imagens/cartas/dgbl_diagrama.jpg', 'imagens/cartas/dgbl_exemplo.jpg'));
    //Edutainment
    aImgsBase.push(new Array('imagens/cartas/edutainment_diagrama.jpg', 'imagens/cartas/edutainment_exemplo.jpg'));
    //Gamification
    aImgsBase.push(new Array('imagens/cartas/gamification_diagrama.jpg', 'imagens/cartas/gamification_exemplo.jpg'));

    //aImgsBase = embaralhar(aImgsBase);

    return aImgsBase;
}

function baseImagensNomeConceito(aImgsBase) {
    aImgsBase.push(new Array('imagens/cartas/sg_conceito.jpg', 'imagens/cartas/sg.jpg'));
    aImgsBase.push(new Array('imagens/cartas/jed_conceito.jpg', 'imagens/cartas/jed.jpg'));
    aImgsBase.push(new Array('imagens/cartas/rv_conceito.jpg', 'imagens/cartas/rv.jpg'));
    aImgsBase.push(new Array('imagens/cartas/simu_conceito.jpg', 'imagens/cartas/simu.jpg'));

    // --- Cartas faltantes
    //Teoria de Jogos
    aImgsBase.push(new Array('imagens/cartas/teoria_jogos_conceito.jpg', 'imagens/cartas/teoria_jogos.jpg'));
    //Game-based Learning
    aImgsBase.push(new Array('imagens/cartas/dgbl_conceito.jpg', 'imagens/cartas/dgbl.jpg'));
    //Edutainment
    aImgsBase.push(new Array('imagens/cartas/edutainment_conceito.jpg', 'imagens/cartas/edutainment.jpg'));
    //Gamification
    aImgsBase.push(new Array('imagens/cartas/gamification_conceito.jpg', 'imagens/cartas/gamification.jpg'));
    //aImgsBase = embaralhar(aImgsBase);
    
    return aImgsBase;
}



function carregaImgs(aBase) {
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