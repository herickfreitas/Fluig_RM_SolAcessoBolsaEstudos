
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
       
    log.info("DATASET _FLUIG_INSC_BOLSA_ESTUDOS ENTROU " );
    
    //Cria as colunas
    dataset.addColumn("PERIODO");
    
      
    //Cria os registros
    dataset.addRow(new Array("2022 - 2º Semestre"));
    dataset.addRow(new Array("2023 - 1º Semestre"));


     
    return dataset;


}



/*
function defineStructure() {

}
function onSync(lastSyncDate) {

}

function onMobileSync(user) {

}
*/