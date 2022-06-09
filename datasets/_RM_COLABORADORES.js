function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/FluigRM"; 
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    
    log.info("QUERY _RM_COLABORADORES constraints: " + constraints);
    
    
    var codusuario_chefe 	= "";
    var codusuario 			= "";
    
    for (var i = 0; i < constraints.length; i++) {
    	if (constraints[i].fieldName == 'CODUSUARIO_CHEFE') {
    		codusuario_chefe = constraints[i].initialValue;
            }
        if (constraints[i].fieldName == 'CODUSUARIO') {
        	var codusuario = constraints[i].initialValue;
            }
        }

    
    if (codusuario == "" && codusuario_chefe != "") {
    	var myQuery = "SELECT * FROM _Fluig_Colaboradores where codusuario_chefe = "+"'"+codusuario_chefe+"' order by 1";
    }
    else if (codusuario != "" && codusuario_chefe == ""){
    	var myQuery = "SELECT * FROM _Fluig_Colaboradores where codusuario like "+"'"+codusuario+"%' order by 1";
    }
    else {
    	var myQuery = "SELECT * FROM _Fluig_Colaboradores where codusuario_chefe = "+"'"+codusuario_chefe+"'"+" and codusuario like "+"'"+codusuario+"%' order by 1";
    } 
    
    log.info("QUERY _RM_COLABORADORES: " + myQuery);
    
    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
                for (var i = 1; i <= columnCount; i++) {
                    newDataset.addColumn(rs.getMetaData().getColumnName(i));
                }
                created = true;
            }
            var Arr = new Array();
            for (var i = 1; i <= columnCount; i++) {
                var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                if (null != obj) {
                    Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                } else {
                    Arr[i - 1] = "null";
                }
            }
            newDataset.addRow(Arr);
        }
    } catch (e) {
        log.error("ERRO==============> " + e.message);
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return newDataset;
}

/*
function defineStructure() {
}
function onSync(lastSyncDate) {
}
function createDataset(fields, constraints, sortFields) {
}function onMobileSync(user) {
}
*/