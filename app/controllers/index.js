//FUNCIONES SCAN
var scanditsdk = require("com.mirasense.scanditsdk");
// disable the status bar for the camera view on the iphone and ipad
if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad'){
        Titanium.UI.iPhone.statusBarHidden = true;
    }
var picker;
// Create a window to add the picker to and display it. 
var window = Titanium.UI.createWindow({  
        title:'Scandit SDK',
        navBarHidden:true
});
//FUNCIONES BOTONES
function cambiarestado(e){
	//alert('click cambiar estado');    
	var cambiarestado = Alloy.createController('cambiarestado').getView();
	cambiarestado.open();
};

function chat(e){
	//alert('click cambiar chat');
	var inbox = Alloy.createController('inbox').getView();
	inbox.open();
};

function eventos(e){
	var eventos = Alloy.createController('eventos').getView();
	eventos.open();
};

function avisos(e){
	var avisos = Alloy.createController('notificaciones').getView();
	avisos.open();
};

function buscar(e){
	var buscar = Alloy.createController('buscar').getView();
	buscar.open();
};

function menutoplateral(e){
	var menutoplateral = Alloy.createController('menuleft').getView();
	menutoplateral.open();
};

function doClick(e){
	alert('click hotbottom');
};
function openscan(e){
	//var openqr = Alloy.createController('scanqr').getView();
	//openqr.open();
	openScanner();
};
//Scaner
var openScanner = function() {
    // Instantiate the Scandit SDK Barcode Picker view
    picker = scanditsdk.createView({
        width:"100%",
        height:"100%"
    });
    // Initialize the barcode picker, remember to paste your own app key here.
    picker.init("rsaYGOKUEeOPY4HVTyBKUVusIyb6iHKm5lLxAqiLXnI", 0);
    picker.showSearchBar(true);
    // add a tool bar at the bottom of the scan view with a cancel button (iphone/ipad only)
    picker.showToolBar(true);
    // Set callback functions for when scanning succeedes and for when the 
    // scanning is canceled.
    picker.setSuccessCallback(function(e) {
        alert("success (" + e.symbology + "): " + e.barcode);
    });
    picker.setCancelCallback(function(e) {
        closeScanner();
    });
    window.add(picker);
    window.addEventListener('open', function(e) {
        // Adjust to the current orientation.
        // since window.orientation returns 'undefined' on ios devices 
        // we are using Ti.UI.orientation (which is deprecated and no longer 
        // working on Android devices.)
        if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad'){
            picker.setOrientation(Ti.UI.orientation);
        }   
        else {
            picker.setOrientation(window.orientation);
        }
        
        picker.setSize(Ti.Platform.displayCaps.platformWidth, 
                       Ti.Platform.displayCaps.platformHeight);
        picker.startScanning();     // startScanning() has to be called after the window is opened. 
    });
    window.open();
};
// Stops the scanner, removes it from the window and closes the latter.
var closeScanner = function() {
    if (picker != null) {
        picker.stopScanning();
        window.remove(picker);
    }
    //window.close();
};

//ALERTDIALOG

//function ANDROID buttons
$.index.addEventListener('androidback',function(e){
   //escribimos esto para cancelar la accion de cerrar
    e.cancelBubble=true;
    //Aqui escribimos el codigo que queremos que ejecute cuando se presiona el boton back
    //var irahome = Alloy.createController('index').getView();
	//irahome.open();
	$.index.close();

});

$.index.open();