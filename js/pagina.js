//botao onda mecanica
const buttonM = document.getElementById("mecanica");
const mecanica = document.getElementById("ondaMecanica");

buttonM.addEventListener("click", function() {

    mecanica.classList.toggle("esconder");

    if(!mecanica.classList.contains("esconder")){
        // mecanica.style.display = 'block';
        window.location.hash = 'ondaMecanicaAnchor';
        
    }else{
        // mecanica.style.display = 'none';
        window.location.hash = '';
    }

});


//modals da onda mecanica:

const buttonSonora = document.getElementById("ondaSonora");
const sonoraModal = document.getElementById("ondaSonora-modal");
const fecharSonora = document.querySelector("#fecharSom")

buttonSonora.addEventListener('click', () => {
    sonoraModal.showModal();
})
fecharSonora.addEventListener('click', () =>{
    sonoraModal.close();
});

const buttonLiq = document.querySelector("#ondaLiquido");
const liquModal = document.querySelector("#ondaLiquida-modal");
const fecharLiqu = document.querySelector("#fecharL");

buttonLiq.addEventListener('click', () => {
    liquModal.showModal();
})
fecharLiqu.addEventListener('click', () =>{
    liquModal.close();
});

const buttonSis = document.querySelector("#ondaSismica");
const sisModal = document.querySelector("#ondaSismica-modal");
const fecharSis = document.querySelector("#fecharSis");

buttonSis.addEventListener('click', () =>{
    sisModal.showModal();
})
fecharSis.addEventListener('click', () =>{
    sisModal.close();
});

//botao onda eletromagnética:
const buttonE = document.getElementById("eletromag");
const eletrom = document.getElementById("ondaEletrom");

buttonE.addEventListener('click', () =>{
    eletrom.classList.toggle("esconder");

    if(!eletrom.classList.contains("esconder")){
        // mecanica.style.display = 'block';
        window.location.hash = 'ondaEletrom';
        
    }else{
        // mecanica.style.display = 'none';
        window.location.hash = '';
    }

});

//botao ondas de radio:
const botao_ondaRadio = document.querySelector("#ondaRadio");
const radio_modal = document.querySelector("#ondaRadio-modal");

botao_ondaRadio.addEventListener('click', () =>{
    radio_modal.classList.toggle("esconder");

    if(!radio_modal.classList.contains("esconder")){
        window.location.hash = '#ondaRadio-modal';
        
    }else{
        window.location.hash = '#ondaRadio';
    }

})

//botao ondas microondas:
const botao_microondas = document.querySelector("#ondaMicro");
const micro_modal = document.querySelector("#ondaMicro-modal");

botao_microondas.addEventListener('click', () =>{
    micro_modal.classList.toggle("esconder");

    if(!micro_modal.classList.contains("esconder")){
        window.location.hash = '#ondaMicro-modal';
        
    }else{
        window.location.hash = '#ondaMicro';
    }
})

//botao ondas infravermelha:
const botao_infravermelha = document.querySelector("#ondaInfra");
const infra_modal = document.querySelector("#ondaInfravermelha-modal");

botao_infravermelha.addEventListener('click', () =>{
    infra_modal.classList.toggle("esconder");

    if(!infra_modal.classList.contains("esconder")){
        window.location.hash = '#ondaInfravermelha-modal';
        
    }else{
        window.location.hash = '#ondaInfra';
    }
});

//botao ondas raio X
const botao_raioX = document.querySelector("#ondaRaioX");
const raioX_modal = document.querySelector("#ondaRaioX-modal");

botao_raioX.addEventListener('click', () =>{
    raioX_modal.classList.toggle("esconder");

    if(!raioX_modal.classList.contains("esconder")){
        window.location.hash = '#ondaRaioX-modal';
        
    }else{
        window.location.hash = '#ondaRaioX';
    }
});

//botao ondas raio Gama
const botao_raioG = document.querySelector("#ondaGama");
const raioG_modal = document.querySelector("#ondaRaioGama-modal");

botao_raioG.addEventListener('click', () =>{
    raioG_modal.classList.toggle("esconder");

    if(!raioG_modal.classList.contains("esconder")){
        window.location.hash = '#ondaRaioGama-modal';
        
    }else{
        window.location.hash = '#ondaGama';
    }
});

//botao ondas de Luz:
const botao_ondaLuz = document.getElementById("ondaLuz");
const ondaLuz_modal = document.querySelector("#ondaLuzVisivel-modal");

botao_ondaLuz.addEventListener('click', ()=>{
    ondaLuz_modal.classList.toggle("esconder");

    if(!ondaLuz_modal.classList.contains("esconder")){
        window.location.hash = '#ondaLuzVisivel-modal';
        
    }else{
        window.location.hash = '#ondaLuz';
    }
});

//botao ondas ultravioleta:
const botao_ondaUltra = document.getElementById("ondaUltra");
const ondaUltravioleta_modal = document.querySelector("#ondaUltravioleta-modal");

botao_ondaUltra.addEventListener('click', ()=>{
    ondaUltravioleta_modal.classList.toggle("esconder");

    if(!ondaUltravioleta_modal.classList.contains("esconder")){
        window.location.hash = '#ondaUltravioleta-modal';
        
    }else{
        window.location.hash = '#ondaUltra';
    }
});




//modal ondas radio onde são usadas:

//radar
const buttonRad = document.getElementById("radares");
const radarModal = document.getElementById("radar-modal");
const fecharRadar = document.getElementById("fecharRadar");

buttonRad.addEventListener('click', () =>{
    radarModal.showModal();
})
fecharRadar.addEventListener('click', () =>{
    radarModal.close();
});

//satelite
const buttonSate = document.getElementById("satelites");
const sateliteModal = document.getElementById("satelite-modal");
const fecharSatelit = document.getElementById("fecharSatelite");

buttonSate.addEventListener('click', () =>{
    sateliteModal.showModal();
})
fecharSatelit.addEventListener('click', () =>{
    sateliteModal.close();
});

//telefone movel
const buttonTelefone = document.getElementById("telefone");
const telefoneModal = document.getElementById("telefone-modal");
const fecharTelefone = document.getElementById("fecharTelefone");

buttonTelefone.addEventListener('click', () =>{
    telefoneModal.showModal();
})
fecharTelefone.addEventListener('click', () =>{
    telefoneModal.close();
});

//tv digital
const buttonTv = document.getElementById("tvDigital");
const tvModal = document.getElementById("tv-modal");
const fecharTV = document.getElementById("fecharTV");

buttonTv.addEventListener('click', () =>{
    tvModal.showModal();
})
fecharTV.addEventListener('click', () =>{
    tvModal.close();
});

//radio FM
const buttonFm = document.getElementById("radioFm");
const fmModal = document.getElementById("radioFm-modal");
const fecharfm = document.getElementById("fecharRadioFm");

buttonFm.addEventListener('click', () =>{
    fmModal.showModal();
})
fecharfm.addEventListener('click', () =>{
    fmModal.close();
});


//modal ondas microondas onde são usadas:

//forno
const buttonForno = document.getElementById("fornos");
const fornoModal = document.getElementById("forno-modal");
const fecharForno = document.getElementById("fecharForno");

buttonForno.addEventListener('click', () =>{
    fornoModal.showModal();
})
fecharForno.addEventListener('click', () =>{
    fornoModal.close();
});

//Medicina
const buttonMedicina = document.getElementById("medicina");
const medicinaModal = document.getElementById("medicina-modal");
const fecharMedicina = document.getElementById("fecharMedicina");

buttonMedicina.addEventListener('click', () =>{
    medicinaModal.showModal();
})
fecharMedicina.addEventListener('click', () =>{
    medicinaModal.close();
});

//Sensor
const buttonSensor = document.getElementById("sensor");
const sensorModal = document.getElementById("sensor-modal");
const fecharSensor = document.getElementById("fecharSensor");

buttonSensor.addEventListener('click', () =>{
    sensorModal.showModal();
})
fecharSensor.addEventListener('click', () =>{
    sensorModal.close();
});

//Energia
const buttonEnergia = document.getElementById("energia");
const energiaModal = document.getElementById("energia-modal");
const fecharEnergia = document.getElementById("fecharEnergia");

buttonEnergia.addEventListener('click', () =>{
    energiaModal.showModal();
})
fecharEnergia.addEventListener('click', () =>{
    energiaModal.close();
});

//modal ondas infravermelha onde são usadas:

//controleR
const buttoncontroleR = document.getElementById("controleR");
const controleRModal = document.getElementById("controleR-modal");
const fecharControleR = document.getElementById("fecharControleR");

buttoncontroleR.addEventListener('click', () =>{
    controleRModal.showModal();
})
fecharControleR.addEventListener('click', () =>{
    controleRModal.close();
});

//termografia
const buttonTermografia = document.getElementById("termografia");
const termografiaModal = document.getElementById("termografia-modal");
const fecharTermografia = document.getElementById("fecharTermografia");

buttonTermografia.addEventListener('click', () =>{
    termografiaModal.showModal();
})
fecharTermografia.addEventListener('click', () =>{
    termografiaModal.close();
});

//visaoNoturna
const buttonVisaoN = document.getElementById("visaoNoturna");
const visaoNModal = document.getElementById("visaoN-modal");
const fecharVisaoN = document.getElementById("fecharVisaoN");

buttonVisaoN.addEventListener('click', () =>{
    visaoNModal.showModal();
})
fecharVisaoN.addEventListener('click', () =>{
    visaoNModal.close();
});

//comunicacao
const buttonComunicacao = document.getElementById("comunicacao");
const comunicacaoOModal = document.getElementById("comunicacaoO-modal");
const fecharComunicacaoO = document.getElementById("fecharComunicacaoO");

buttonComunicacao.addEventListener('click', () =>{
    comunicacaoOModal.showModal();
})
fecharComunicacaoO.addEventListener('click', () =>{
    comunicacaoOModal.close();
});

//aquecimento
const buttonAquecimento = document.getElementById("aquecimento");
const aquecimentoModal = document.getElementById("aquecimento-modal");
const fecharAquecimento = document.getElementById("fecharAquecimento");

buttonAquecimento.addEventListener('click', () =>{
    aquecimentoModal.showModal();
})
fecharAquecimento.addEventListener('click', () =>{
    aquecimentoModal.close();
});


//modal ondas raio X onde são usadas:

//radiografiaX
const buttonRadiografiaX = document.getElementById("radiografiaX");
const radiografiaXModal = document.getElementById("radiografiaX-modal");
const fecharRadiografiaX = document.getElementById("fecharRadiografiaX");

buttonRadiografiaX.addEventListener('click', () =>{
    radiografiaXModal.showModal();
})
fecharRadiografiaX.addEventListener('click', () =>{
    radiografiaXModal.close();
});

//tomografia
const buttonTomografia = document.getElementById("tomografia");
const tomografiaModal = document.getElementById("tomografia-modal");
const fecharTomografia = document.getElementById("fecharTomografia");

buttonTomografia.addEventListener('click', () =>{
    tomografiaModal.showModal();
})
fecharTomografia.addEventListener('click', () =>{
    tomografiaModal.close();
});

//segurancaA
const buttonsegurancaA = document.getElementById("segurancaA");
const segurancaAModal = document.getElementById("segurancaA-modal");
const fecharSegurancaA = document.getElementById("fecharSegurancaA");

buttonsegurancaA.addEventListener('click', () =>{
    segurancaAModal.showModal();
})
fecharSegurancaA.addEventListener('click', () =>{
    segurancaAModal.close();
});

//radioterapiaX
const buttonradioterapia = document.getElementById("radioterapia");
const radioterapiaXModal = document.getElementById("radioterapiaX-modal");
const fecharRadioterapiaX = document.getElementById("fecharRadioterapiaX");

buttonradioterapia.addEventListener('click', () =>{
    radioterapiaXModal.showModal();
})
fecharRadioterapiaX.addEventListener('click', () =>{
    radioterapiaXModal.close();
});

//exploracaoEs
const buttonexploracaoEs = document.getElementById("exploracaoEs");
const exploracaoEsModal = document.getElementById("exploracaoEs-modal");
const fecharExploracaoEs = document.getElementById("fecharExploracaoEs");

buttonexploracaoEs.addEventListener('click', () =>{
    exploracaoEsModal.showModal();
})
fecharExploracaoEs.addEventListener('click', () =>{
    exploracaoEsModal.close();
});


//modal ondas raio Gama onde são usadas:

//radioterapiaG
const buttonradiotG = document.getElementById("radioterapiaG");
const radioterapiaGModal = document.getElementById("radioterapiaG-modal");
const fecharRadioterapiaG = document.getElementById("fecharRadioterapiaG");

buttonradiotG.addEventListener('click', () =>{
    radioterapiaGModal.showModal();
})
fecharRadioterapiaG.addEventListener('click', () =>{
    radioterapiaGModal.close();
});

//esterizacaoG
const buttonesterizacaoG = document.getElementById("esterizacaoG");
const esterelizacaoGModal = document.getElementById("esterelizacaoG-modal");
const fecharEsterilizacaoG = document.getElementById("fecharEsterilizacaoG");

buttonesterizacaoG.addEventListener('click', () =>{
    esterelizacaoGModal.showModal();
})
fecharEsterilizacaoG.addEventListener('click', () =>{
    esterelizacaoGModal.close();
});

//astrofisicaG
const buttonastrofisicaG = document.getElementById("astrofisicaG");
const astrofisicaGModal = document.getElementById("astrofisicaG-modal");
const fecharAstrofisicaG = document.getElementById("fecharAstrofisicaG");

buttonastrofisicaG.addEventListener('click', () =>{
    astrofisicaGModal.showModal();
})
fecharAstrofisicaG.addEventListener('click', () =>{
    astrofisicaGModal.close();
});

//exploracaoG
const buttonexploracaoG = document.getElementById("exploracaoG");
const exploracaoRModal = document.getElementById("exploracaoR-modal");
const fecharExploracaoR = document.getElementById("fecharExploracaoR");

buttonexploracaoG.addEventListener('click', () =>{
    exploracaoRModal.showModal();
})
fecharExploracaoR.addEventListener('click', () =>{
    exploracaoRModal.close();
});

//radioIndustrial
const buttonradioIndustrial = document.getElementById("radioIndustrial");
const radioIndustrialModal = document.getElementById("radioIndustrial-modal");
const fecharRadioIndus = document.getElementById("fecharRadioIndus");

buttonradioIndustrial.addEventListener('click', () =>{
    radioIndustrialModal.showModal();
})
fecharRadioIndus.addEventListener('click', () =>{
    radioIndustrialModal.close();
});

//modal ondas de luz onde são usadas:

//iluminacao
const buttoniluminacaoL = document.getElementById("iluminacaoL");
const iluminacaoModal = document.getElementById("iluminacao-modal");
const fecharIluminacao = document.getElementById("fecharIluminacao");

buttoniluminacaoL.addEventListener('click', () =>{
    iluminacaoModal.showModal();
})
fecharIluminacao.addEventListener('click', () =>{
    iluminacaoModal.close();
});

//fotografia
const buttonfotografia = document.getElementById("fotografia");
const fotografiaModal = document.getElementById("fotografia-modal");
const fecharFotografia = document.getElementById("fecharFotografia");

buttonfotografia.addEventListener('click', () =>{
    fotografiaModal.showModal();
})
fecharFotografia.addEventListener('click', () =>{
    fotografiaModal.close();
});

//comunicacaoOL
const buttoncomunicaçõesL = document.getElementById("comunicaçõesL");
const comunicacaoOLModal = document.getElementById("comunicacaoOL-modal");
const fecharComunicacao = document.getElementById("fecharComunicacao");

buttoncomunicaçõesL.addEventListener('click', () =>{
    comunicacaoOLModal.showModal();
})
fecharComunicacao.addEventListener('click', () =>{
    comunicacaoOLModal.close();
});

//cienciaM
const buttonciênciaM = document.getElementById("ciênciaM");
const cienciaMModal = document.getElementById("cienciaM-modal");
const fecharCienciaM = document.getElementById("fecharCienciaM");

buttonciênciaM.addEventListener('click', () =>{
    cienciaMModal.showModal();
})
fecharCienciaM.addEventListener('click', () =>{
    cienciaMModal.close();
});

//energiaSolar
const buttonenergiaSolar = document.getElementById("energiaSolar");
const energiaSolarModal = document.getElementById("energiaSolar-modal");
const fecharEnergiaS = document.getElementById("fecharEnergiaS");

buttonenergiaSolar.addEventListener('click', () =>{
    energiaSolarModal.showModal();
})
fecharEnergiaS.addEventListener('click', () =>{
    energiaSolarModal.close();
});

//modal cores:

//vermelho
const divVermelho = document.getElementById("divVermelho");
const vermelhoModal = document.getElementById("vermelhoModal");
const fecharVermelho = document.getElementById("fecharVermelho");

divVermelho.addEventListener('click', () =>{
    vermelhoModal.showModal();
})
fecharVermelho.addEventListener('click', () =>{
    vermelhoModal.close();
});

//laranja
const divLaranja = document.getElementById("divLaranja");
const laranjaModal = document.getElementById("laranjaModal");
const fecharLaranja = document.getElementById("fecharLaranja");

divLaranja.addEventListener('click', () =>{
    laranjaModal.showModal();
})
fecharLaranja.addEventListener('click', () =>{
    laranjaModal.close();
});


//amarelo
const divAmarelo = document.getElementById("divAmarelo");
const amareloModal = document.getElementById("amareloModal");
const fecharAmarelo = document.getElementById("fecharAmarelo");

divAmarelo.addEventListener('click', () =>{
    amareloModal.showModal();
})
fecharAmarelo.addEventListener('click', () =>{
    amareloModal.close();
});


//verde
const divVerde = document.getElementById("divVerde");
const verdeModal = document.getElementById("verdeModal");
const fecharVerde = document.getElementById("fecharVerde");

divVerde.addEventListener('click', () =>{
    verdeModal.showModal();
})
fecharVerde.addEventListener('click', () =>{
    verdeModal.close();
});


//azul
const divAzul = document.getElementById("divAzul");
const azulModal = document.getElementById("azulModal");
const fecharAzul = document.getElementById("fecharAzul");

divAzul.addEventListener('click', () =>{
    azulModal.showModal();
})
fecharAzul.addEventListener('click', () =>{
    azulModal.close();
});

//violeta
const divVioleta = document.getElementById("divVioleta");
const violetaModal = document.getElementById("violetaModal");
const fecharVioleta = document.getElementById("fecharVioleta");

divVioleta.addEventListener('click', () =>{
    violetaModal.showModal();
})
fecharVioleta.addEventListener('click', () =>{
    violetaModal.close();
});



//modal ondas ultravioletas onde são usadas:

//esterelizaUl
const buttonesterilizaçãoUl = document.getElementById("esterilizaçãoUl");
const esterelizaUlModal = document.getElementById("esterelizaUl-modal");
const fecharEsterilizaUl = document.getElementById("fecharEsterilizaUl");

buttonesterilizaçãoUl.addEventListener('click', () =>{
    esterelizaUlModal.showModal();
})
fecharEsterilizaUl.addEventListener('click', () =>{
    esterelizaUlModal.close();
});

//vitamina
const buttonvitamina = document.getElementById("vitamina");
const vitaminaModal = document.getElementById("vitamina-modal");
const fecharVitamina = document.getElementById("fecharVitamina");

buttonvitamina.addEventListener('click', () =>{
    vitaminaModal.showModal();
})
fecharVitamina.addEventListener('click', () =>{
    vitaminaModal.close();
});

//lampadaUv
const buttondetectores = document.getElementById("detectores");
const lampadaUvModal = document.getElementById("lampadaUv-modal");
const fecharLampadaUv = document.getElementById("fecharLampadaUv");

buttondetectores.addEventListener('click', () =>{
    lampadaUvModal.showModal();
})
fecharLampadaUv.addEventListener('click', () =>{
    lampadaUvModal.close();
});

//astronomiaF
const buttonastronomiaUL = document.getElementById("astronomiaUL");
const astronomiaFModal = document.getElementById("astronomiaF-modal");
const fecharAstronomiaF = document.getElementById("fecharAstronomiaF");

buttonastronomiaUL.addEventListener('click', () =>{
    astronomiaFModal.showModal();
})
fecharAstronomiaF.addEventListener('click', () =>{
    astronomiaFModal.close();
});

//radioIndustrial
const buttontratamentoA = document.getElementById("tratamentoA");
const tratamentoAModal = document.getElementById("tratamentoA-modal");
const fecharTratamentoA = document.getElementById("fecharTratamentoA");

buttontratamentoA.addEventListener('click', () =>{
    tratamentoAModal.showModal();
})
fecharTratamentoA.addEventListener('click', () =>{
    tratamentoAModal.close();
});

//modais UV:
//uva:
const divUva = document.getElementById("divUva");
const UVAmodal = document.getElementById("UVA-modal");
const fecharUVA = document.getElementById("fecharUVA");

divUva.addEventListener('click', () =>{
    UVAmodal.showModal();
})
fecharUVA.addEventListener('click', () =>{
    UVAmodal.close();
});

//uvb:
const divUvb = document.getElementById("divUvb");
const UVBModal = document.getElementById("UVB-modal");
const fecharUVB = document.getElementById("fecharUVB");

divUvb.addEventListener('click', () =>{
    UVBModal.showModal();
})
fecharUVB.addEventListener('click', () =>{
    UVBModal.close();
});

//uvc:
const divUvc = document.getElementById("divUvc");
const UVCModal = document.getElementById("UVC-modal");
const fecharUVC = document.getElementById("fecharUVC");

divUvc.addEventListener('click', () =>{
    UVCModal.showModal();
})
fecharUVC.addEventListener('click', () =>{
    UVCModal.close();
});

