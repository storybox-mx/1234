$.cambiarestado.addEventListener('androidback',function(e){
   //escribimos esto para cancelar la accion de cerrar
    e.cancelBubble=true;
    //Aqui escribimos el codigo que queremos que ejecute cuando se presiona el boton back
    var irahome = Alloy.createController('index').getView();
	irahome.open();
});

//FUNCIONES DE ESTADOS
	//MUESTRA DIALOG DE CAMBIO DE ESTADO
	function btn_nuevoestado(e){
		$.dialog.show();
		//alert("Haz cambiado tu estado");
		//var irahome = Alloy.createController('index').getView();
	};
	function confestado(e){
		var irahome = Alloy.createController('index').getView();
	};
	