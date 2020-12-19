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
	
},{
	title: 'Eventos',
	formatter: 'operateFormatter',
	events: 'operateEvents'
}
];

$(function(){
	
//	consultarEmpleados().done(function(data){
//		llenadoTablaEmpleado(columnas, data.response);	
//	});
	tablaEmpleadosURL();
		
		
});

//$('#tablaEmpleados').bootstrapTable({
//columns: columnas
//});

//llenar la tabla con data, para hacer refresh con 
//data hay que destruir la tabla y volver a cargar la info
function llenadoTablaEmpleado(columns, data) {
	$('#tablaEmpleados').bootstrapTable({
		scrolly: 100,
		scrollx: true,
		scrollCollapse: true,
		pagination: true,
		pageSize: 5,
		pageList: [5, 25, 50],
		columns: columnas,
        clickToSelect: false,
        singleSelect: false,
        maintainSelected: true,
        sortable: true,
        checkboxHeader: false,
        data: data,
//        sidePagination: 'server',
//        url: "/EmpleadoController/consultaEmpleados",
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
		async : false
	});
}

function tablaEmpleadosURL(){
	$tablaEmpleados.bootstrapTable('destroy').bootstrapTable({
		pagination: true,
		pageSize: 5,
		pageList: [5, 25, 50],
		sortable: true,
		side-pagination: 'server',
		url: "/EmpleadoController/consultaEmpleados",
		esponse-handler: 'responseHandler'
	});
}
