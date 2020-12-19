$(function(){
	console.log("hola mundo");
});

function cargarContenido(pagina, titulo){
	$(".container").show();
	$("#contenido").empty();
	$("#titulo_seccion").html("");
	$("#contenido").load(pagina+'.html');
	$("#titulo_seccion").html(titulo);
}

function cargar(){
	$(".container").hide();
}