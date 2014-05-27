$.inbox.addEventListener('androidback',function(e){
   //escribimos esto para cancelar la accion de cerrar
    e.cancelBubble=true;
    //Aqui escribimos el codigo que queremos que ejecute cuando se presiona el boton back
    var irahome = Alloy.createController('index').getView();
	irahome.open();
});
	function btnabrirconversacion(e){
		alert('abir conversación');
	};
	