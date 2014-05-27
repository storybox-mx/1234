$.buscar.addEventListener('androidback',function(e){
   //escribimos esto para cancelar la accion de cerrar
    e.cancelBubble=true;
    //Aqui escribimos el codigo que queremos que ejecute cuando se presiona el boton back
    var irahome = Alloy.createController('index').getView();
	irahome.open();
});

//Buscador FUNCIONS
if (OS_ANDROID && Ti.Platform.Android.API_LEVEL >= 11) {
    // use action bar search view
    var search = Alloy.createController("searchview").getView();
    $.tableview.searchAsChild = false;
    $.tableview.search = search;
    $.buscar.addEventListener("open", function() {
        $.buscar.activity.onCreateOptionsMenu = function(e) {
            e.menu.add({
                title: "Buscar",
                icon: (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),
                actionView: search,
                showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
            });
        };
        $.buscar.activity.invalidateOptionsMenu();
    });
} else {
    // use a search bar
    $.tableview.search = Alloy.createController("searchbar").getView();
}

//BUTTONS FUNCTIONS
function btnabrirnotif(e){
	alert('Abrir aviso');
};
