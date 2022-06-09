var inicioPadrao 		= 0;
var inicioProcesso 		= 4;
var processamento 		= 5;
var ajustarSolicitacao 	= 13;
var gestorImediato 		= 9;
var gerhClassificar 	= 11;


function beforeStateEntry(sequenceId){
	log.info("SolicRenovaBolsaEstudos.beforeStateEntry: "+sequenceId);
	
    if (sequenceId == processamento) {
    	VerificandoAnexo();
    }
}

function VerificandoAnexo(){
	try { 
		log.info("==========[ VerificandoAnexo ENTROU ]==========");
		
		// VERIFICANDO SE TEM ANEXOS - INICIO //
		var anexos   = hAPI.listAttachments();
        var temAnexo = false;

        if (anexos.size() > 0) {
            temAnexo = true;
        }
        if (!temAnexo) {
            throw "É preciso anexar um folder do curso para continuar o processo!";
        }
	}
	
	catch (e) 	{
		log.error(e);
		throw e;
		}
}	