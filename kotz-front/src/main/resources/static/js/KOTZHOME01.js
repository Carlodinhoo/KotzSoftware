$(function($, window, document){
	$(function(){
		console.log("hola mundo jquery");
	});
}(window.jQuery, window, document));

function cargarContenido(pagina, titulo){
	$(".container").show();
	$("#contenido").empty();
	$("#titulo_seccion").html("");
	$("#contenido").load(pagina+'.html');
	$("#titulo_seccion").html(titulo);
}

