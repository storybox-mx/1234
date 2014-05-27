$.notificaciones.addEventListener('androidback',function(e){
   //escribimos esto para cancelar la accion de cerrar
    e.cancelBubble=true;
    //Aqui escribimos el codigo que queremos que ejecute cuando se presiona el boton back
    var irahome = Alloy.createController('index').getView();
	irahome.open();
});
//BUTTONS FUNCTIONS
function btnabrirnotif(e){
	alert('Abrir aviso');
};