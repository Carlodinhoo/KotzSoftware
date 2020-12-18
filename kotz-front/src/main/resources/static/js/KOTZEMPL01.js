var columnas = [{
	title: 'ID Empleado',
	field: 'idEmpleado',
	sortable: true
//	formatter: 'formatterDate'
},{
	title: 'Nombre',
	field: 'nbNombre',
	sortable: true
},{
	title: 'Empresa',
	field: 'nbEmpresa',
	sortable: true
},{
	title: 'Telefono',
	field: 'cdTelefono',
	sortable: true
}
];

$(function(){
		
		llenadoTablaEmpleado(columnas);
		
//		prueba().done(data) => {
//			console.log(`se ejecuto la prueba`);
//		});
	
});


function llenadoTablaEmpleado(columns) {
	$('#tablaPerfil').bootstrapTable({
		pagination: true,
		pageSize: 5,
		pageList: [5, 25, 50],
		columns: columnas,
        clickToSelect: false,
        singleSelect: false,
        maintainSelected: true,
        sortable: true,
        checkboxHeader: false,
//        data: data,
        sidePagination: 'server',
        url: "/EmpleadoController/consultaEmpleados",
        queryParams: 'queryParams',
		responseHandler : 'responseHandler',
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Mostrando ' + pageFrom + ' al ' + pageTo + ' de ' + totalRows + ' registros';
        },
        formatRecordsPerPage: function (pageNumber) {
        	return pageNumber + ' registros por p\u00e1gina';
        },
        formatLoadingMessage: function () {
        	return 'Cargando, espere por favor...';
        },
        formatSearch: function () {
        	return 'Buscar';
        },
        formatNoMatches: function () {
        	return 'No se encontr&oacute; informaci&oacute;n';
        }      
    });
}

function queryParams(params) {
    return {
        limit: params.limit,
        offset: params.offset,
        search: params.search,
        name: params.sort,
        order: params.sort != undefined && params.sort != null ? params.order : "asc"
    };
}

function responseHandler(res) {
	return {
        rows: res.response.rows,
        total: res.response.total
    };
}

function consultarEmpleados(){
	return $.ajax({
		url : "/EmpleadoController/consultaEmpleados",
		type : "GET",
		async : true
	});
}

function formatterDetailPerfil(value, row, index){
	
	let nombres = row.nombre==null?"":row.nombre;
	return['<table class="tableForm>'+
		'<tr><td class="tdDetail"><b>Nombre</b> '+nombres+'</td></tr>'+
	'</table>'].join('');
}

function btnGuardarCliente(){
	var objeto = recolectarCampos();
	guardarEmpleado(objeto).done(function(data){
		console.log(`respuesta ${data.response}`);
		console.log(`data ${data}`);
		if(data != null){
			console.log("se refresca");
			$('#tablaPerfil').bootstrapTable('refresh', {
				url: "/EmpleadoController/consultaEmpleados",
			});
			$("#modalEmpleados").hide();
		}
	});
	
}

function modalEmpleados(title){
	$("#titleModalEmpleados").html(title);
	$("#modalEmpleados").modal();
}

function recolectarCampos(){
	var objeto = new Object();
	objeto.nbNombre = $("#nbNombreEmpleado").val() != "" ? $("#nbNombreEmpleado").val() : null;
	objeto.nbEmpresa = $("#nbEmpresaEmpleado").val() != "" ? $("#nbEmpresaEmpleado").val() : null;
	objeto.cdTelefono = $("#cdTelefonoEmpleado").val() != "" ? $("#cdTelefonoEmpleado").val() : null;
	
	return objeto;
}

function guardarEmpleado(objeto){
	return $.ajax({
		url : "/EmpleadoController/guardarCliente",
		type: "POST",
		contentType: 'application/json',
		dataType: 'json',
		data: JSON.stringify(objeto),
		asyc: true
	});
}
