function beforeCancelProcess(colleagueId,processId){
	   var usuarioAtual = getValue('WKUser');
	   var solicitante  = hAPI.getCardValue("solicitante");
	   
	   if(usuarioAtual == solicitante){
	         throw 'Voce não pode cancelar essa solicitação.';
	   }
	
}