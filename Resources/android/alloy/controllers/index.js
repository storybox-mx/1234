function Controller() {
    function cambiarestado() {
        var cambiarestado = Alloy.createController("cambiarestado").getView();
        cambiarestado.open();
    }
    function chat() {
        var inbox = Alloy.createController("inbox").getView();
        inbox.open();
    }
    function eventos() {
        var eventos = Alloy.createController("eventos").getView();
        eventos.open();
    }
    function avisos() {
        var avisos = Alloy.createController("notificaciones").getView();
        avisos.open();
    }
    function buscar() {
        var buscar = Alloy.createController("buscar").getView();
        buscar.open();
    }
    function menutoplateral() {
        var menutoplateral = Alloy.createController("menuleft").getView();
        menutoplateral.open();
    }
    function doClick() {
        alert("click hotbottom");
    }
    function openscan() {
        openScanner();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: "true",
        fullscreen: "false",
        title: "Vida BUAP",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#b9bfc3",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.iconBar = Ti.UI.createView({
        backgroundColor: "#01466D",
        width: Ti.UI.FILL,
        left: "0",
        height: "50dp",
        layout: "horizontal",
        id: "iconBar"
    });
    $.__views.main.add($.__views.iconBar);
    $.__views.__alloyId110 = Ti.UI.createView({
        width: "18%",
        height: "85%",
        id: "__alloyId110"
    });
    $.__views.iconBar.add($.__views.__alloyId110);
    $.__views.cambiarestado = Ti.UI.createImageView({
        height: "90%",
        width: "50",
        backgroundImage: "/ico_cambiar_estado.png",
        backgroundSelectedImage: "/ico_cambiar_estado_focus.png",
        id: "cambiarestado"
    });
    $.__views.__alloyId110.add($.__views.cambiarestado);
    cambiarestado ? $.__views.cambiarestado.addEventListener("click", cambiarestado) : __defers["$.__views.cambiarestado!click!cambiarestado"] = true;
    $.__views.__alloyId111 = Ti.UI.createView({
        width: "18%",
        height: "85%",
        id: "__alloyId111"
    });
    $.__views.iconBar.add($.__views.__alloyId111);
    $.__views.chat = Ti.UI.createImageView({
        height: "90%",
        width: "50",
        backgroundImage: "/ico_chat.png",
        backgroundSelectedImage: "/ico_chat_focus.png",
        id: "chat"
    });
    $.__views.__alloyId111.add($.__views.chat);
    chat ? $.__views.chat.addEventListener("click", chat) : __defers["$.__views.chat!click!chat"] = true;
    $.__views.__alloyId112 = Ti.UI.createView({
        width: "18%",
        height: "85%",
        id: "__alloyId112"
    });
    $.__views.iconBar.add($.__views.__alloyId112);
    $.__views.eventos = Ti.UI.createImageView({
        height: "90%",
        width: "50",
        backgroundImage: "/ico_calendario.png",
        backgroundSelectedImage: "/ico_calendario_focus.png",
        id: "eventos"
    });
    $.__views.__alloyId112.add($.__views.eventos);
    eventos ? $.__views.eventos.addEventListener("click", eventos) : __defers["$.__views.eventos!click!eventos"] = true;
    $.__views.__alloyId113 = Ti.UI.createView({
        width: "18%",
        height: "85%",
        id: "__alloyId113"
    });
    $.__views.iconBar.add($.__views.__alloyId113);
    $.__views.avisos = Ti.UI.createImageView({
        height: "90%",
        width: "50",
        backgroundImage: "/ico_notificacion.png",
        backgroundSelectedImage: "/ico_notificacion_focus.png",
        id: "avisos"
    });
    $.__views.__alloyId113.add($.__views.avisos);
    avisos ? $.__views.avisos.addEventListener("click", avisos) : __defers["$.__views.avisos!click!avisos"] = true;
    $.__views.__alloyId114 = Ti.UI.createView({
        width: "18%",
        height: "85%",
        id: "__alloyId114"
    });
    $.__views.iconBar.add($.__views.__alloyId114);
    $.__views.buscar = Ti.UI.createImageView({
        height: "90%",
        width: "50",
        backgroundImage: "/ico_buscar.png",
        backgroundSelectedImage: "/ico_buscar_focus.png",
        id: "buscar"
    });
    $.__views.__alloyId114.add($.__views.buscar);
    buscar ? $.__views.buscar.addEventListener("click", buscar) : __defers["$.__views.buscar!click!buscar"] = true;
    $.__views.topmenu = Ti.UI.createView({
        top: "0",
        right: "0",
        zIndex: 1,
        width: "10%",
        height: "54",
        id: "topmenu"
    });
    $.__views.iconBar.add($.__views.topmenu);
    $.__views.menutoplateral = Ti.UI.createImageView({
        height: "90%",
        width: "50",
        backgroundImage: "/ico_menulateral.png",
        backgroundSelectedImage: "/ico_menulateral_focus.png",
        id: "menutoplateral"
    });
    $.__views.topmenu.add($.__views.menutoplateral);
    menutoplateral ? $.__views.menutoplateral.addEventListener("click", menutoplateral) : __defers["$.__views.menutoplateral!click!menutoplateral"] = true;
    $.__views.bannerhome = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "20%",
        backgroundColor: "#003b5d",
        id: "bannerhome"
    });
    $.__views.main.add($.__views.bannerhome);
    $.__views.logobuap = Ti.UI.createImageView({
        backgroundImage: "/logobuap.jpg",
        width: "400px",
        height: "133px",
        id: "logobuap"
    });
    $.__views.bannerhome.add($.__views.logobuap);
    $.__views.labeltitulotablaeventos = Ti.UI.createLabel({
        backgroundColor: "#575757",
        top: "15px",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        width: "100%",
        height: "40px",
        font: {
            fontSize: "18dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "labeltitulotablaeventos",
        text: "	Proximas Actividades"
    });
    $.__views.main.add($.__views.labeltitulotablaeventos);
    var __alloyId115 = [];
    $.__views.titulo_tabla = Ti.UI.createTableViewSection({
        id: "titulo_tabla"
    });
    __alloyId115.push($.__views.titulo_tabla);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({
        id: "__alloyId116"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        width: "100%",
        height: "55px",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId119"
    });
    $.__views.__alloyId117.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId120"
    });
    $.__views.__alloyId117.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createTableViewRow({
        id: "__alloyId121"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        width: "100%",
        height: "55px",
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId125"
    });
    $.__views.__alloyId122.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createTableViewRow({
        id: "__alloyId126"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        width: "100%",
        height: "55px",
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId129"
    });
    $.__views.__alloyId127.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId130"
    });
    $.__views.__alloyId127.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createTableViewRow({
        id: "__alloyId131"
    });
    $.__views.titulo_tabla.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        width: "100%",
        height: "55px",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createImageView({
        left: "10px",
        width: "35px",
        height: "35px",
        image: "/iconblue.png",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        left: "55px",
        text: "Entrega de examen de mate",
        id: "__alloyId134"
    });
    $.__views.__alloyId132.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        color: "#e8e8e8",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_RIGHT",
        right: "10px",
        text: "10:20 a.m.",
        id: "__alloyId135"
    });
    $.__views.__alloyId132.add($.__views.__alloyId135);
    $.__views.tableeventos = Ti.UI.createTableView({
        top: "0px",
        backgroundColor: "#252525",
        width: "100%",
        height: "230px",
        data: __alloyId115,
        id: "tableeventos"
    });
    $.__views.main.add($.__views.tableeventos);
    $.__views.viewbotoneshome = Ti.UI.createView({
        top: "15px",
        width: "100%",
        height: "250px",
        id: "viewbotoneshome"
    });
    $.__views.main.add($.__views.viewbotoneshome);
    $.__views.__alloyId136 = Ti.UI.createButton({
        title: "Escanear",
        top: "10",
        left: "5",
        width: "49%",
        height: "50",
        id: "__alloyId136"
    });
    $.__views.viewbotoneshome.add($.__views.__alloyId136);
    openscan ? $.__views.__alloyId136.addEventListener("click", openscan) : __defers["$.__views.__alloyId136!click!openscan"] = true;
    $.__views.__alloyId137 = Ti.UI.createButton({
        title: "Alimenta tus neuronas",
        top: "60",
        left: "5",
        width: "49%",
        height: "50",
        id: "__alloyId137"
    });
    $.__views.viewbotoneshome.add($.__views.__alloyId137);
    doClick ? $.__views.__alloyId137.addEventListener("click", doClick) : __defers["$.__views.__alloyId137!click!doClick"] = true;
    $.__views.__alloyId138 = Ti.UI.createButton({
        title: "Lobomercado",
        top: "110",
        left: "5",
        width: "49%",
        height: "50",
        id: "__alloyId138"
    });
    $.__views.viewbotoneshome.add($.__views.__alloyId138);
    doClick ? $.__views.__alloyId138.addEventListener("click", doClick) : __defers["$.__views.__alloyId138!click!doClick"] = true;
    $.__views.__alloyId139 = Ti.UI.createButton({
        title: "Mapa",
        top: "10",
        right: "5",
        width: "49%",
        height: "50",
        id: "__alloyId139"
    });
    $.__views.viewbotoneshome.add($.__views.__alloyId139);
    doClick ? $.__views.__alloyId139.addEventListener("click", doClick) : __defers["$.__views.__alloyId139!click!doClick"] = true;
    $.__views.__alloyId140 = Ti.UI.createButton({
        title: "Agenda",
        top: "60",
        right: "5",
        width: "49%",
        height: "50",
        id: "__alloyId140"
    });
    $.__views.viewbotoneshome.add($.__views.__alloyId140);
    doClick ? $.__views.__alloyId140.addEventListener("click", doClick) : __defers["$.__views.__alloyId140!click!doClick"] = true;
    $.__views.__alloyId141 = Ti.UI.createButton({
        title: "Noticias",
        top: "110",
        right: "5",
        width: "49%",
        height: "50",
        id: "__alloyId141"
    });
    $.__views.viewbotoneshome.add($.__views.__alloyId141);
    doClick ? $.__views.__alloyId141.addEventListener("click", doClick) : __defers["$.__views.__alloyId141!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var scanditsdk = require("com.mirasense.scanditsdk");
    var picker;
    var window = Titanium.UI.createWindow({
        title: "Scandit SDK",
        navBarHidden: true
    });
    var openScanner = function() {
        picker = scanditsdk.createView({
            width: "100%",
            height: "100%"
        });
        picker.init("rsaYGOKUEeOPY4HVTyBKUVusIyb6iHKm5lLxAqiLXnI", 0);
        picker.showSearchBar(true);
        picker.showToolBar(true);
        picker.setSuccessCallback(function(e) {
            alert("success (" + e.symbology + "): " + e.barcode);
        });
        picker.setCancelCallback(function() {
            closeScanner();
        });
        window.add(picker);
        window.addEventListener("open", function() {
            picker.setOrientation(window.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
            picker.startScanning();
        });
        window.open();
    };
    var closeScanner = function() {
        if (null != picker) {
            picker.stopScanning();
            window.remove(picker);
        }
    };
    $.index.addEventListener("androidback", function(e) {
        e.cancelBubble = true;
        $.index.close();
    });
    $.index.open();
    __defers["$.__views.cambiarestado!click!cambiarestado"] && $.__views.cambiarestado.addEventListener("click", cambiarestado);
    __defers["$.__views.chat!click!chat"] && $.__views.chat.addEventListener("click", chat);
    __defers["$.__views.eventos!click!eventos"] && $.__views.eventos.addEventListener("click", eventos);
    __defers["$.__views.avisos!click!avisos"] && $.__views.avisos.addEventListener("click", avisos);
    __defers["$.__views.buscar!click!buscar"] && $.__views.buscar.addEventListener("click", buscar);
    __defers["$.__views.menutoplateral!click!menutoplateral"] && $.__views.menutoplateral.addEventListener("click", menutoplateral);
    __defers["$.__views.__alloyId136!click!openscan"] && $.__views.__alloyId136.addEventListener("click", openscan);
    __defers["$.__views.__alloyId137!click!doClick"] && $.__views.__alloyId137.addEventListener("click", doClick);
    __defers["$.__views.__alloyId138!click!doClick"] && $.__views.__alloyId138.addEventListener("click", doClick);
    __defers["$.__views.__alloyId139!click!doClick"] && $.__views.__alloyId139.addEventListener("click", doClick);
    __defers["$.__views.__alloyId140!click!doClick"] && $.__views.__alloyId140.addEventListener("click", doClick);
    __defers["$.__views.__alloyId141!click!doClick"] && $.__views.__alloyId141.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;