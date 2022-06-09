function validateForm(form){
	var activity 			= getValue('WKNumState');
	var nextActivity 		= getValue('WKNextState');
	var inicioPadrao 		= 0;
	var inicioProcesso 		= 4;
	var processamento 		= 5;
	var ajustarSolicitacao 	= 13;
	var gestorImediato 		= 9;
	var gerhClassificar 	= 11;
	var gerhConsolidar 		= 26;
	
	log.info("validateForm WKNumState "+activity);
	
	if ((activity == inicioPadrao) || (activity == inicioProcesso)) {

		// BOLSA DE ESTUDOS
		var msg = "";
		var hasErros = false;
		
        if (form.getValue('radioTipoBolsa') == ""){
			msg += "Nova bolsa ou Renovação da bolsa tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('radioCurso') == ""){
			msg += "Nível do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('curso') == ""){
			msg += "Nome do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
		if (form.getValue('instituicao') == ""){
			msg += "Instituição de ensino tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('radioLocal') == ""){
			msg += "Local do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}		
		if (form.getValue('horarioEntrada') == ""){
			msg += "Horário de entrada tem preenchimento obrigatório. \n";
			var hasErros = true;
			}
		if (form.getValue('horarioSaida') == ""){
			msg += "Horário saída tem preenchimento obrigatório. \n";
			var hasErros = true;
			}
		//CUSTOS
        if (form.getValue('valorMensalidade') == ""){
			msg += "Valor da mensalidade tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('qtdParcelas') == ""){
			msg += "Quantidade de parcelas tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('duracaoCurso') == ""){
			msg += "Duração do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('periodo') == ""){
			msg += "Período do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('inicioCurso') == ""){
			msg += "Início do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}
        if (form.getValue('terminoCurso') == ""){
			msg += "Término do curso tem preenchimento obrigatório.\n";
			var hasErros = true;
			}        
        
		if (hasErros == true) {
			throw msg;
			}
	}

	else if ( activity == gestorImediato ){
		var msg = "";
		var hasErros = false;
		
        if (form.getValue('justificativa') == ""){
			msg += "Justificativa tem preenchimento obrigatório.\n";
			var hasErros = true;
			}  
        
		if (hasErros == true) {
			throw msg;
			}
	}	
	
	
	else if ( nextActivity == gerhConsolidar ){
		var msg = "";
		var hasErros = false;
		
        if (form.getValue('periodoInscricao') == ""){
			msg += "Período de inscricao tem seleção obrigatória.\n";
			var hasErros = true;
			}  
        if (form.getValue('resultadoClassificacao') == ""){
			msg += "É preciso totalizar a classificação do candidato.\n";
			var hasErros = true;
			} 
        
        
		if (hasErros == true) {
			throw msg;
			}
	}
	
}