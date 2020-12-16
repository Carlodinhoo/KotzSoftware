(function($,window,document){
	
	$(function(){
		console.log("Hola mundo desde javascript");
		
		consultarEmpleados().done(function(data){
			llenadoTablaEmpleado(data.response, columnas);
		});
	});
	
}(window.jQuery, window, document));

var columnas = [{
	title: 'ID Empleado',
	field: 'cdEmpleado',
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


function llenadoTablaEmpleado(data, columns) {
	$('#tablaPerfil').bootstrapTable('destroy').bootstrapTable({
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
        sidePagination: 'server',
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
	
	var nombres = row.nombre==null?"":row.nombre;
	return['<table class="tableForm>'+
		'<tr><td class="tdDetail"><b>Nombre</b> '+nombres+'</td></tr>'+
	'</table>'].join('');
}