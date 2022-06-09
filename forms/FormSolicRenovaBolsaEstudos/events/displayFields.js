function displayFields(form,customHTML){ 

	var activity 			= getValue('WKNumState');
	var inicioPadrao 		= 0;
	var inicioProcesso 		= 4;
	var processamento 		= 5;
	var ajustarSolicitacao 	= 13;
	var gestorImediato 		= 9;
	var gerhClassificar 	= 11;
	var gerhConsolidar 		= 26;


if	(activity == inicioPadrao || activity == inicioProcesso){
	
	// capturar usuario corrente
	var usuarioSolicitante = getDadosUsuario().getLogin();
	form.setValue("solicitante",usuarioSolicitante);
	
	// Formatando em minúsculo
	var codusuario = usuarioSolicitante.toLowerCase();
	log.info("==========[ displayFields codusuario ]=========="+codusuario);
	
	// Preparacao de filtro para consulta
	var filtro = DatasetFactory.createConstraint("CODUSUARIO", codusuario, codusuario, ConstraintType.MUST);
	var constraints = new Array(filtro);
	log.info("==========[ displayFields createDataset constraints ]========== " + constraints);
	
	// coleta dados do dataset, utlizando filtro
	var datasetReturned = DatasetFactory.getDataset("_RM_COLABORADORES", null, constraints, null);
	log.info("==========[ displayFields createDataset datasetReturned ] ========== " + datasetReturned);	  
		    
	// Gravando valores de retorno
	var retorno = datasetReturned.values;
	log.info("==========[ displayFields createDataset dataset ]========== " + retorno);
		
	// Retirando o campo do resultado
	var nomeEmpregado = datasetReturned.getValue(0, "COLABORADOR");
	log.info("==========[ displayFields createDataset nomeEmpregado ]========== " + nomeEmpregado);

	// Retirando o campo do resultado
	var dataAdmissao = datasetReturned.getValue(0, "DATAADMISSAO");
	log.info("==========[ displayFields createDataset dataAdmissao ]========== " + dataAdmissao);
	
	// Retirando o campo do resultado
	var funcao = datasetReturned.getValue(0, "NOME_FUNCAO");
	log.info("==========[ displayFields createDataset funcao ]========== " + funcao);
	
	// Retirando o campo do resultado
	var lotacao = datasetReturned.getValue(0, "NOME_SECAO");
	log.info("==========[ displayFields createDataset lotacao ]========== " + lotacao);
	
	// Retirando o campo do resultado
	var gestorcc = datasetReturned.getValue(0, "CODUSUARIO_CHEFE");
	log.info("==========[ displayFields createDataset gestorcc ]========== " + gestorcc);

	// Retirando o campo do resultado
	var tempoCasa = datasetReturned.getValue(0, "TEMPOCASA_ANOS");
	log.info("==========[ displayFields createDataset tempoCasa ]========== " + tempoCasa);

	// Retirando o campo do resultado
	var codfilial = datasetReturned.getValue(0, "CODFILIAL");
	log.info("==========[ displayFields createDataset codfilial ]========== " + codfilial);
	
	//Atribuindo os valores aos formulários
	form.setValue("nomeEmpregado",nomeEmpregado);
	form.setValue("dataAdmissao",dataAdmissao);
	form.setValue("funcao",funcao);
	form.setValue("lotacao",lotacao);
	form.setValue("gestorcc",gestorcc);
	form.setValue("tempoCasa",tempoCasa);
	
	//Atribuindo campo analistaGERH no formulário
	var analistaGERH = ''; 
	if (codfilial == '1') {
		analistaGERH = 'anaclaudia';
	}
	else {
		analistaGERH = 'gabriellamonteiro';
	}
	form.setValue("analistaGERH",analistaGERH);
	
	
	// Classificação por tempo de casa
	var tempoCasaPonto = 0; // menos de 1 ano
	if (parseInt(tempoCasa) > 11) {
		tempoCasaPonto = 4;
	}
	else if (parseInt(tempoCasa) > 6) {
		tempoCasaPonto = 3;
	}
	else if (parseInt(tempoCasa) > 3) {
		tempoCasaPonto = 2;
	}	
	else if (parseInt(tempoCasa) > 1) {
		tempoCasaPonto = 1;
	}
	//Atribuindo informação no form
	form.setValue("tempoCasaPonto",tempoCasaPonto);
	
	}

else if ( activity == gestorImediato ) {
	// Desabilitar campos
    var habilitar = false; 
    var mapaForm = new java.util.HashMap();
    mapaForm = form.getCardData();
    var it = mapaForm.keySet().iterator();

    // Laço de repetição para habilitar/desabilitar os campos
    while (it.hasNext()) { 
        var key = it.next();
        var achou = false;
        //log.info("==========[ displayFields gerhClassificar key ]========== " + key);
        var arrayClassificacao = ['justificativa'];
        for (var i = 0; i < arrayClassificacao.length; i++) {
        	if ( key == arrayClassificacao[i] ){
        		achou = true;
        	}
        }
        if (!achou) {
        	form.setEnabled(key, habilitar);
        }
    }
}


else if ( activity == processamento || activity == gerhConsolidar) {
	// Desabilitar campos
    var habilitar = false; 
    var mapaForm = new java.util.HashMap();
    mapaForm = form.getCardData();
    var it = mapaForm.keySet().iterator();

    // Laço de repetição para habilitar/desabilitar os campos
    while (it.hasNext()) { 
        var key = it.next();
        form.setEnabled(key, habilitar);
    }
}

else if ( activity == gerhClassificar ) {
	// Desabilitar campos
    var habilitar = false; 
    var mapaForm = new java.util.HashMap();
    mapaForm = form.getCardData();
    var it = mapaForm.keySet().iterator();

    // Laço de repetição para habilitar/desabilitar os campos
    while (it.hasNext()) { 
        var key = it.next();
        var achou = false;
        //log.info("==========[ displayFields gerhClassificar key ]========== " + key);
        var arrayClassificacao = ['periodoInscricao','radioSetorPedencias','setorBolsista','radioJaFoiBolsista','radioRelacionadoFuncao','radioEscolaridadeCargo','btnClassificacao','setorPedenciasPonto','setorBolsistaPonto','valorBolsaPonto','escolaridadeCargoPonto','relacionadoFuncaoPonto','jaFoiBolsistaPonto','resultadoClassificacao'];
        for (var i = 0; i < arrayClassificacao.length; i++) {
        	if ( key == arrayClassificacao[i] ){
        		achou = true;
        	}
        }
        if (!achou) {
        	form.setEnabled(key, habilitar);
        }
    }
    
    // Calculando valor da bolsa
    var valorMensalidade = form.getValue('valorMensalidade');
    var qtdParcelas 	 = form.getValue('qtdParcelas');
    // tratando informação
    valorMensalidade = valorMensalidade.replace('.','').replace(',','.'); // Tratando 
    valorMensalidade = parseFloat(valorMensalidade);
    //calculando
    qtdParcelas = parseInt(qtdParcelas);
    var valorBolsa = (qtdParcelas * valorMensalidade);
    //formatando com 2 casas decimais
    valorBolsa = valorBolsa.toFixed(2);
    //gravando no formulário
    form.setValue("valorBolsa",valorBolsa);
    
}


//Tratamento da div classificação
customHTML.append("<script>");
customHTML.append("$(document).ready(function(){ "); 
if (activity == inicioPadrao || activity == inicioProcesso) {
	customHTML.append("$('#dvJustificativa').hide();");
	customHTML.append("$('#dvClassificacao').hide();");
}
else if ((activity != gerhClassificar) && (activity != gerhConsolidar))  {
	customHTML.append("$('#dvClassificacao').hide();");
}
else {
	customHTML.append("$('#dvClassificacao').show();");
}
customHTML.append(" });");
customHTML.append("</script>");
}


// Capturando usuario corrente
function getDadosUsuario(){
    return fluigAPI.getUserService().getCurrent();
}